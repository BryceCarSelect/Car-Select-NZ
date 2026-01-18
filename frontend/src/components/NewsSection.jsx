import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Clock } from 'lucide-react';

export const NewsSection = () => {
    const newsItems = [
        {
            title: 'New EV Charging Network Expansion Across NZ',
            category: 'Infrastructure',
            image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&q=80',
            date: '2 days ago',
        },
        {
            title: 'Toyota Announces New Hybrid Models for 2024',
            category: 'New Models',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
            date: '5 days ago',
        },
        {
            title: 'Government Updates Clean Car Discount Scheme',
            category: 'Policy',
            image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
            date: '1 week ago',
        },
    ];
    
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
                        LATEST IN NEW ZEALAND CAR NEWS
                    </h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsItems.map((news, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <Card className="overflow-hidden bg-card border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-bold">
                                        {news.category}
                                    </Badge>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                                        {news.title}
                                    </h3>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {news.date}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
