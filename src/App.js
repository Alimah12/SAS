import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [district, setDistrict] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [temperature, setTemperature] = useState('');
  const [soilPh, setSoilPh] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [recommendedCrops, setRecommendedCrops] = useState([]); // New state for recommended crops
  const [guidance, setGuidance] = useState(''); // New state for guidance
  const [error, setError] = useState(null); // Error state

  const handlePredict = () => {
    // Validate input data
    if (!district || !rainfall || !temperature || !soilPh) {
      setError("Please fill in all fields.");
      return;
    }

    const inputData = {
      District: district,
      Rainfall_mm: parseFloat(rainfall),
      Temperature_C: parseFloat(temperature),
      Soil_pH: parseFloat(soilPh),
    };

    // Predict crop yield
    axios
      .post('http://127.0.0.1:5000/predict', inputData)
      .then((response) => {
        setPrediction(response.data.predicted_crop_yield);
        setGuidance(response.data.guidance);
        setError(null); // Reset error state
      })
      .catch((error) => {
        console.error('There was an error making the request!', error);
        setError("There was an error processing your request."); // Set error message
      });
  };

  const handleRecommend = () => {
    // Validate district input
    if (!district) {
      setError("Please select a district.");
      return;
    }

    const recommendData = { District: district };

    // Get recommended crops
    axios
      .post('http://127.0.0.1:5000/recommend', recommendData)
      .then((response) => {
        setRecommendedCrops(response.data.recommended_crops);
        setError(null); // Reset error state
      })
      .catch((error) => {
        console.error('There was an error making the request!', error);
        setError("There was an error processing your request."); // Set error message
      });
  };

  return (
    <div className="App">
      <h1>Smart Agriculture System</h1>
      <div className="form-group">
        <label>District:</label>
        <input
          type="text"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Rainfall (mm):</label>
        <input
          type="number"
          value={rainfall}
          onChange={(e) => setRainfall(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Temperature (°C):</label>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Soil pH:</label>
        <input
          type="number"
          step="0.1"
          value={soilPh}
          onChange={(e) => setSoilPh(e.target.value)}
        />
      </div>
      <button onClick={handlePredict}>Predict Yield</button>
      <button onClick={handleRecommend}>Get Recommendations</button>

      {prediction !== null && (
        <div className="result">
          <h2>Predicted Crop Yield: {prediction.toFixed(2)} Tons</h2>
          <p>{guidance}</p> {/* Display guidance */}
        </div>
      )}

      {recommendedCrops.length > 0 && (
        <div className="recommendations">
          <h2>Recommended Crops:</h2>
          <ul>
            {recommendedCrops.map((crop, index) => (
              <li key={index}>{crop}</li>
            ))}
          </ul>
        </div>
      )}

      {error && (
        <div className="error">
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
