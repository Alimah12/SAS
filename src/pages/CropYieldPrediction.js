import React, { useState } from 'react';
import axios from 'axios';
import './CropYieldPrediction.css'; // Create a corresponding CSS file for styling

function CropYieldPrediction() {
  const [district, setDistrict] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [temperature, setTemperature] = useState('');
  const [soilPh, setSoilPh] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [guidance, setGuidance] = useState('');
  const [error, setError] = useState(null);

  const handlePredict = () => {
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

    axios
      .post('http://127.0.0.1:5000/predict', inputData)
      .then((response) => {
        setPrediction(response.data.predicted_crop_yield);
        setGuidance(response.data.guidance);
        setError(null);
      })
      .catch((error) => {
        console.error('There was an error making the request!', error);
        setError("There was an error processing your request.");
      });
  };

  return (
    <div className="prediction-container">
      <h1>Crop Yield Prediction</h1>
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
      {prediction !== null && (
        <div className="result">
          <h2>Predicted Crop Yield: {prediction.toFixed(2)} Tons</h2>
          <p>{guidance}</p>
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

export default CropYieldPrediction;
