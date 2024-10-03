import React from 'react';
import './SeasonalCropGuide.css'; // Create a corresponding CSS file for styling

function SeasonalCropGuide() {
  return (
    <div className="seasonal-guide-container">
      <h1>Seasonal Crop Guide</h1>
      <p>
        Discover the best crops to plant for each season in various regions of Kenya. Learn about the ideal planting and harvesting times for optimal yields.
      </p>
      <div className="seasonal-table">
        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th>Season</th>
              <th>Recommended Crops</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coastal</td>
              <td>Short Rains (Oct-Dec)</td>
              <td>Maize, Sorghum, Cowpeas</td>
            </tr>
            <tr>
              <td>Highlands</td>
              <td>Long Rains (Mar-May)</td>
              <td>Potatoes, Barley, Peas</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SeasonalCropGuide;
