import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Search } from 'lucide-react';

export const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };
    
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto text-center"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl lg:text-7xl font-black text-primary leading-tight mb-6"
                    >
                        THE EASIEST WAY TO<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">BUY OR SELL</span> YOUR CAR
                    </motion.h1>
                    
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
                    >
                        New Zealand's most trusted automotive marketplace. Compare prices, read reviews, and find your perfect car today.
                    </motion.p>
                    
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                    >
                        <Link to="/new" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group w-full"
                            >
                                BUY
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        
                        <Link to="/sell" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group w-full"
                            >
                                SELL
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        
                        <Link to="/new" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group w-full"
                            >
                                SELECT A CAR
                                <Search className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            
            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% center; }
                    50% { background-position: 100% center; }
                    100% { background-position: 0% center; }
                }
            `}</style>
        </section>
    );
};
