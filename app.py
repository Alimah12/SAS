# src/app.py
from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from flask_cors import CORS
import json
import threading
import time
import os

app = Flask(__name__)
CORS(app)

# In-memory database for users
users = {}

# Backup file path
backup_file_path = 'backup_users.json'

def save_backup():
    """Function to save user data to a backup file."""
    with open(backup_file_path, 'w') as backup_file:
        json.dump(users, backup_file)
    print(f"Backup saved to {backup_file_path}")

def backup_scheduler():
    """Scheduler that runs in a separate thread to periodically back up data."""
    while True:
        save_backup()
        time.sleep(3600)  # Backup every hour

# Start the backup scheduler in a separate thread
backup_thread = threading.Thread(target=backup_scheduler, daemon=True)
backup_thread.start()

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if username in users:
        return jsonify({"error": "Username already exists."}), 400

    users[username] = {
        "email": email,
        "password": password  # In a real application, store hashed passwords
    }
    
    return jsonify({"message": "User registered successfully!"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = users.get(username)
    if user and user['password'] == password:
        return jsonify({"message": "Login successful!"}), 200

    return jsonify({"error": "Invalid username or password."}), 401

# Endpoint to fetch user profile data
@app.route('/profile/<username>', methods=['GET'])
def get_profile(username):
    user = users.get(username)
    if not user:
        return jsonify({"error": "User not found."}), 404

    return jsonify({
        "username": username,
        "email": user['email']
        # You can add more user fields here as needed
    }), 200

model = None

data = {
    'District': ['Nakuru', 'Kisumu', 'Nyeri', 'Mombasa', 'Garissa', 'Meru', 'Kilifi', 'Bungoma'],
    'Rainfall_mm': [800, 1200, 900, 700, 300, 1000, 600, 1100],
    'Temperature_C': [18, 22, 20, 30, 35, 19, 29, 21],
    'Soil_pH': [6.5, 6.0, 5.5, 8.0, 7.5, 5.8, 8.1, 6.2],
    'Crop_Yield_Tons': [2.5, 3.0, 2.8, 1.5, 0.8, 3.2, 1.3, 3.1]
}

crop_recommendations = {
    'Nakuru': ['Maize', 'Beans', 'Potatoes'],
    'Kisumu': ['Rice', 'Cassava', 'Sugarcane'],
    'Nyeri': ['Coffee', 'Tea', 'Maize'],
    'Mombasa': ['Coconut', 'Pineapple', 'Taro'],
    'Garissa': ['Sorghum', 'Goat Pea'],
    'Meru': ['Banana', 'Avocado', 'Coffee'],
    'Kilifi': ['Cashew Nuts', 'Coconut', 'Sorghum'],
    'Bungoma': ['Maize', 'Beans', 'Sorghum']
}

def train_model():
    global model
    df = pd.DataFrame(data)
    df_encoded = pd.get_dummies(df, columns=['District'], drop_first=True)
    X = df_encoded.drop('Crop_Yield_Tons', axis=1)
    y = df_encoded['Crop_Yield_Tons']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = LinearRegression()
    model.fit(X_train, y_train)

@app.route('/train', methods=['GET'])
def train():
    if model is not None:
        return jsonify({"message": "Model is already trained!"}), 200
    train_model()
    return jsonify({"message": "Model trained successfully!"}), 200

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    district = data.get('District')

    if district not in crop_recommendations:
        return jsonify({"error": "Invalid district. Please choose a valid district."}), 400

    recommended_crops = crop_recommendations[district]
    return jsonify({"recommended_crops": recommended_crops})

# Set default values for rainfall and soil pH
DEFAULT_RAINFALL_MM = 500  # Replace with appropriate average
DEFAULT_SOIL_PH = 6.5      # Replace with appropriate average

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({"error": "Model not trained. Please train the model first."}), 400
    
    data = request.json
    print("Received data for prediction:", data)

    district = data.get('District')
    temperature = data.get('Temperature_C')
    
    # Set default values if not provided
    rainfall = data.get('Rainfall_mm', DEFAULT_RAINFALL_MM)
    soil_ph = data.get('Soil_pH', DEFAULT_SOIL_PH)

    if district is None or temperature is None:
        return jsonify({"error": "Missing input data. Please provide District and Temperature_C."}), 400

    if district not in ['Nakuru', 'Kisumu', 'Nyeri', 'Mombasa', 'Garissa', 'Meru', 'Kilifi', 'Bungoma']:
        return jsonify({
            "error": f"Invalid district. Please choose from {', '.join(['Nakuru', 'Kisumu', 'Nyeri', 'Mombasa', 'Garissa', 'Meru', 'Kilifi', 'Bungoma'])}."
        }), 400
    
    input_data = pd.DataFrame({
        'Rainfall_mm': [rainfall],
        'Temperature_C': [temperature],
        'Soil_pH': [soil_ph]
    })
    
    input_data_encoded = pd.DataFrame()
    for dist in ['Kisumu', 'Nyeri', 'Mombasa', 'Garissa', 'Meru', 'Kilifi', 'Bungoma']:
        input_data_encoded[f'District_{dist}'] = [1 if dist == district else 0]

    input_data = pd.concat([input_data, input_data_encoded], axis=1)

    expected_columns = model.feature_names_in_
    input_data = input_data.reindex(columns=expected_columns, fill_value=0)

    prediction = model.predict(input_data)

    guidance = f"For optimal yield, ensure adequate water supply and use organic fertilizers."

    return jsonify({
        "predicted_crop_yield": prediction[0],
        "guidance": guidance
    })

if __name__ == '__main__':
    if not os.path.exists(backup_file_path):
        # Create an empty backup file if it doesn't exist
        save_backup()
    app.run(debug=True)
