import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AllDealsPage } from './pages/AllDealsPage';
import { CarSelectorPage } from './pages/CarSelectorPage';
import { VehicleOptionalityPage } from './pages/VehicleOptionalityPage';
import { CarComparisonPage } from './pages/CarComparisonPage';
import { CarReviewPage } from './pages/CarReviewPage';
import { CarOffersPage } from './pages/CarOffersPage';
import { CarOfferDetailPage } from './pages/CarOfferDetailPage';
import { FleetLeasePage } from './pages/FleetLeasePage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/deals" element={<AllDealsPage />} />
                <Route path="/new" element={<CarSelectorPage />} />
                <Route path="/options" element={<VehicleOptionalityPage />} />
                <Route path="/comparison" element={<CarComparisonPage />} />
                <Route path="/review/:carId" element={<CarReviewPage />} />
                <Route path="/offers/:carId" element={<CarOffersPage />} />
                <Route path="/offer-detail/:carId/:dealerId" element={<CarOfferDetailPage />} />
                <Route path="/lease" element={<FleetLeasePage />} />
            </Routes>
        </Router>
    );
}

export default App;