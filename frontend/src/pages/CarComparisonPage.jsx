import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, ChevronLeft, ChevronRight, DollarSign, ExternalLink } from 'lucide-react';

export const CarComparisonPage = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;
    
    // Mock user selections - in real app, this would come from state/context
    const userSelections = {
        bodyStyle: 'Mid-Sized SUV',
        powertrain: 'Petrol or Hybrid',
        seats: '5-7 Seats',
        priceRange: 'Between $40,000-$55,000',
    };
    
    const cars = [
        {
            id: 1,
            brand: 'NISSAN',
            model: 'X-Trail',
            subtitle: 'Spacious & Practical Family SUV',
            price: '$42,990',
            savings: '$2,800',
            image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
            reviewLink: '/review/nissan-xtrail',
        },
        {
            id: 2,
            brand: 'MAZDA',
            model: 'CX-5',
            subtitle: 'Premium Compact SUV Experience',
            price: '$45,490',
            savings: '$3,200',
            image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80',
            reviewLink: '/review/mazda-cx5',
        },
        {
            id: 3,
            brand: 'MG',
            model: 'HS Hybrid',
            subtitle: 'Efficient & Affordable Hybrid SUV',
            price: '$38,990',
            savings: '$1,500',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
            reviewLink: '/review/mg-hs',
        },
        {
            id: 4,
            brand: 'KGM',
            model: 'Torres',
            subtitle: 'Bold Design & Modern Features',
            price: '$43,990',
            savings: '$2,200',
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            reviewLink: '/review/kgm-torres',
        },
        {
            id: 5,
            brand: 'TOYOTA',
            model: 'RAV4 Hybrid',
            subtitle: 'Best-Selling Hybrid SUV',
            price: '$49,990',
            savings: '$4,100',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
            reviewLink: '/review/toyota-rav4',
        },
        {
            id: 6,
            brand: 'VW',
            model: 'Tiguan',
            subtitle: 'German Engineering Excellence',
            price: '$48,990',
            savings: '$3,500',
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
            reviewLink: '/review/vw-tiguan',
        },
    ];
    
    const handleStartAgain = () => {
        navigate('/new');
    };
    
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Header with Start Again Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
                    >
                        <h1 className="text-3xl lg:text-5xl font-black text-primary">
                            CAR COMPARISON
                        </h1>
                        <Button
                            onClick={handleStartAgain}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-sm font-bold rounded-lg"
                        >
                            START AGAIN
                        </Button>
                    </motion.div>
                    
                    {/* Selling Estimator Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-muted/50 p-6 rounded-xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4"
                    >
                        <h2 className="text-lg lg:text-xl font-bold text-primary">
                            What's your current car worth? Use our online estimator
                        </h2>
                        <Button
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-sm font-bold rounded-lg whitespace-nowrap"
                        >
                            <DollarSign className="mr-2 h-4 w-4" />
                            SELLING ESTIMATOR
                        </Button>
                    </motion.div>
                    
                    {/* You've Selected Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl lg:text-3xl font-black text-primary mb-4">
                            YOU'VE SELECTED
                        </h2>
                        <p className="text-lg text-foreground">
                            <span className="font-semibold">{userSelections.bodyStyle}</span>,{' '}
                            <span className="font-semibold">{userSelections.powertrain}</span>,{' '}
                            <span className="font-semibold">{userSelections.seats}</span>,{' '}
                            <span className="font-semibold">{userSelections.priceRange}</span>
                        </p>
                    </motion.div>
                    
                    {/* Car Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {cars.map((car, index) => (
                            <motion.div
                                key={car.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            >
                                <Card className="overflow-hidden bg-card border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
                                    {/* Car Image */}
                                    <div className="relative h-56 overflow-hidden bg-muted">
                                        <img
                                            src={car.image}
                                            alt={`${car.brand} ${car.model}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Image carousel indicator */}
                                        <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
                                            1/6
                                        </div>
                                    </div>
                                    
                                    {/* Card Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-black text-primary mb-1">
                                                {car.brand} <span className="font-bold">{car.model}</span>
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                {car.subtitle}
                                            </p>
                                            
                                            {/* Our Review Link */}
                                            <Link
                                                to={`/review/${car.id}`}
                                                className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors mb-4"
                                            >
                                                Our Review
                                                <ExternalLink className="ml-1 h-3 w-3" />
                                            </Link>
                                        </div>
                                        
                                        {/* Price and Arrow */}
                                        <div className="flex items-end justify-between mt-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground mb-1">From</p>
                                                <p className="text-2xl font-black text-primary">
                                                    {car.price}
                                                </p>
                                                <p className="text-xs text-accent font-semibold">
                                                    (av. savings {car.savings})*
                                                </p>
                                            </div>
                                            
                                            {/* Arrow Button */}
                                            <button className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all group/btn shadow-lg">
                                                <ArrowRight className="w-6 h-6 text-primary-foreground group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex justify-center items-center gap-4"
                    >
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="w-12 h-12 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-5 h-5 text-primary" />
                        </button>
                        
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-lg font-bold text-primary">
                                {currentPage}/{totalPages}
                            </span>
                        </div>
                        
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
                        >
                            <ChevronRight className="w-5 h-5 text-primary-foreground" />
                        </button>
                    </motion.div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default CarComparisonPage;
