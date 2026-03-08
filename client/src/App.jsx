import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import LandingPage from './pages/home/LandingPage';
import AuthContainer from './pages/auth/AuthContainer';
import DashboardLayout from './layouts/DashboardLayout';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthContainer />} />
          <Route path="/register" element={<AuthContainer />} />
          <Route path="/dashboard/*" element={<DashboardLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

