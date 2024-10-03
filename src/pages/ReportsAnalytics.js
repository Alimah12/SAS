// src/pages/ReportsAnalytics.js
import React, { useEffect, useState, useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import './ReportsAnalytics.css';

// Define color palette for Pie Charts
const COLORS = ['#FF5733', '#33C1FF', '#28B463', '#FFC300', '#8E44AD', '#FF8042', '#FF6666'];

// Define the order of months
const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ReportsAnalytics = () => {
  // State hooks for original data
  const [climateData, setClimateData] = useState([]);
  const [waterUsageData, setWaterUsageData] = useState([]);
  const [pestIncidentsData, setPestIncidentsData] = useState([]);
  const [soilHealthData, setSoilHealthData] = useState([]);
  const [yieldForecastData, setYieldForecastData] = useState([]);
  const [sustainabilityData, setSustainabilityData] = useState([]);

  // State for selected months
  const [startMonth, setStartMonth] = useState('Jan');
  const [endMonth, setEndMonth] = useState('Dec');

  // Fetch and set data (replace with actual API calls)
  useEffect(() => {
    // Climate Change Impact Data
    setClimateData([
      { month: 'Jan', temperature: 30, rainfall: 50 },
      { month: 'Feb', temperature: 32, rainfall: 60 },
      { month: 'Mar', temperature: 35, rainfall: 55 },
      { month: 'Apr', temperature: 33, rainfall: 70 },
      { month: 'May', temperature: 31, rainfall: 65 },
      { month: 'Jun', temperature: 29, rainfall: 80 },
      { month: 'Jul', temperature: 28, rainfall: 75 },
      { month: 'Aug', temperature: 27, rainfall: 60 },
      { month: 'Sep', temperature: 26, rainfall: 55 },
      { month: 'Oct', temperature: 25, rainfall: 50 },
      { month: 'Nov', temperature: 24, rainfall: 45 },
      { month: 'Dec', temperature: 23, rainfall: 40 },
    ]);

    // Water Usage Data
    setWaterUsageData([
      { region: 'North', usage: 400 },
      { region: 'South', usage: 300 },
      { region: 'East', usage: 300 },
      { region: 'West', usage: 200 },
      { region: 'Central', usage: 350 },
    ]);

    // Pest Incidents Data
    setPestIncidentsData([
      { name: 'Pest A', value: 400 },
      { name: 'Pest B', value: 300 },
      { name: 'Pest C', value: 300 },
      { name: 'Pest D', value: 200 },
      { name: 'Pest E', value: 100 },
    ]);

    // Soil Health Data
    setSoilHealthData([
      { parameter: 'pH', value: 6.5 },
      { parameter: 'Nitrogen', value: 120 },
      { parameter: 'Phosphorus', value: 80 },
      { parameter: 'Potassium', value: 100 },
      { parameter: 'Moisture', value: 30 },
    ]);

    // Yield Forecast Data
    setYieldForecastData([
      { month: 'Jan', yield: 200 },
      { month: 'Feb', yield: 220 },
      { month: 'Mar', yield: 250 },
      { month: 'Apr', yield: 270 },
      { month: 'May', yield: 300 },
      { month: 'Jun', yield: 320 },
      { month: 'Jul', yield: 310 },
      { month: 'Aug', yield: 330 },
      { month: 'Sep', yield: 340 },
      { month: 'Oct', yield: 360 },
      { month: 'Nov', yield: 350 },
      { month: 'Dec', yield: 340 },
    ]);

    // Sustainability Metrics Data
    setSustainabilityData([
      { metric: 'Water Conservation', value: 75 },
      { metric: 'Energy Efficiency', value: 65 },
      { metric: 'Carbon Footprint', value: 50 },
      { metric: 'Waste Reduction', value: 80 },
      { metric: 'Soil Preservation', value: 70 },
    ]);
  }, []);

  // Determine the index range based on selected months
  const startIndex = monthOrder.indexOf(startMonth);
  const endIndex = monthOrder.indexOf(endMonth);

  // Ensure startIndex is less than or equal to endIndex
  const validStartIndex = startIndex <= endIndex ? startIndex : endIndex;
  const validEndIndex = startIndex <= endIndex ? endIndex : startIndex;

  // Memoize filtered data to optimize performance
  const filteredClimateData = useMemo(() => {
    return climateData.filter(item => {
      const idx = monthOrder.indexOf(item.month);
      return idx >= validStartIndex && idx <= validEndIndex;
    });
  }, [climateData, validStartIndex, validEndIndex]);

  const filteredYieldForecastData = useMemo(() => {
    return yieldForecastData.filter(item => {
      const idx = monthOrder.indexOf(item.month);
      return idx >= validStartIndex && idx <= validEndIndex;
    });
  }, [yieldForecastData, validStartIndex, validEndIndex]);

  return (
    <div className="reports-analytics-container">
      <h1>Reports & Analytics</h1>
      <p className="introduction">
        Welcome to the Reports & Analytics section of the Smart Agriculture System. Here, you can explore various data-driven insights related to climate impact, water usage, pest management, soil health, yield forecasting, and sustainability metrics. Use the filters below to customize the data visualization according to your analysis needs.
      </p>
      
      {/* Filter Section */}
      <section className="filter-section">
        <h2>Filter Data by Months</h2>
        <div className="filter-controls">
          <div className="filter-control">
            <label htmlFor="start-month">Start Month:</label>
            <select 
              id="start-month" 
              value={startMonth} 
              onChange={(e) => setStartMonth(e.target.value)}
            >
              {monthOrder.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className="filter-control">
            <label htmlFor="end-month">End Month:</label>
            <select 
              id="end-month" 
              value={endMonth} 
              onChange={(e) => setEndMonth(e.target.value)}
            >
              {monthOrder.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Climate Change Impact Section */}
      <section className="report-section">
        <h2>Climate Change Impact</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={filteredClimateData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis 
              yAxisId="left" 
              label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }} 
              domain={['dataMin - 5', 'dataMax + 5']}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideRight' }} 
              domain={[0, 'dataMax + 20']}
            />
            <Tooltip />
            <Legend />
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="temperature" 
              stroke="#FF5733" 
              name="Temperature (°C)" 
              activeDot={{ r: 8 }}
            />
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="rainfall" 
              stroke="#33C1FF" 
              name="Rainfall (mm)" 
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="chart-explanation">
          <strong>Explanation:</strong> This line chart illustrates the trends in temperature and rainfall across the selected months. It helps in understanding how climate variations influence crop growth and planning.
        </p>
      </section>
      
      {/* Water Usage Optimization Section */}
      <section className="report-section">
        <h2>Water Usage Optimization</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={waterUsageData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis 
              label={{ value: 'Water Usage (Liters)', angle: -90, position: 'insideLeft' }} 
              domain={[0, 'dataMax + 50']}
            />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="usage" 
              fill="#28B463" 
              name="Water Usage (Liters)" 
              barSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
        <p className="chart-explanation">
          <strong>Explanation:</strong> The bar chart displays water usage across different regions. It identifies regions with high water consumption, allowing for targeted water conservation strategies.
        </p>
      </section>
      
      {/* Pest and Disease Management Section */}
      <section className="report-section">
        <h2>Pest Incidents Overview</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={pestIncidentsData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {pestIncidentsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
        <p className="chart-explanation">
          <strong>Explanation:</strong> This pie chart represents the distribution of various pest incidents. It highlights the most prevalent pests, enabling focused pest control measures.
        </p>
      </section>
      
      {/* Soil Health Metrics Section */}
      <section className="report-section">
        <h2>Soil Health Metrics</h2>
        <div className="soil-health-content">
          <table className="soil-health-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {soilHealthData.map((item, index) => (
                <tr key={index}>
                  <td>{item.parameter}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={soilHealthData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="parameter" />
              <YAxis 
                label={{ value: 'Value', angle: -90, position: 'insideLeft' }} 
                domain={[0, 'dataMax + 50']}
              />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="value" 
                fill="#FFC300" 
                name="Soil Metrics" 
                barSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="chart-explanation">
          <strong>Explanation:</strong> The table and bar chart present key soil health parameters such as pH, nutrient levels, and moisture content. Maintaining optimal soil health is essential for robust crop growth.
        </p>
      </section>
      
      {/* Yield Forecasting Section */}
      <section className="report-section">
        <h2>Yield Forecasting</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={filteredYieldForecastData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis 
              label={{ value: 'Yield (tons)', angle: -90, position: 'insideLeft' }} 
              domain={[0, 'dataMax + 50']}
            />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="yield" 
              stroke="#8E44AD" 
              name="Yield (tons)" 
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="chart-explanation">
          <strong>Explanation:</strong> This line chart forecasts crop yields based on selected months. It assists in resource planning and risk management by predicting future production levels.
        </p>
      </section>
      
      {/* Sustainability Metrics Section */}
      <section className="report-section">
        <h2>Sustainability Metrics</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={sustainabilityData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              type="number" 
              domain={[0, 100]} 
              label={{ value: 'Percentage (%)', position: 'insideBottom', offset: -5 }} 
            />
            <YAxis dataKey="metric" type="category" />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="value" 
              fill="#27AE60" 
              name="Sustainability (%)" 
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
        <p className="chart-explanation different-color">
          <strong>Explanation:</strong> The vertical bar chart showcases key sustainability metrics such as water conservation, energy efficiency, and waste reduction. Monitoring these metrics ensures environmentally responsible farming practices.
        </p>
      </section>
    </div>
    
  );
};

export default ReportsAnalytics;
