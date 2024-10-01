from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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
    app.run(debug=True)
