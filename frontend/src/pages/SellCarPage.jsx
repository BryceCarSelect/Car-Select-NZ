import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { 
    ArrowRight, 
    Check, 
    Search,
    DollarSign,
    Clock,
    Shield,
    Star,
    Users,
    TrendingUp
} from 'lucide-react';

export const SellCarPage = () => {
    const navigate = useNavigate();
    const [carReg, setCarReg] = useState('');
    const [mileage, setMileage] = useState('');
    
    const handleGetValuation = () => {
        // Handle valuation logic
        console.log('Getting valuation for:', carReg, mileage);
    };
    
    const benefits = [
        {
            icon: <DollarSign className="w-10 h-10 text-accent" />,
            title: 'Best Market Price',
            description: 'Get competitive offers from verified dealers across New Zealand',
        },
        {
            icon: <Clock className="w-10 h-10 text-accent" />,
            title: 'Sold in Days, Not Weeks',
            description: 'Average time to sale is just 5 days with our dealer network',
        },
        {
            icon: <Shield className="w-10 h-10 text-accent" />,
            title: 'Safe & Secure',
            description: 'All dealers verified and vetted. Money-back guarantee on service',
        },
        {
            icon: <Star className="w-10 h-10 text-accent" />,
            title: 'No Hassle Process',
            description: 'We handle everything - from valuation to collection',
        },
    ];
    
    const howItWorks = [
        {
            step: '1',
            title: 'Get Your Free Valuation',
            description: 'Enter your registration and mileage to get an instant estimate of your car\'s value',
        },
        {
            step: '2',
            title: 'Dealers Make Offers',
            description: 'Our network of trusted dealers compete to buy your car, giving you the best price',
        },
        {
            step: '3',
            title: 'Choose Your Best Offer',
            description: 'Review offers, compare dealers, and select the one that works best for you',
        },
        {
            step: '4',
            title: 'We Collect Your Car',
            description: 'Schedule a convenient time and we\'ll handle all paperwork and collection',
        },
    ];
    
    const testimonials = [
        {
            name: 'Sarah Johnson',
            location: 'Auckland',
            rating: 5,
            comment: 'Sold my Toyota RAV4 in just 3 days! The process was incredibly smooth and I got $2,500 more than I expected.',
        },
        {
            name: 'Mike Thompson',
            location: 'Wellington',
            rating: 5,
            comment: 'Best way to sell a car! No private viewings, no time-wasters. Just genuine offers from real dealers.',
        },
        {
            name: 'Emma Clarke',
            location: 'Christchurch',
            rating: 5,
            comment: 'I was skeptical at first, but Car Select made selling my Ford Ranger effortless. Highly recommend!',
        },
    ];
    
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary via-primary/95 to-primary text-primary-foreground overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
                            SELL YOUR CAR THE EASY WAY
                        </h1>
                        <p className="text-xl lg:text-2xl mb-12 text-primary-foreground/90">
                            Get multiple dealer offers in minutes. No private viewings, no hassle.
                        </p>
                        
                        {/* Valuation Form */}
                        <Card className="bg-background/95 backdrop-blur-sm p-8 shadow-2xl max-w-2xl mx-auto">
                            <h2 className="text-2xl font-bold text-primary mb-6">Get Your FREE Valuation</h2>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <Label htmlFor="car-reg" className="text-foreground font-semibold mb-2 block">
                                        Car Registration
                                    </Label>
                                    <Input
                                        id="car-reg"
                                        type="text"
                                        placeholder="e.g., ABC123"
                                        value={carReg}
                                        onChange={(e) => setCarReg(e.target.value)}
                                        className="h-14 text-lg"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="mileage" className="text-foreground font-semibold mb-2 block">
                                        Mileage (km)
                                    </Label>
                                    <Input
                                        id="mileage"
                                        type="number"
                                        placeholder="e.g., 45000"
                                        value={mileage}
                                        onChange={(e) => setMileage(e.target.value)}
                                        className="h-14 text-lg"
                                    />
                                </div>
                            </div>
                            <Button
                                size="lg"
                                onClick={handleGetValuation}
                                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group"
                            >
                                Get My Valuation
                                <Search className="ml-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                            </Button>
                            <p className="text-sm text-muted-foreground mt-4">
                                ✓ Free valuation ✓ No obligations ✓ Takes 30 seconds
                            </p>
                        </Card>
                    </motion.div>
                </div>
            </section>
            
            {/* Benefits Section */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl lg:text-4xl font-black text-center text-primary mb-12"
                    >
                        Why Sell With Car Select?
                    </motion.h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-6 text-center h-full border-0 shadow-md hover:shadow-xl transition-all">
                                    <div className="flex justify-center mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {benefit.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* How It Works Section */}
            <section className="py-16 lg:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl lg:text-4xl font-black text-center text-primary mb-12"
                    >
                        How It Works
                    </motion.h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {howItWorks.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-2xl font-black mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                                {index < howItWorks.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent/30 -translate-x-1/2 z-0"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group"
                        >
                            Start Selling Now
                            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>
            
            {/* Stats Section */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-5xl font-black text-accent mb-2">15,000+</div>
                            <div className="text-lg font-semibold text-primary">Cars Sold</div>
                            <div className="text-sm text-muted-foreground">Through our platform</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="text-5xl font-black text-accent mb-2">5 Days</div>
                            <div className="text-lg font-semibold text-primary">Average Sale Time</div>
                            <div className="text-sm text-muted-foreground">From listing to sold</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="text-5xl font-black text-accent mb-2">4.9★</div>
                            <div className="text-lg font-semibold text-primary">Customer Rating</div>
                            <div className="text-sm text-muted-foreground">From 3,200+ reviews</div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="py-16 lg:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl lg:text-4xl font-black text-center text-primary mb-12"
                    >
                        What Our Customers Say
                    </motion.h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-6 h-full border-0 shadow-md hover:shadow-xl transition-all">
                                    <div className="flex mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-foreground mb-4 leading-relaxed">
                                        "{testimonial.comment}"
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold mr-3">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-primary">{testimonial.name}</div>
                                            <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl lg:text-5xl font-black mb-6">
                            Ready to Sell Your Car?
                        </h2>
                        <p className="text-xl mb-8 text-primary-foreground/90">
                            Get your free valuation in 30 seconds. No obligations, no hassle.
                        </p>
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group"
                        >
                            Get Your Free Valuation
                            <TrendingUp className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default SellCarPage;
