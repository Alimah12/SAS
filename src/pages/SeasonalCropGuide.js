import React from 'react';
import './SeasonalCropGuide.css'; // Make sure this file is created with the updated CSS

function SeasonalCropGuide() {
  return (
    <div className="seasonal-guide-container">
      <h1>Seasonal Crop Guide</h1>
      <p>
        Agriculture in Kenya is heavily influenced by seasonal rainfall patterns. Different regions experience varying climate conditions that determine which crops thrive best at certain times of the year. This guide provides insights into which crops to plant during Kenya’s two main rainy seasons, the Long Rains (March-May) and the Short Rains (October-December). By following this guide, farmers can maximize their yields, ensure food security, and make informed decisions on crop rotation and soil management.
      </p>
      <p>
        Discover the best crops to plant for each season in various regions of Kenya. Learn about the ideal planting and harvesting times, soil requirements, and specific climate conditions for optimal yields.
      </p>
      <div className="seasonal-table">
        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th>Season</th>
              <th>Recommended Crops</th>
              <th>Planting Time</th>
              <th>Harvesting Time</th>
              <th>Soil Requirements</th>
              <th>Climate Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coastal</td>
              <td>Short Rains (Oct-Dec)</td>
              <td>Maize, Sorghum, Cowpeas</td>
              <td>October</td>
              <td>January</td>
              <td>Well-drained loam soils</td>
              <td>Hot and humid, with average rainfall</td>
            </tr>
            <tr>
              <td>Highlands</td>
              <td>Long Rains (Mar-May)</td>
              <td>Potatoes, Barley, Peas</td>
              <td>March</td>
              <td>July</td>
              <td>Fertile volcanic soils</td>
              <td>Cool and wet, with high rainfall</td>
            </tr>
            <tr>
              <td>Western</td>
              <td>Long Rains (Mar-May)</td>
              <td>Beans, Millet, Sweet Potatoes</td>
              <td>March</td>
              <td>June</td>
              <td>Well-drained sandy loam soils</td>
              <td>Warm and wet, with moderate rainfall</td>
            </tr>
            <tr>
              <td>Eastern</td>
              <td>Short Rains (Oct-Dec)</td>
              <td>Pigeon Peas, Green Grams, Sorghum</td>
              <td>October</td>
              <td>February</td>
              <td>Sandy and well-drained soils</td>
              <td>Arid to semi-arid, with low rainfall</td>
            </tr>
            <tr>
              <td>Rift Valley</td>
              <td>Long Rains (Mar-May)</td>
              <td>Wheat, Barley, Maize</td>
              <td>March</td>
              <td>August</td>
              <td>Fertile loam soils</td>
              <td>Cool and moderate rainfall</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SeasonalCropGuide;
