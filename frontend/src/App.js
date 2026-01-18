import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { WhyCarSelect } from './components/WhyCarSelect';
import { SpecialDeals } from './components/SpecialDeals';
import { FeaturedPromotion } from './components/FeaturedPromotion';
import { BestDeals } from './components/BestDeals';
import { ReviewsSection } from './components/ReviewsSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <HeroSection />
                <WhyCarSelect />
                <SpecialDeals />
                <FeaturedPromotion />
                <BestDeals />
                <ReviewsSection />
                <NewsSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;
