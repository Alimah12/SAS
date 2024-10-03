import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CropYieldPrediction.css';

const weatherApiKey = '07d875045be065fbc2f9b8263d0e11ce'; // Replace with your API key

function CropYieldPrediction() {
  const [district, setDistrict] = useState('');
  const [rainfall, setRainfall] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [soilPh, setSoilPh] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [guidance, setGuidance] = useState('');
  const [error, setError] = useState(null);
  const [recommendedCrops, setRecommendedCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState('');

  // Default averages for rainfall and soil pH
  const defaultValues = {
    'Nakuru': { rainfall: 800, soilPh: 6.5 },
    'Kisumu': { rainfall: 1200, soilPh: 6.0 },
    'Nyeri': { rainfall: 900, soilPh: 5.5 },
    'Mombasa': { rainfall: 700, soilPh: 8.0 },
    'Garissa': { rainfall: 300, soilPh: 7.5 },
    'Meru': { rainfall: 1000, soilPh: 5.8 },
    'Kilifi': { rainfall: 600, soilPh: 8.1 },
    'Bungoma': { rainfall: 1100, soilPh: 6.2 }
  };

  useEffect(() => {
    if (district) {
      fetchWeatherData(district);
      fetchCropRecommendations(district);
      
      // Set default values for rainfall and soil pH based on the selected district
      const defaults = defaultValues[district];
      if (defaults) {
        setRainfall(defaults.rainfall);
        setSoilPh(defaults.soilPh);
      } else {
        setRainfall(null);
        setSoilPh(null);
        setError("No default values available for the selected district.");
      }
    }
  }, [district]);

  // Function to fetch weather data based on district name
  const fetchWeatherData = (district) => {
    const cityMap = {
      'Nakuru': { lat: -0.3031, lon: 36.0676 },
      'Kisumu': { lat: -0.0917, lon: 34.7622 },
      'Nyeri': { lat: -0.4167, lon: 36.9538 },
      'Mombasa': { lat: -4.0435, lon: 39.6682 },
      'Garissa': { lat: -0.4540, lon: 39.6483 },
      'Meru': { lat: -0.0499, lon: 37.6500 },
      'Kilifi': { lat: -3.8652, lon: 39.5980 },
      'Bungoma': { lat: -0.5969, lon: 34.5600 }
    };
    
    const location = cityMap[district];
    if (!location) {
      setError("Invalid district selected.");
      return;
    }

    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${weatherApiKey}&units=metric`;

    axios.get(weatherUrl)
      .then((response) => {
        const weatherData = response.data;
        setTemperature(weatherData.main.temp);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setError('Could not fetch weather data for the selected district.');
      });
  };

  // Function to fetch recommended crops based on the district
  const fetchCropRecommendations = (district) => {
    axios.post('http://127.0.0.1:5000/recommend', { District: district })
      .then((response) => {
        setRecommendedCrops(response.data.recommended_crops);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching crop recommendations:', error);
        setError('Could not fetch crop recommendations for the selected district.');
      });
  };

  // Function to handle crop yield prediction
  const handlePredict = () => {
    if (!district || rainfall === null || temperature === null || soilPh === null || !selectedCrop) {
      setError("Please fill in all fields and select a crop.");
      return;
    }

    const inputData = {
      District: district,
      Rainfall_mm: parseFloat(rainfall),
      Temperature_C: parseFloat(temperature),
      Soil_pH: parseFloat(soilPh),
    };

    axios.post('http://127.0.0.1:5000/predict', inputData)
      .then((response) => {
        setPrediction(response.data.predicted_crop_yield);
        setGuidance(response.data.guidance);
        setError(null);
      })
      .catch((error) => {
        console.error('Error making the prediction:', error);
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
          value={rainfall !== null ? rainfall : ''}
          disabled // Disabled since it’s automatically set
        />
      </div>
      <div className="form-group">
        <label>Temperature (°C):</label>
        <input
          type="number"
          value={temperature !== null ? temperature : ''}
          disabled // Disabled since it’s automatically fetched
        />
      </div>
      <div className="form-group">
        <label>Soil pH:</label>
        <input
          type="number"
          step="0.1"
          value={soilPh !== null ? soilPh : ''}
          disabled // Disabled since it’s automatically set
        />
      </div>
      <div className="form-group">
        <label>Select a Crop:</label>
        <select
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
        >
          <option value="">--Select a Crop--</option>
          {recommendedCrops.map((crop, index) => (
            <option key={index} value={crop}>
              {crop}
            </option>
          ))}
        </select>
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
