import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AllDealsPage } from './pages/AllDealsPage';
import { CarSelectorPage } from './pages/CarSelectorPage';
import { VehicleOptionalityPage } from './pages/VehicleOptionalityPage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/deals" element={<AllDealsPage />} />
                <Route path="/new" element={<CarSelectorPage />} />
                <Route path="/options" element={<VehicleOptionalityPage />} />
            </Routes>
        </Router>
    );
}

export default App;