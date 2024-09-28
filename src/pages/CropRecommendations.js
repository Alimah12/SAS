import React, { useState } from 'react';
import axios from 'axios';
import './CropRecommendations.css'; // Create a corresponding CSS file for styling

function CropRecommendations() {
  const [district, setDistrict] = useState('');
  const [recommendedCrops, setRecommendedCrops] = useState([]);
  const [error, setError] = useState(null);

  const handleRecommend = () => {
    if (!district) {
      setError("Please select a district.");
      return;
    }

    const recommendData = { District: district };

    axios
      .post('http://127.0.0.1:5000/recommend', recommendData)
      .then((response) => {
        setRecommendedCrops(response.data.recommended_crops);
        setError(null);
      })
      .catch((error) => {
        console.error('There was an error making the request!', error);
        setError("There was an error processing your request.");
      });
  };

  return (
    <div className="recommendations-container">
      <h1>Crop Recommendations</h1>
      <div className="form-group">
        <label>District:</label>
        <input
          type="text"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>
      <button onClick={handleRecommend}>Get Recommendations</button>
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

export default CropRecommendations;
