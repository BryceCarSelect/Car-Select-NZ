import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { 
    ChevronLeft, 
    ChevronRight, 
    Play, 
    Star,
    Check,
    Minus,
    MapPin,
    Clock,
    MessageSquare
} from 'lucide-react';

export const CarOffersPage = () => {
    const navigate = useNavigate();
    const { carId } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentDealerIndex, setCurrentDealerIndex] = useState(0);
    
    const carImages = [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80',
        'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&q=80',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
        'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&q=80',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80',
    ];
    
    const pros = [
        'One of the best-looking SUVs in its class',
        'Premium interior design w/plenty of storage',
        'Apple and Android Car Play',
        '5-Star ANCAP Safety rating',
        'Sat-Nav directions in the main infotainment screen',
    ];
    
    const cons = [
        'Not a lot of legroom for rear passengers',
        'The load cover doesn\'t fit under the boot floor',
        'No rear window wiper',
        'Boot space is smaller than other Mid-Sized SUVs',
        'Touch-sensitive buttons can be hard to use while driving',
    ];
    
    const dealers = [
        {
            id: 1,
            name: 'Armstrongs Peugeot East Auckland',
            distance: '2km',
            rating: 4.8,
            reviews: 28,
            cashOffer: '$47,700',
            savings: '$2,200',
            expiresIn: '14 DAYS',
        },
        {
            id: 2,
            name: 'Peugeot Miles Group Takakapuna',
            distance: '19km',
            rating: 4.6,
            reviews: 14,
            cashOffer: '$47,650',
            savings: '$2,250',
            expiresIn: '14 DAYS',
        },
        {
            id: 3,
            name: 'Ebbett Peugeot Hamilton',
            distance: '92km',
            rating: 4.3,
            reviews: 2,
            cashOffer: '$48,900',
            savings: '$1,000',
            expiresIn: '14 DAYS',
        },
    ];
    
    const otherOptions = [
        {
            id: 4,
            name: 'Turners Cars Auckland',
            distance: '5km',
            rating: 4.7,
            reviews: 45,
        },
        {
            id: 5,
            name: 'Continental Cars Wellington',
            distance: '320km',
            rating: 4.5,
            reviews: 18,
        },
    ];
    
    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? carImages.length - 1 : prev - 1));
    };
    
    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === carImages.length - 1 ? 0 : prev + 1));
    };
    
    const handlePrevDealer = () => {
        setCurrentDealerIndex((prev) => (prev === 0 ? dealers.length - 1 : prev - 1));
    };
    
    const handleNextDealer = () => {
        setCurrentDealerIndex((prev) => (prev === dealers.length - 1 ? 0 : prev + 1));
    };
    
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-black text-primary mb-2">
                                YOUR OFFERS FOR: NEW PEUGEOT 3008
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-3xl">
                                Great for the school runs and the soccer runs! The highly efficient PureTech petrol engine won the best engine award!
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            onClick={() => navigate('/new')}
                            className="hidden lg:flex"
                        >
                            EDIT THIS CAR
                        </Button>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        {/* Left Column - Image & Pros/Cons */}
                        <div>
                            {/* Car Image */}
                            <div className="relative rounded-2xl overflow-hidden bg-muted mb-4">
                                <img
                                    src={carImages[currentImageIndex]}
                                    alt="Peugeot 3008"
                                    className="w-full h-auto"
                                />
                                
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                                >
                                    <ChevronLeft className="h-6 w-6 text-primary" />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                                >
                                    <ChevronRight className="h-6 w-6 text-primary" />
                                </button>
                                
                                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                                    {currentImageIndex + 1}/{carImages.length}
                                </div>
                            </div>
                            
                            <Button
                                size="lg"
                                className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold py-6 mb-6"
                            >
                                <Play className="mr-2 h-5 w-5 fill-current" />
                                VIDEO REVIEW
                            </Button>
                            
                            {/* Pros & Cons */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Pros */}
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        Pros
                                    </h3>
                                    <ul className="space-y-2">
                                        {pros.map((pro, index) => (
                                            <li key={index} className="flex items-start">
                                                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-foreground">{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                {/* Cons */}
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-destructive flex items-center justify-center mr-2">
                                            <Minus className="w-4 h-4 text-white" />
                                        </div>
                                        Cons
                                    </h3>
                                    <ul className="space-y-2">
                                        {cons.map((con, index) => (
                                            <li key={index} className="flex items-start">
                                                <Minus className="w-5 h-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-foreground">{con}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Column - Dealer Offers Carousel */}
                        <div>
                            <div className="relative">
                                {/* Dealer Card */}
                                <motion.div
                                    key={currentDealerIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="p-8 border-2 border-border shadow-lg">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-black text-primary mb-2">
                                                {dealers[currentDealerIndex].name}
                                            </h3>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center">
                                                    <MapPin className="w-4 h-4 mr-1" />
                                                    Distance {dealers[currentDealerIndex].distance}
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="flex mr-2">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <Star
                                                                key={star}
                                                                className={`w-4 h-4 ${
                                                                    star <= dealers[currentDealerIndex].rating
                                                                        ? 'fill-yellow-400 text-yellow-400'
                                                                        : 'text-gray-300'
                                                                }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    {dealers[currentDealerIndex].reviews} Reviews
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-muted/50 rounded-xl p-6 mb-6">
                                            <p className="text-sm text-muted-foreground mb-2">Car Select Cash Offer</p>
                                            <p className="text-5xl font-black text-primary mb-4">
                                                {dealers[currentDealerIndex].cashOffer}
                                            </p>
                                            <div className="flex items-baseline gap-2 mb-4">
                                                <span className="text-sm text-muted-foreground">Savings</span>
                                                <span className="text-3xl font-black text-accent">
                                                    {dealers[currentDealerIndex].savings}
                                                </span>
                                            </div>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Clock className="w-4 h-4 mr-2" />
                                                OFFER EXPIRES IN {dealers[currentDealerIndex].expiresIn}
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <Button
                                                size="lg"
                                                onClick={() => navigate(`/offer-detail/${carId || 1}/${dealers[currentDealerIndex].id}`)}
                                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6"
                                            >
                                                SEE OFFER
                                            </Button>
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="w-full border-2 border-border hover:bg-muted font-bold py-6"
                                            >
                                                <MessageSquare className="mr-2 h-5 w-5" />
                                                MESSAGE DEALER
                                            </Button>
                                        </div>
                                    </Card>
                                </motion.div>
                                
                                {/* Carousel Navigation */}
                                <div className="flex justify-between items-center mt-6">
                                    <button
                                        onClick={handlePrevDealer}
                                        className="w-12 h-12 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-primary" />
                                    </button>
                                    
                                    <div className="flex gap-2">
                                        {dealers.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentDealerIndex(index)}
                                                className={`w-3 h-3 rounded-full transition-colors ${
                                                    index === currentDealerIndex
                                                        ? 'bg-primary'
                                                        : 'bg-border hover:bg-border/80'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    
                                    <button
                                        onClick={handleNextDealer}
                                        className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors"
                                    >
                                        <ChevronRight className="w-6 h-6 text-primary-foreground" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Other Options Section */}
                    <div className="mt-16">
                        <h2 className="text-3xl font-black text-primary mb-8">
                            OTHER OPTIONS FOR: NEW PEUGEOT 3008
                        </h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherOptions.map((dealer) => (
                                <Card key={dealer.id} className="p-6 border border-border hover:shadow-lg transition-shadow cursor-pointer">
                                    <h3 className="text-xl font-bold text-primary mb-2">
                                        {dealer.name}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            Distance {dealer.distance}
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <div className="flex mr-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className={`w-4 h-4 ${
                                                        star <= dealer.rating
                                                            ? 'fill-yellow-400 text-yellow-400'
                                                            : 'text-gray-300'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                            {dealer.reviews} Reviews
                                        </span>
                                    </div>
                                    <Button
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                                    >
                                        VIEW OFFERS
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default CarOffersPage;
