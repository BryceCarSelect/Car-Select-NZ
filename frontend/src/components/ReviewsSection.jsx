import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Play, BookOpen } from 'lucide-react';

export const ReviewsSection = () => {
    const reviews = [
        {
            brand: 'FORD',
            model: 'Ranger Hybrid',
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
        },
        {
            brand: 'TOYOTA',
            model: 'Rav4',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
        },
        {
            brand: 'BYD',
            model: 'Shark 6 Hybrid',
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
        },
    ];
    
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-5xl font-black text-primary mb-4">
                        OUR REVIEWS: WHAT REALLY MATTERS
                    </h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <Card className="overflow-hidden bg-muted border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={review.image}
                                        alt={`${review.brand} ${review.model}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-black text-primary mb-4">
                                        {review.brand} <span className="font-normal">{review.model}</span>
                                    </h3>
                                    <div className="flex gap-3">
                                        <Button
                                            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 rounded-xl"
                                        >
                                            <BookOpen className="mr-2 h-4 w-4" />
                                            READ REVIEW
                                        </Button>
                                        <Button
                                            className="flex-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold py-5 rounded-xl"
                                        >
                                            <Play className="mr-2 h-4 w-4 fill-current" />
                                            VIDEO REVIEW
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-bold rounded-xl"
                    >
                        Latest Reviews
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-border text-foreground hover:bg-muted px-10 py-6 text-base font-bold rounded-xl"
                    >
                        Search Reviews
                    </Button>
                </div>
            </div>
        </section>
    );
};
