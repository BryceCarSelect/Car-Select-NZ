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
    
    // Car images
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
        <div className=\"min-h-screen bg-background\">
            <Navigation />
            
            <section className=\"pt-32 pb-20 lg:pt-40 lg:pb-28\">
                <div className=\"container mx-auto px-4 lg:px-8\">
                    {/* Back Button */}
                    <Button
                        variant=\"outline\"
                        onClick={() => navigate('/comparison')}
                        className=\"mb-6\"
                    >
                        <ChevronLeft className=\"mr-2 h-4 w-4\" />
                        Back to Comparison
                    </Button>
                    
                    <div className=\"grid lg:grid-cols-2 gap-8\">
                        {/* Left Column - Image Gallery */}
                        <div>
                            {/* Main Image */}
                            <div className=\"relative rounded-2xl overflow-hidden bg-muted mb-4 group\">
                                <img
                                    src={carImages[currentImageIndex]}
                                    alt=\"Peugeot 3008\"
                                    className=\"w-full h-auto\"
                                />
                                
                                {/* Navigation Arrows */}
                                <button
                                    onClick={handlePrevImage}
                                    className=\"absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors\"
                                >
                                    <ChevronLeft className=\"h-6 w-6 text-primary\" />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className=\"absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors\"
                                >
                                    <ChevronRight className=\"h-6 w-6 text-primary\" />
                                </button>
                                
                                {/* Image Counter */}
                                <div className=\"absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold\">
                                    {currentImageIndex + 1}/{carImages.length}
                                </div>
                            </div>
                            
                            {/* Video Review Button */}
                            <Button
                                size=\"lg\"
                                className=\"w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold py-6\"
                            >
                                <Play className=\"mr-2 h-5 w-5 fill-current\" />
                                VIDEO REVIEW
                            </Button>
                        </div>
                        
                        {/* Right Column - Vehicle Info */}
                        <div>
                            <h1 className=\"text-3xl lg:text-4xl font-black text-primary mb-2\">
                                PEUGEOT 3008
                            </h1>
                            <h2 className=\"text-2xl lg:text-3xl font-bold text-accent mb-6\">
                                ALLURE HYBRID
                            </h2>
                            
                            {/* Rating */}
                            <div className=\"flex items-center gap-2 mb-6\">
                                <div className=\"flex\">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className=\"w-5 h-5 fill-accent text-accent\" />
                                    ))}
                                </div>
                                <span className=\"text-sm font-semibold text-muted-foreground\">
                                    (4.8/5 from 127 reviews)
                                </span>
                            </div>
                            
                            {/* Vehicle Information Table */}
                            <div className=\"bg-card border border-border rounded-xl p-6 mb-6\">
                                <h3 className=\"text-xl font-bold text-primary mb-4\">Vehicle Information</h3>
                                <div className=\"grid grid-cols-2 gap-4\">
                                    {Object.entries(vehicleInfo).map(([key, value]) => (
                                        <div key={key} className=\"flex flex-col\">
                                            <span className=\"text-sm text-muted-foreground capitalize mb-1\">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </span>
                                            <span className=\"text-base font-semibold text-foreground\">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Quick Features */}
                            <div className=\"grid grid-cols-3 gap-3 mb-6\">
                                <Badge variant=\"outline\" className=\"px-3 py-2 justify-center\">
                                    <NavigationIcon className=\"w-4 h-4 mr-2\" />
                                    Sat Nav
                                </Badge>
                                <Badge variant=\"outline\" className=\"px-3 py-2 justify-center\">
                                    <Users className=\"w-4 h-4 mr-2\" />
                                    ISOFIX
                                </Badge>
                                <Badge variant=\"outline\" className=\"px-3 py-2 justify-center\">
                                    <Smartphone className=\"w-4 h-4 mr-2\" />
                                    CarPlay
                                </Badge>
                                <Badge variant=\"outline\" className=\"px-3 py-2 justify-center\">
                                    <Radio className=\"w-4 h-4 mr-2\" />
                                    Bluetooth
                                </Badge>
                                <Badge variant=\"outline\" className=\"px-3 py-2 justify-center\">
                                    <Gauge className=\"w-4 h-4 mr-2\" />
                                    Cruise
                                </Badge>
                                <Badge variant=\"outline\" className=\"px-3 py-2 justify-center\">
                                    <Shield className=\"w-4 h-4 mr-2\" />
                                    Safety+
                                </Badge>
                            </div>
                        </div>
                    </div>
                    
                    {/* Review Content */}
                    <div className=\"mt-12 max-w-4xl\">
                        <h2 className=\"text-3xl font-black text-primary mb-6\">Our Review</h2>
                        
                        <div className=\"prose prose-lg max-w-none mb-8\">
                            <p className=\"text-foreground leading-relaxed mb-4\">
                                The <strong>Peugeot 3008 Allure Hybrid</strong> represents a compelling entry into the competitive mid-size SUV segment, combining French sophistication with modern electrification. This plug-in hybrid variant offers an impressive blend of efficiency, technology, and style that sets it apart from more conventional alternatives.
                            </p>
                            
                            <h3 className=\"text-2xl font-bold text-primary mt-8 mb-4\">Design & Exterior</h3>
                            <p className=\"text-foreground leading-relaxed mb-4\">
                                The 3008's exterior showcases Peugeot's contemporary design language with bold character lines, a distinctive front grille featuring the brand's signature 'lion claw' LED daytime running lights, and a sleek, aerodynamic profile. The Allure trim adds 18-inch alloy wheels, chrome detailing, and LED headlights that give the SUV a premium appearance. The metallic grey finish enhances its modern, sophisticated look while maintaining excellent road presence.
                            </p>
                            
                            <h3 className=\"text-2xl font-bold text-primary mt-8 mb-4\">Interior & Comfort</h3>
                            <p className=\"text-foreground leading-relaxed mb-4\">
                                Step inside, and you're greeted by Peugeot's acclaimed i-Cockpit layout, featuring a compact steering wheel positioned below the digital instrument cluster for an engaging, driver-focused experience. The cabin materials are high-quality, with soft-touch surfaces, ambient lighting, and comfortable supportive seats upholstered in premium fabric. The five-seat configuration offers generous space for passengers, with excellent legroom and headroom in both rows.
                            </p>
                            <p className=\"text-foreground leading-relaxed mb-4\">
                                Storage is practical with numerous cubby holes, door pockets, and a centre console perfectly sized for everyday items. The boot space is competitive for the class, though the hybrid battery does reduce capacity slightly compared to the petrol-only variants.
                            </p>
                            
                            <h3 className=\"text-2xl font-bold text-primary mt-8 mb-4\">Performance & Efficiency</h3>
                            <p className=\"text-foreground leading-relaxed mb-4\">
                                The plug-in hybrid powertrain combines a 1.6-litre turbocharged petrol engine with an electric motor, delivering a combined output that provides brisk acceleration and smooth, refined power delivery. The electric-only range is sufficient for most daily commutes, allowing zero-emission driving when charged regularly. The transition between electric and petrol power is seamless, and the eight-speed automatic transmission shifts smoothly and intelligently.
                            </p>
                            <p className=\"text-foreground leading-relaxed mb-4\">
                                Fuel economy is impressive when driven with regular charging, making it an excellent choice for those looking to reduce running costs without sacrificing practicality. The regenerative braking system works effectively to recoup energy, extending the electric range.
                            </p>
                            
                            <h3 className=\"text-2xl font-bold text-primary mt-8 mb-4\">Technology & Features</h3>
                            <p className=\"text-foreground leading-relaxed mb-4\">
                                The 3008 Allure Hybrid is well-equipped with modern technology. The 10-inch touchscreen infotainment system is responsive and intuitive, featuring wireless Apple CarPlay and Android Auto integration, satellite navigation, and a premium sound system. Digital driver aids include adaptive cruise control, lane-keeping assist, blind-spot monitoring, and automatic emergency braking, enhancing both safety and convenience.
                            </p>
                            <p className=\"text-foreground leading-relaxed mb-4\">
                                Climate control maintains a comfortable cabin temperature, while heated front seats add an extra layer of comfort during colder months. Parking sensors and a reversing camera make manoeuvring in tight spaces stress-free.
                            </p>
                            
                            <h3 className=\"text-2xl font-bold text-primary mt-8 mb-4\">Driving Experience</h3>
                            <p className=\"text-foreground leading-relaxed mb-4\">
                                On the road, the 3008 Hybrid delivers a composed and comfortable ride. The suspension absorbs bumps effectively while maintaining good body control through corners. The electric power steering is light at low speeds for easy parking but weights up nicely at highway speeds. Road and wind noise are well-suppressed, contributing to a refined and relaxed driving experience.
                            </p>
                            
                            <h3 className=\"text-2xl font-bold text-primary mt-8 mb-4\">Safety</h3>
                            <p className=\"text-foreground leading-relaxed mb-4\">
                                Achieving a five-star ANCAP safety rating, the 3008 is packed with advanced safety features. Multiple airbags, stability control, traction control, and a suite of active safety technologies work together to protect occupants. ISOFIX child seat anchor points in the rear seats make it family-friendly and practical for parents.
                            </p>
                            
                            <h3 className=\"text-2xl font-bold text-primary mt-8 mb-4\">Verdict</h3>
                            <p className=\"text-foreground leading-relaxed mb-4\">
                                The <strong>Peugeot 3008 Allure Hybrid</strong> is an excellent choice for buyers seeking a stylish, efficient, and well-equipped mid-size SUV. Its plug-in hybrid powertrain delivers impressive fuel economy and low running costs, while the comfortable interior, advanced technology, and comprehensive safety features make it a strong all-rounder. While the boot space takes a minor hit due to the battery, the overall package is compelling for families and professionals alike who want to reduce their environmental impact without compromising on practicality or driving pleasure.
                            </p>
                            
                            <div className=\"bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mt-6\">
                                <p className=\"text-foreground font-semibold\">
                                    <strong>Rating: 4.5/5</strong> - A refined, efficient, and feature-rich hybrid SUV that successfully balances eco-credentials with everyday usability.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Car Features Accordion */}
                    <div className=\"mt-12 max-w-4xl\">
                        <h2 className=\"text-3xl font-black text-primary mb-6\">Car Features</h2>
                        
                        <Accordion type=\"single\" collapsible className=\"space-y-4\">
                            <AccordionItem value=\"security\" className=\"bg-card border border-border rounded-xl px-6\">
                                <AccordionTrigger className=\"text-lg font-bold text-primary hover:no-underline\">
                                    <div className=\"flex items-center\">
                                        <Lock className=\"w-5 h-5 mr-3\" />
                                        Security
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className=\"text-foreground pt-4 pb-6\">
                                    <ul className=\"list-disc list-inside space-y-2\">
                                        <li>Alarm System with Remote Central Locking</li>\n                                        <li>Immobiliser</li>\n                                        <li>Deadlocks</li>\n                                        <li>Electronic Stability Control (ESC)</li>\n                                        <li>Traction Control</li>\n                                    </ul>\n                                </AccordionContent>\n                            </AccordionItem>\n                            \n                            <AccordionItem value=\"exterior\" className=\"bg-card border border-border rounded-xl px-6\">\n                                <AccordionTrigger className=\"text-lg font-bold text-primary hover:no-underline\">\n                                    <div className=\"flex items-center\">\n                                        <Car className=\"w-5 h-5 mr-3\" />\n                                        Exterior Features\n                                    </div>\n                                </AccordionTrigger>\n                                <AccordionContent className=\"text-foreground pt-4 pb-6\">\n                                    <ul className=\"list-disc list-inside space-y-2\">\n                                        <li>18-inch Alloy Wheels</li>\n                                        <li>LED Headlights with Automatic High Beam</li>\n                                        <li>LED Daytime Running Lights</li>\n                                        <li>Chrome Door Handles</li>\n                                        <li>Roof Rails</li>\n                                        <li>Privacy Glass</li>\n                                        <li>Power-Folding Mirrors with Heating</li>\n                                    </ul>\n                                </AccordionContent>\n                            </AccordionItem>\n                            \n                            <AccordionItem value=\"interior\" className=\"bg-card border border-border rounded-xl px-6\">\n                                <AccordionTrigger className=\"text-lg font-bold text-primary hover:no-underline\">\n                                    <div className=\"flex items-center\">\n                                        <Users className=\"w-5 h-5 mr-3\" />\n                                        Interior Features\n                                    </div>\n                                </AccordionTrigger>\n                                <AccordionContent className=\"text-foreground pt-4 pb-6\">\n                                    <ul className=\"list-disc list-inside space-y-2\">\n                                        <li>Dual-Zone Climate Control</li>\n                                        <li>Heated Front Seats</li>\n                                        <li>Leather Steering Wheel with Controls</li>\n                                        <li>Electric Windows (Front & Rear)</li>\n                                        <li>Ambient Interior Lighting</li>\n                                        <li>ISOFIX Child Seat Anchors</li>\n                                        <li>Rear Air Vents</li>\n                                    </ul>\n                                </AccordionContent>\n                            </AccordionItem>\n                            \n                            <AccordionItem value=\"convenience\" className=\"bg-card border border-border rounded-xl px-6\">\n                                <AccordionTrigger className=\"text-lg font-bold text-primary hover:no-underline\">\n                                    <div className=\"flex items-center\">\n                                        <Settings className=\"w-5 h-5 mr-3\" />\n                                        Driver Convenience\n                                    </div>\n                                </AccordionTrigger>\n                                <AccordionContent className=\"text-foreground pt-4 pb-6\">\n                                    <ul className=\"list-disc list-inside space-y-2\">\n                                        <li>Adaptive Cruise Control with Speed Limiter</li>\n                                        <li>Keyless Entry & Push Button Start</li>\n                                        <li>Parking Sensors (Front & Rear)</li>\n                                        <li>Reversing Camera with Guidelines</li>\n                                        <li>Rain-Sensing Wipers</li>\n                                        <li>Auto-Dimming Rear-View Mirror</li>\n                                        <li>Electric Parking Brake with Auto Hold</li>\n                                    </ul>\n                                </AccordionContent>\n                            </AccordionItem>\n                            \n                            <AccordionItem value=\"safety\" className=\"bg-card border border-border rounded-xl px-6\">\n                                <AccordionTrigger className=\"text-lg font-bold text-primary hover:no-underline\">\n                                    <div className=\"flex items-center\">\n                                        <Shield className=\"w-5 h-5 mr-3\" />\n                                        Passive Safety\n                                    </div>\n                                </AccordionTrigger>\n                                <AccordionContent className=\"text-foreground pt-4 pb-6\">\n                                    <ul className=\"list-disc list-inside space-y-2\">\n                                        <li>6 Airbags (Driver, Passenger, Side, Curtain)</li>\n                                        <li>Lane Departure Warning</li>\n                                        <li>Lane Keep Assist</li>\n                                        <li>Blind Spot Monitoring</li>\n                                        <li>Automatic Emergency Braking (AEB)</li>\n                                        <li>Driver Attention Alert</li>\n                                        <li>Hill Start Assist</li>\n                                    </ul>\n                                </AccordionContent>\n                            </AccordionItem>\n                            \n                            <AccordionItem value=\"entertainment\" className=\"bg-card border border-border rounded-xl px-6\">\n                                <AccordionTrigger className=\"text-lg font-bold text-primary hover:no-underline\">\n                                    <div className=\"flex items-center\">\n                                        <Radio className=\"w-5 h-5 mr-3\" />\n                                        Entertainment\n                                    </div>\n                                </AccordionTrigger>\n                                <AccordionContent className=\"text-foreground pt-4 pb-6\">\n                                    <ul className=\"list-disc list-inside space-y-2\">\n                                        <li>10-inch Touchscreen Infotainment System</li>\n                                        <li>Wireless Apple CarPlay & Android Auto</li>\n                                        <li>Satellite Navigation with Live Traffic</li>\n                                        <li>Digital Radio (DAB+)</li>\n                                        <li>Bluetooth Connectivity with Voice Recognition</li>\n                                        <li>USB Ports (Front & Rear)</li>\n                                        <li>6-Speaker Sound System</li>\n                                    </ul>\n                                </AccordionContent>\n                            </AccordionItem>\n                        </Accordion>\n                    </div>\n                </div>\n            </section>\n            \n            <Footer />\n        </div>\n    );\n};\n\nexport default CarReviewPage;
