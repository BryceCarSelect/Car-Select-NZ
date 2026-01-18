import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Zap, Battery } from 'lucide-react';

export const FeaturedPromotion = () => {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge className="mb-4 bg-accent text-accent-foreground font-bold px-4 py-2">
                            <Zap className="w-4 h-4 mr-2" />
                            LIMITED TIME OFFER
                        </Badge>
                        
                        <h2 className="text-4xl lg:text-6xl font-black mb-4 leading-tight">
                            POLESTAR 2
                        </h2>
                        
                        <h3 className="text-xl lg:text-2xl font-bold mb-6 text-primary-foreground/90">
                            Complimentary Plus pack and Dual motor upgrade worth up to £9,000*
                        </h3>
                        
                        <p className="text-base text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
                            Selected models of the 100% electric Polestar 2 are available to order with Plus pack and performance-optimised Dual motor powertrain upgrades at no extra cost.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2">
                                <Battery className="w-5 h-5 text-accent" />
                                <span className="text-sm font-semibold">100% Electric</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-accent" />
                                <span className="text-sm font-semibold">Dual Motor</span>
                            </div>
                        </div>
                        
                        <Button
                            size="lg"
                            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group"
                        >
                            Get offers
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        
                        <p className="text-xs text-primary-foreground/60 mt-6 leading-relaxed">
                            *Customer offer of up to £9,000.00 customer value is available for new orders placed 15.09.2024 until 30.09.2024 on specified Polestar models (see polestar.com for details). The summer offer is not available when financing through Polestar Lease. WLTP: 81-173 kWh/100 km and CO₂: 0 g/km.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <Badge className="absolute top-4 right-4 bg-foreground/90 text-background font-semibold px-3 py-1 z-20">
                            Advertisement
                        </Badge>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80"
                                alt="Polestar 2"
                                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
