import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { ChevronRight } from 'lucide-react';

export const CarSelectorPage = () => {
    const navigate = useNavigate();
    const [selectedBodyStyles, setSelectedBodyStyles] = useState([]);
    
    const bodyStyles = [
        { id: 1, name: 'Small Hatchback', seats: '4/5 seats', icon: '🚗' },
        { id: 2, name: 'Compact SUV', seats: '4/5 seats', icon: '🚙' },
        { id: 3, name: 'Mid-Sized Saloon', seats: '5 seats', icon: '🚘' },
        { id: 4, name: 'Mid-Sized Hatchback', seats: '5 seats', icon: '🚗' },
        { id: 5, name: 'Mid-Sized SUV', seats: '5 seats', icon: '🚙' },
        { id: 6, name: 'Full-Sized Saloon', seats: '5 seats', icon: '🚘' },
        { id: 7, name: 'Station Wagon', seats: '5 seats', icon: '🚗' },
        { id: 8, name: 'Full-Sized SUV', seats: '5/7 seats', icon: '🚙' },
        { id: 9, name: 'UTE', seats: '5 seats', icon: '🛻' },
        { id: 10, name: 'Coupe', seats: '2/4/5 seats', icon: '🏎️' },
        { id: 11, name: 'Convertible', seats: '2/4 seats', icon: '🏎️' },
        { id: 12, name: 'People Carriers', seats: '5/5/11 seats', icon: '🚐' },
        { id: 13, name: 'Minibus', seats: '10/11/13 seats', icon: '🚐' },
        { id: 14, name: 'Cargo Van', seats: '3/6 seats', icon: '🚚' },
    ];
    
    const handleToggleBodyStyle = (id) => {
        setSelectedBodyStyles((prev) => {
            if (prev.includes(id)) {
                return prev.filter((styleId) => styleId !== id);
            }
            return [...prev, id];
        });
    };
    
    const handleSkip = () => {
        navigate('/deals');
    };
    
    const handleNext = () => {
        // Navigate to vehicle optionality page with selected body styles
        console.log('Selected body styles:', selectedBodyStyles);
        navigate('/options');
    };
    
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-3xl lg:text-5xl font-black text-primary mb-4">
                            WHICH BODY STYLE ARE YOU LOOKING FOR?
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Select as many as you wish
                        </p>
                    </motion.div>
                    
                    {/* Body Style Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {bodyStyles.map((style, index) => {
                            const isSelected = selectedBodyStyles.includes(style.id);
                            return (
                                <motion.div
                                    key={style.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    onClick={() => handleToggleBodyStyle(style.id)}
                                    className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                        isSelected
                                            ? 'border-accent bg-accent/5 shadow-lg'
                                            : 'border-border bg-card hover:border-accent/50 hover:shadow-md'
                                    }`}
                                >
                                    {/* Checkbox */}
                                    <div className="absolute top-4 left-4">
                                        <Checkbox
                                            checked={isSelected}
                                            onCheckedChange={() => handleToggleBodyStyle(style.id)}
                                            className="h-6 w-6 border-2"
                                        />
                                    </div>
                                    
                                    {/* Car Icon/Image */}
                                    <div className="flex items-center justify-center mb-4 pt-4">
                                        <div className="text-7xl opacity-80">{style.icon}</div>
                                    </div>
                                    
                                    {/* Body Style Name */}
                                    <h3 className="text-lg font-bold text-primary text-center mb-1">
                                        {style.name}
                                    </h3>
                                    
                                    {/* Seat Information */}
                                    <p className="text-sm text-muted-foreground text-center">
                                        {style.seats}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                    
                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={handleSkip}
                            className="border-2 border-border text-foreground hover:bg-muted px-12 py-6 text-base font-bold rounded-xl w-full sm:w-auto"
                        >
                            SKIP
                        </Button>
                        
                        <Button
                            size="lg"
                            onClick={handleNext}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
                        >
                            NEXT
                            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CarSelectorPage;