import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Slider } from '../components/ui/slider';
import { 
    ChevronLeft, 
    ChevronRight, 
    Play, 
    Car, 
    Users,
    Smartphone,
    Radio,
    Lock,
    Shield,
    Settings,
    Navigation as NavigationIcon
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion';

export const CarOfferDetailPage = () => {
    const navigate = useNavigate();
    const { carId, dealerId } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('cash');
    
    // Finance calculator state
    const [deposit, setDeposit] = useState(10000);
    const [balloonPayment, setBalloonPayment] = useState(10000);
    const vehiclePrice = 47700;
    const savings = 2200;
    
    const carImages = [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80',
        'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&q=80',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
        'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&q=80',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80',
    ];
    
    const vehicleInfo = {
        mileage: 'New',
        powertrain: 'Petrol Mild-Hybrid',
        engineSize: '1.2L',
        safetyRating: '5-Star',
        doors: '5',
        seats: '5',
        transmission: 'Automatic',
        colour: 'Ice White',
    };
    
    // Calculate amount financed and weekly payment
    const amountFinanced = vehiclePrice - deposit - balloonPayment;
    const interestRate = 0.095; // 9.5% per annum
    const termYears = 5;
    const weeksPerYear = 52;
    const totalWeeks = termYears * weeksPerYear;
    
    // Simple interest calculation for weekly payment
    const weeklyInterestRate = interestRate / weeksPerYear;
    const weeklyPayment = (amountFinanced * weeklyInterestRate * Math.pow(1 + weeklyInterestRate, totalWeeks)) / 
                         (Math.pow(1 + weeklyInterestRate, totalWeeks) - 1);
    
    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? carImages.length - 1 : prev - 1));
    };
    
    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === carImages.length - 1 ? 0 : prev + 1));
    };
    
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="container mx-auto px-4 lg:px-8">
                    <Button
                        variant="outline"
                        onClick={() => navigate(`/offers/${carId}`)}
                        className="mb-6"
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to Offers
                    </Button>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Column - Image */}
                        <div>
                            <div className="relative rounded-2xl overflow-hidden bg-muted mb-4">
                                <img
                                    src={carImages[currentImageIndex]}
                                    alt="Peugeot 3008"
                                    className="w-full h-auto"
                                />
                                
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                                >
                                    <ChevronLeft className="h-6 w-6 text-primary" />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                                >
                                    <ChevronRight className="h-6 w-6 text-primary" />
                                </button>
                                
                                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                                    {currentImageIndex + 1}/{carImages.length}
                                </div>
                            </div>
                            
                            <Button
                                size="lg"
                                className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold py-6"
                            >
                                <Play className="mr-2 h-5 w-5 fill-current" />
                                VIDEO REVIEW
                            </Button>
                        </div>
                        
                        {/* Right Column - Pricing */}
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-black text-primary mb-2">
                                PEUGEOT 3008
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-bold text-accent mb-6">
                                ALLURE HYBRID
                            </h2>
                            
                            {/* Tabs */}
                            <div className="flex gap-2 mb-6">
                                <button
                                    onClick={() => setActiveTab('cash')}
                                    className={`flex-1 py-3 px-6 text-sm font-bold rounded-t-lg transition-colors ${
                                        activeTab === 'cash'
                                            ? 'bg-muted text-primary'
                                            : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                                    }`}
                                >
                                    Cash
                                </button>
                                <button
                                    onClick={() => setActiveTab('finance')}
                                    className={`flex-1 py-3 px-6 text-sm font-bold rounded-t-lg transition-colors ${
                                        activeTab === 'finance'
                                            ? 'bg-muted text-primary'
                                            : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                                    }`}
                                >
                                    UDC Finance
                                </button>
                            </div>
                            
                            {/* Cash Tab Content */}
                            {activeTab === 'cash' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-muted rounded-b-xl rounded-tr-xl p-8"
                                >
                                    <p className="text-sm text-muted-foreground mb-2">Car Select Offer</p>
                                    <p className="text-5xl font-black text-primary mb-6">
                                        ${vehiclePrice.toLocaleString()}
                                    </p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-sm text-muted-foreground">Savings</span>
                                        <span className="text-3xl font-black text-accent">
                                            ${savings.toLocaleString()}
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                            
                            {/* Finance Tab Content */}
                            {activeTab === 'finance' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-muted rounded-b-xl rounded-tr-xl p-8"
                                >
                                    <p className="text-sm text-muted-foreground mb-2">UDC Finance Offer*</p>
                                    <p className="text-5xl font-black text-primary mb-1">
                                        ${weeklyPayment.toFixed(2)}
                                        <span className="text-xl font-bold align-super">*</span>
                                        <span className="text-2xl font-bold">PW</span>
                                    </p>
                                    <div className="flex items-baseline gap-2 mb-8">
                                        <span className="text-sm text-muted-foreground">Savings</span>
                                        <span className="text-3xl font-black text-accent">
                                            ${savings.toLocaleString()}
                                        </span>
                                    </div>
                                    
                                    {/* Finance Estimator */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-bold text-primary">Finance Estimator</h3>
                                            <div className="text-sm font-semibold text-primary">
                                                powered by <span className="text-accent">UDC</span>
                                            </div>
                                        </div>
                                        
                                        {/* Deposit Slider */}
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <label className="text-sm font-semibold text-foreground">Deposit</label>
                                                <span className="text-sm font-bold text-primary">${deposit.toLocaleString()}</span>
                                            </div>
                                            <Slider
                                                value={[deposit]}
                                                onValueChange={(value) => setDeposit(value[0])}
                                                max={vehiclePrice - 1000}
                                                min={0}
                                                step={500}
                                                className="w-full"
                                            />
                                        </div>
                                        
                                        {/* Balloon Payment Slider */}
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <label className="text-sm font-semibold text-foreground">Balloon Payment</label>
                                                <span className="text-sm font-bold text-primary">${balloonPayment.toLocaleString()}</span>
                                            </div>
                                            <Slider
                                                value={[balloonPayment]}
                                                onValueChange={(value) => setBalloonPayment(value[0])}
                                                max={vehiclePrice - deposit - 1000}
                                                min={0}
                                                step={500}
                                                className="w-full"
                                            />
                                        </div>
                                        
                                        {/* Amount Financed Slider */}
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <label className="text-sm font-semibold text-foreground">Amount Financed</label>
                                                <span className="text-sm font-bold text-primary">${amountFinanced.toLocaleString()}</span>
                                            </div>
                                            <Slider
                                                value={[amountFinanced]}
                                                max={vehiclePrice}
                                                min={1000}
                                                disabled
                                                className="w-full opacity-50"
                                            />
                                        </div>
                                        
                                        {/* Estimated Payment */}
                                        <div className="bg-background rounded-lg p-6 mt-6">
                                            <p className="text-sm text-muted-foreground mb-2">UDC Estimated Finance</p>
                                            <div className="flex items-center justify-between">
                                                <p className="text-4xl font-black text-primary">
                                                    ${weeklyPayment.toFixed(2)}
                                                    <span className="text-lg align-super">PW</span>
                                                </p>
                                                <Button
                                                    size="lg"
                                                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8"
                                                >
                                                    GET A QUOTE
                                                </Button>
                                            </div>
                                        </div>
                                        
                                        {/* Fine Print */}
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            *UDC Finance Terms and Conditions insert here. This calculation is an estimate only and is based on a loan of ${amountFinanced.toLocaleString()} at {(interestRate * 100).toFixed(1)}% per annum over {termYears} years. The estimated weekly repayment is ${weeklyPayment.toFixed(2)}. Any fees and charges may apply. This is provided for illustration purposes only and is not a quote or offer. Additional fees and charges may apply.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                    
                    {/* Vehicle Information */}
                    <div className="mt-12 max-w-4xl">
                        <h2 className="text-3xl font-black text-primary mb-6">Vehicle Information</h2>
                        <div className="bg-card border border-border rounded-xl p-6 mb-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {Object.entries(vehicleInfo).map(([key, value]) => (
                                    <div key={key} className="flex flex-col">
                                        <span className="text-sm text-muted-foreground capitalize mb-1">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </span>
                                        <span className="text-base font-semibold text-foreground">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Car Features */}
                    <div className="mt-12 max-w-4xl">
                        <h2 className="text-3xl font-black text-primary mb-6">Car Features</h2>
                        
                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="security" className="bg-card border border-border rounded-xl px-6">
                                <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline">
                                    <div className="flex items-center">
                                        <Lock className="w-5 h-5 mr-3" />
                                        Security
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground pt-4 pb-6">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Alarm System with Remote Central Locking</li>
                                        <li>Immobiliser</li>
                                        <li>Electronic Stability Control (ESC)</li>
                                        <li>Traction Control</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="exterior" className="bg-card border border-border rounded-xl px-6">
                                <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline">
                                    <div className="flex items-center">
                                        <Car className="w-5 h-5 mr-3" />
                                        Exterior Features
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground pt-4 pb-6">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>18-inch Alloy Wheels</li>
                                        <li>LED Headlights</li>
                                        <li>LED Daytime Running Lights</li>
                                        <li>Privacy Glass</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="interior" className="bg-card border border-border rounded-xl px-6">
                                <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline">
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-3" />
                                        Interior Features
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground pt-4 pb-6">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Dual-Zone Climate Control</li>
                                        <li>Heated Front Seats</li>
                                        <li>ISOFIX Child Seat Anchors</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="convenience" className="bg-card border border-border rounded-xl px-6">
                                <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline">
                                    <div className="flex items-center">
                                        <Settings className="w-5 h-5 mr-3" />
                                        Driver Convenience
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground pt-4 pb-6">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Adaptive Cruise Control</li>
                                        <li>Parking Sensors (Front & Rear)</li>
                                        <li>Reversing Camera</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="safety" className="bg-card border border-border rounded-xl px-6">
                                <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline">
                                    <div className="flex items-center">
                                        <Shield className="w-5 h-5 mr-3" />
                                        Passive Safety
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground pt-4 pb-6">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>6 Airbags</li>
                                        <li>Lane Departure Warning</li>
                                        <li>Blind Spot Monitoring</li>
                                        <li>Automatic Emergency Braking</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="entertainment" className="bg-card border border-border rounded-xl px-6">
                                <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline">
                                    <div className="flex items-center">
                                        <Radio className="w-5 h-5 mr-3" />
                                        Entertainment
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground pt-4 pb-6">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>10-inch Touchscreen</li>
                                        <li>Wireless Apple CarPlay and Android Auto</li>
                                        <li>Satellite Navigation</li>
                                        <li>Bluetooth Connectivity</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    
                    {/* Offer Inclusions */}
                    <div className="mt-12 max-w-4xl">
                        <h2 className="text-3xl font-black text-primary mb-6">Offer Inclusions</h2>
                        <div className="bg-card border border-border rounded-xl p-6">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-accent mr-2">✓</span>
                                    <span className="text-foreground">Free delivery within 50km</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent mr-2">✓</span>
                                    <span className="text-foreground">12 months comprehensive warranty</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent mr-2">✓</span>
                                    <span className="text-foreground">3 months free roadside assistance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent mr-2">✓</span>
                                    <span className="text-foreground">Full tank of fuel on delivery</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default CarOfferDetailPage;
