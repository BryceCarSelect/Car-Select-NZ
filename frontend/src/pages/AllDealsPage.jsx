import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowRight, Search, BarChart3, DollarSign } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const AllDealsPage = () => {
    const deals = [
        {
            brand: 'FORD',
            model: 'RANGER',
            badge: 'NEW FORD RANGER',
            savings: 'AVERAGE SAVING OF $4,293',
            description: 'Tough, smart, versatile. Perfect for work, family and play',
            image: 'https://images.unsplash.com/photo-1653102284085-aa5420886ea6?w=800&q=80',
            buttonText: 'EXPLORE THE FORD RANGER',
        },
        {
            brand: 'KIA',
            model: 'SORENTO',
            badge: 'NEW KIA SORENTO',
            savings: 'AVERAGE SAVING OF $5,208',
            description: 'The new Sorento features the latest connectivity and infotainment technology...',
            image: 'https://images.unsplash.com/photo-1694649686884-0d62d0dc47d1?w=800&q=80',
            buttonText: 'EXPLORE THE KIA SORENTO',
        },
        {
            brand: 'BMW',
            model: '5-SERIES',
            badge: 'NEW BMW 5-SERIES',
            savings: 'AVERAGE SAVING OF $3,499',
            description: 'The BMW 5 Series Sedan brings sportiness and self-assuredness to the next level...',
            image: 'https://images.unsplash.com/photo-1716066242980-c864821b1b67?w=800&q=80',
            buttonText: 'EXPLORE THE BMW 5-SERIES',
        },
    ];
    
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            
            {/* Hero Section with Car Image */}
            <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-primary leading-tight mb-8">
                                SECURE THE BEST DEALS<br />
                                FROM OUR TRUSTED DEALERS
                            </h1>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/new" className="w-full sm:w-auto">
                                    <Button
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group w-full"
                                    >
                                        SELECT A CAR
                                        <Search className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                    </Button>
                                </Link>
                                
                                <Link to="/new" className="w-full sm:w-auto">
                                    <Button
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group w-full"
                                    >
                                        COMPARE ALL YOUR OPTIONS
                                        <BarChart3 className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                        
                        {/* Right Car Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative hidden lg:block"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1000&q=80"
                                alt="Luxury Car"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* Selling Estimator Section */}
            <section className="py-6 bg-background border-y border-border">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <h2 className="text-xl lg:text-2xl font-bold text-primary">
                            What's your current car worth? Use our online estimator
                        </h2>
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-sm font-bold rounded-xl whitespace-nowrap"
                        >
                            <DollarSign className="mr-2 h-5 w-5" />
                            SELLING ESTIMATOR
                        </Button>
                    </div>
                </div>
            </section>
            
            {/* Best Deals Section */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl lg:text-5xl font-black text-primary mb-12"
                    >
                        SEE SOME OF THE BEST DEALS WE'VE SEEN
                    </motion.h2>
                    
                    <div className="space-y-0">
                        {deals.map((deal, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`${index % 2 === 0 ? 'bg-muted/30' : 'bg-background'} py-12`}
                            >
                                <div className="container mx-auto px-4 lg:px-8">
                                    <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                                        index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                                    }`}>
                                        {/* Car Image */}
                                        <div className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                                className="relative rounded-2xl overflow-hidden shadow-xl"
                                            >
                                                <img
                                                    src={deal.image}
                                                    alt={`${deal.brand} ${deal.model}`}
                                                    className="w-full h-auto"
                                                />
                                            </motion.div>
                                        </div>
                                        
                                        {/* Deal Content */}
                                        <div className={`${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                                            <h3 className="text-3xl lg:text-4xl font-black text-primary mb-2">
                                                {deal.badge}
                                            </h3>
                                            <p className="text-xl lg:text-2xl font-bold text-accent mb-4">
                                                {deal.savings}
                                            </p>
                                            <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                                                {deal.description}
                                            </p>
                                            <Button
                                                size="lg"
                                                className="bg-muted hover:bg-muted/80 text-foreground border-2 border-transparent hover:border-primary px-8 py-6 text-sm font-bold rounded-xl transition-all group"
                                            >
                                                {deal.buttonText}
                                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default AllDealsPage;