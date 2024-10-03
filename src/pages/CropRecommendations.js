import React, { useState } from 'react';
import './CropRecommendations.css';

function CropRecommendations() {
  const [district, setDistrict] = useState('');
  const [recommendedCrops, setRecommendedCrops] = useState([]);
  const [error, setError] = useState(null);

  const districts = ['Nakuru', 'Kisumu', 'Nyeri', 'Mombasa', 'Garissa', 'Meru', 'Kilifi', 'Bungoma'];

  const cropRecommendationsWithDetails = {
    'Nakuru': [
      { name: 'Maize', image: '/images/maize.jpg', description: 'Grows well in well-drained soils with moderate rainfall.', season: 'March to September' },
      { name: 'Beans', image: '/images/beans.jpg', description: 'Requires warm temperatures and light rains.', season: 'May to August' },
    ],
    'Kisumu': [
      { name: 'Rice', image: '/images/rice.jpg', description: 'Thrives in waterlogged fields and requires constant water supply.', season: 'April to October' },
      { name: 'Sorghum', image: '/images/sorghum.jpg', description: 'Drought-resistant, ideal for semi-arid conditions.', season: 'March to November' },
    ],
    'Nyeri': [
      { name: 'Coffee', image: '/images/coffee.jpg', description: 'Grows in well-drained soils, requires altitude and cool temperatures.', season: 'March to June' },
      { name: 'Tea', image: '/images/tea.jpg', description: 'Thrives in cool temperatures and high rainfall areas.', season: 'Year-round' },
    ],
    'Mombasa': [
      { name: 'Coconut', image: '/images/coconut.jpg', description: 'Requires sandy, well-drained soils near coastal areas.', season: 'Year-round' },
      { name: 'Mangoes', image: '/images/mango.jpg', description: 'Requires warm temperatures and occasional watering.', season: 'November to March' },
    ],
    'Garissa': [
      { name: 'Sorghum', image: '/images/sorghum.jpg', description: 'Drought-resistant, ideal for semi-arid conditions.', season: 'April to November' },
      { name: 'Millet', image: '/images/millet.jpg', description: 'Ideal for hot, dry climates and requires minimal water.', season: 'May to August' },
    ],
    'Meru': [
      { name: 'Potatoes', image: '/images/potato.jpg', description: 'Thrives in well-drained loam soils and requires moderate rainfall.', season: 'April to August' },
      { name: 'Bananas', image: '/images/banana.jpg', description: 'Requires consistent rainfall and warm temperatures.', season: 'Year-round' },
    ],
    'Kilifi': [
      { name: 'Cassava', image: '/images/cassava.jpg', description: 'Thrives in dry conditions with well-drained soils.', season: 'March to October' },
      { name: 'Pineapples', image: '/images/pineapple.jpg', description: 'Grows best in sandy soils with moderate rainfall.', season: 'November to April' },
    ],
    'Bungoma': [
      { name: 'Maize', image: '/images/maize.jpg', description: 'Grows well in well-drained soils with moderate rainfall.', season: 'March to September' },
      { name: 'Sugarcane', image: '/images/sugarcane.jpg', description: 'Requires fertile soils and abundant water supply.', season: 'Year-round' },
    ],
  };

  const handleRecommend = () => {
    if (!district) {
      setError("Please select a district.");
      return;
    }

    const crops = cropRecommendationsWithDetails[district];
    if (crops) {
      setRecommendedCrops(crops);
      setError(null);
    } else {
      setError("No recommendations found for this district.");
      setRecommendedCrops([]);
    }
  };

  return (
    <div className="recommendations-container">
      <h1>Crop Recommendations</h1>
      <div className="form-group">
        <label>Select District:</label>
        <select value={district} onChange={(e) => setDistrict(e.target.value)}>
          <option value="">-- Select District --</option>
          {districts.map((districtName) => (
            <option key={districtName} value={districtName}>
              {districtName}
            </option>
          ))}
        </select>
      </div>
      <button className="recommend-button" onClick={handleRecommend}>
        Get Recommendations
      </button>
      
      {recommendedCrops.length > 0 && (
        <div className="recommendations-grid">
          {recommendedCrops.map((crop, index) => (
            <div key={index} className="crop-card">
              <img src={crop.image} alt={crop.name} className="crop-image" />
              <h2>{crop.name}</h2>
              <p>{crop.description}</p>
              <p><strong>Season:</strong> {crop.season}</p>
            </div>
          ))}
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
