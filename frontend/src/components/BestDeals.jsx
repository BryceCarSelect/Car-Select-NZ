import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const BestDeals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const deals = [
        {
            brand: 'FORD',
            model: 'RANGER',
            badge: 'NEW FORD',
            savings: 'AV. SAVING OF $4,293',
            image: 'https://images.unsplash.com/photo-1653102284085-aa5420886ea6?w=800&q=80',
            color: 'from-blue-600 to-blue-700',
        },
        {
            brand: 'KIA',
            model: 'SORENTO',
            badge: 'NEW KIA',
            savings: 'AV. SAVING OF $5,208',
            image: 'https://images.unsplash.com/photo-1694649686884-0d62d0dc47d1?w=800&q=80',
            color: 'from-slate-600 to-slate-700',
        },
        {
            brand: 'BMW',
            model: '5-SERIES',
            badge: 'NEW BMW',
            savings: 'AV. SAVING OF $3,499',
            image: 'https://images.unsplash.com/photo-1716066242980-c864821b1b67?w=800&q=80',
            color: 'from-gray-700 to-gray-800',
        },
    ];
    
    const visibleDeals = 3;
    const maxIndex = Math.max(0, deals.length - visibleDeals);
    
    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };
    
    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };
    
    return (
        <section className="py-16 lg:py-24 bg-secondary/20">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-5xl font-black text-primary mb-4">
                        SEE SOME OF THE BEST DEALS WE'VE SEEN
                    </h2>
                </motion.div>
                
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {deals.map((deal, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <Card className="overflow-hidden bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-secondary to-muted">
                                        <img
                                            src={deal.image}
                                            alt={`${deal.brand} ${deal.model}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-black text-accent mb-2 tracking-wide">
                                            {deal.badge}
                                        </h3>
                                        <h4 className="text-2xl font-black text-primary mb-3">
                                            {deal.model}
                                        </h4>
                                        <Badge className="bg-primary text-primary-foreground font-bold px-3 py-1 mb-4">
                                            {deal.savings}
                                        </Badge>
                                        <Button
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-xl group/btn"
                                        >
                                            EXPLORE THE {deal.brand} {deal.model}
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Navigation Arrow - Positioned on the right */}
                    <motion.button
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 bg-background border-2 border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all shadow-lg disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-background disabled:hover:text-foreground"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </motion.button>
                </div>
                
                <div className="text-center mt-8">
                    <Link to="/deals">
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-6 text-base font-bold rounded-xl transition-all"
                        >
                            View All Deals
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
