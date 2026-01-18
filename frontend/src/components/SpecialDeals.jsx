import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Zap, Leaf, TrendingDown, BarChart3 } from 'lucide-react';

export const SpecialDeals = () => {
    const deals = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'NEW CAR',
            subtitle: 'SPECIAL DEALS',
            description: 'Get the latest models at unbeatable prices',
            image: 'https://images.unsplash.com/photo-1672737936853-e47e1641ac40?w=600&q=80',
            color: 'from-blue-500/10 to-cyan-500/10',
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: 'EV/HYBRID',
            subtitle: 'CAR SPECIALS',
            description: 'Drive green with exclusive electric deals',
            image: 'https://images.unsplash.com/photo-1707758283398-7df21adba23a?w=600&q=80',
            color: 'from-green-500/10 to-emerald-500/10',
        },
        {
            icon: <TrendingDown className="w-8 h-8" />,
            title: 'LEASING',
            subtitle: 'SPECIAL DEALS',
            description: 'Flexible leasing options for every budget',
            image: 'https://images.unsplash.com/photo-1722591602044-17962109fa91?w=600&q=80',
            color: 'from-purple-500/10 to-pink-500/10',
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: 'COMPARE',
            subtitle: 'OPTIONS',
            description: 'Side-by-side comparisons made easy',
            image: 'https://images.unsplash.com/photo-1731142582229-e0ee70302c02?w=600&q=80',
            color: 'from-orange-500/10 to-red-500/10',
        },
    ];
    
    return (
        <section className="py-16 lg:py-24 bg-secondary/30">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {deals.map((deal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <Card className="overflow-hidden bg-card border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${deal.color} opacity-50 group-hover:opacity-70 transition-opacity z-10`}></div>
                                    <img
                                        src={deal.image}
                                        alt={deal.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 text-primary z-20">
                                        {deal.icon}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-sm font-black text-primary mb-1 tracking-wide">
                                        {deal.title}
                                    </h3>
                                    <h4 className="text-xs font-bold text-accent mb-3 tracking-wider">
                                        {deal.subtitle}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        {deal.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
