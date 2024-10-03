// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CropYieldPrediction from './pages/CropYieldPrediction';
import CropRecommendations from './pages/CropRecommendations';
import SeasonalCropGuide from './pages/SeasonalCropGuide';
import SoilManagement from './pages/SoilManagement';
import WeatherForecast from './pages/WeatherForecast';
import FarmersMarket from './pages/FarmersMarket';
import AlertsNotifications from './pages/AlertsNotifications';
import ReportsAnalytics from './pages/ReportsAnalytics';
import KnowledgeBase from './pages/KnowledgeBase';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import About from './pages/About';
import ContactSupport from './pages/ContactSupport';
import Header from './components/Header';
import Footer from './components/Footer';
import { UserProvider } from './contexts/UserContext'; // Import UserProvider

function App() {
  return (
    <UserProvider> {/* Wrap Router with UserProvider */}
      <Router>
        <div className="App">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/predict" element={<CropYieldPrediction />} />
              <Route path="/recommend" element={<CropRecommendations />} />
              <Route path="/seasonal-guide" element={<SeasonalCropGuide />} />
              <Route path="/soil-management" element={<SoilManagement />} />
              <Route path="/weather-forecast" element={<WeatherForecast />} />
              <Route path="/market" element={<FarmersMarket />} />
              <Route path="/alerts" element={<AlertsNotifications />} />
              <Route path="/reports" element={<ReportsAnalytics />} />
              <Route path="/knowledge" element={<KnowledgeBase />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactSupport />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
