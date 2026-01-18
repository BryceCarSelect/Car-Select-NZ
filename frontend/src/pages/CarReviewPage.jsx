import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
    ChevronLeft, 
    ChevronRight, 
    Play, 
    Star, 
    Shield, 
    Car, 
    Gauge, 
    Zap,
    Settings,
    Radio,
    Lock,
    Users,
    Wind,
    Smartphone,
    Navigation as NavigationIcon
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion';

export const CarReviewPage = () => {
    const navigate = useNavigate();
    const { carId } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
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
        powertrain: 'Plug-in Hybrid',
        engineSize: '1.6L Turbo',
        safetyRating: '5 Stars',
        doors: '5',
        seats: '5',
        transmission: 'Automatic',
        colour: 'Metallic Grey',
    };
    
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
                        onClick={() => navigate('/comparison')}
                        className="mb-6"
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to Comparison
                    </Button>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                            <div className="relative rounded-2xl overflow-hidden bg-muted mb-4 group">
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
                            
                            <Button
                                size="lg"
                                onClick={() => navigate('/comparison')}
                                className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6"
                            >
                                GET THE BEST DEALS
                            </Button>
                        </div>
                        
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-black text-primary mb-2">
                                PEUGEOT 3008
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-bold text-accent mb-6">
                                ALLURE HYBRID
                            </h2>
                            
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                                    ))}
                                </div>
                                <span className="text-sm font-semibold text-muted-foreground">
                                    (4.8/5 from 127 reviews)
                                </span>
                            </div>
                            
                            <div className="bg-card border border-border rounded-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-primary mb-4">Vehicle Information</h3>
                                <div className="grid grid-cols-2 gap-4">
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
                            
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                <Badge variant="outline" className="px-3 py-2 justify-center">
                                    <NavigationIcon className="w-4 h-4 mr-2" />
                                    Sat Nav
                                </Badge>
                                <Badge variant="outline" className="px-3 py-2 justify-center">
                                    <Users className="w-4 h-4 mr-2" />
                                    ISOFIX
                                </Badge>
                                <Badge variant="outline" className="px-3 py-2 justify-center">
                                    <Smartphone className="w-4 h-4 mr-2" />
                                    CarPlay
                                </Badge>
                                <Badge variant="outline" className="px-3 py-2 justify-center">
                                    <Radio className="w-4 h-4 mr-2" />
                                    Bluetooth
                                </Badge>
                                <Badge variant="outline" className="px-3 py-2 justify-center">
                                    <Gauge className="w-4 h-4 mr-2" />
                                    Cruise
                                </Badge>
                                <Badge variant="outline" className="px-3 py-2 justify-center">
                                    <Shield className="w-4 h-4 mr-2" />
                                    Safety+
                                </Badge>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12 max-w-4xl">
                        <h2 className="text-3xl font-black text-primary mb-6">Our Review</h2>
                        
                        <div className="space-y-6 text-foreground">
                            <p className="text-lg leading-relaxed">
                                The <strong>Peugeot 3008 Allure Hybrid</strong> represents a compelling entry into the competitive mid-size SUV segment, combining French sophistication with modern electrification. This plug-in hybrid variant offers an impressive blend of efficiency, technology, and style that sets it apart from more conventional alternatives.
                            </p>
                            
                            <div>
                                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Design and Exterior</h3>
                                <p className="leading-relaxed">
                                    The exterior showcases Peugeot's contemporary design language with bold character lines, a distinctive front grille, and sleek aerodynamic profile. The Allure trim adds 18-inch alloy wheels, chrome detailing, and LED headlights that give the SUV a premium appearance.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Interior and Comfort</h3>
                                <p className="leading-relaxed">
                                    Step inside and you're greeted by Peugeot's acclaimed i-Cockpit layout, featuring a compact steering wheel positioned below the digital instrument cluster. The cabin materials are high-quality with soft-touch surfaces and comfortable supportive seats. The five-seat configuration offers generous space with excellent legroom and headroom in both rows.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Performance and Efficiency</h3>
                                <p className="leading-relaxed">
                                    The plug-in hybrid powertrain combines a 1.6-litre turbocharged petrol engine with an electric motor, delivering brisk acceleration and smooth power delivery. The electric-only range is sufficient for most daily commutes. Fuel economy is impressive when driven with regular charging.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Technology</h3>
                                <p className="leading-relaxed">
                                    Well-equipped with a 10-inch touchscreen infotainment system featuring wireless Apple CarPlay and Android Auto, satellite navigation, and premium sound system. Digital driver aids include adaptive cruise control, lane-keeping assist, and automatic emergency braking.
                                </p>
                            </div>
                            
                            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mt-8">
                                <p className="font-semibold text-lg">
                                    <strong>Rating: 4.5/5</strong> - A refined, efficient, and feature-rich hybrid SUV that successfully balances eco-credentials with everyday usability.
                                </p>
                            </div>
                        </div>
                    </div>
                    
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
                                        <li>Deadlocks</li>
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
                                        <li>Chrome Door Handles</li>
                                        <li>Roof Rails</li>
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
                                        <li>Leather Steering Wheel</li>
                                        <li>Electric Windows</li>
                                        <li>Ambient Lighting</li>
                                        <li>ISOFIX Child Seat Anchors</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="safety" className="bg-card border border-border rounded-xl px-6">
                                <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline">
                                    <div className="flex items-center">
                                        <Shield className="w-5 h-5 mr-3" />
                                        Safety
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground pt-4 pb-6">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>6 Airbags</li>
                                        <li>Lane Departure Warning</li>
                                        <li>Blind Spot Monitoring</li>
                                        <li>Automatic Emergency Braking</li>
                                        <li>Driver Attention Alert</li>
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
                                        <li>Digital Radio (DAB+)</li>
                                        <li>Bluetooth Connectivity</li>
                                        <li>USB Ports</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default CarReviewPage;
