import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ChevronRight } from 'lucide-react';

export const VehicleOptionalityPage = () => {
    const navigate = useNavigate();
    
    // Price state
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');
    
    // Seats state
    const [seatsMin, setSeatsMin] = useState('');
    const [seatsMax, setSeatsMax] = useState('');
    
    // Drivetrain & Powertrain state
    const [powertrain, setPowertrain] = useState('');
    const [drivetrain, setDrivetrain] = useState('');
    const [bootSpace, setBootSpace] = useState('');
    
    // Equipment state
    const [equipment, setEquipment] = useState({
        parkingSensors: false,
        satNav: false,
        reversingCamera: false,
        climateControl: false,
        cruiseControl: false,
        touchscreenInfotainment: false,
        heatedSeats: false,
        appleCarPlay: false,
        androidAuto: false,
        leatherSeats: false,
        sunroof: false,
        digitalDashboard: false,
    });
    
    const handleEquipmentToggle = (key) => {
        setEquipment((prev) => ({ ...prev, [key]: !prev[key] }));
    };
    
    const handleSkip = () => {
        navigate('/deals');
    };
    
    const handleNext = () => {
        console.log('Filters:', { priceMin, priceMax, seatsMin, seatsMax, powertrain, drivetrain, bootSpace, equipment });
        navigate('/comparison');
    };
    
    const equipmentOptions = [
        { key: 'parkingSensors', label: 'Parking Sensors' },
        { key: 'satNav', label: 'Sat Nav' },
        { key: 'reversingCamera', label: 'Reversing Camera' },
        { key: 'climateControl', label: 'Climate Control' },
        { key: 'cruiseControl', label: 'Cruise Control' },
        { key: 'touchscreenInfotainment', label: 'Touchscreen Infotainment' },
        { key: 'heatedSeats', label: 'Heated Seats' },
        { key: 'appleCarPlay', label: 'Apple CarPlay' },
        { key: 'androidAuto', label: 'Android Auto' },
        { key: 'leatherSeats', label: 'Leather Seats' },
        { key: 'sunroof', label: 'Sunroof' },
        { key: 'digitalDashboard', label: 'Digital Dashboard' },
    ];
    
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-3xl lg:text-5xl font-black text-primary mb-4">
                            VEHICLE OPTIONALITY
                        </h1>
                    </motion.div>
                    
                    {/* Filters Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-8 mb-12"
                    >
                        {/* Price Section */}
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <h2 className="text-xl font-bold text-primary mb-4">Price</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="price-min" className="text-sm font-semibold text-foreground mb-2 block">
                                        Minimum
                                    </Label>
                                    <Input
                                        id="price-min"
                                        type="number"
                                        placeholder="$"
                                        value={priceMin}
                                        onChange={(e) => setPriceMin(e.target.value)}
                                        className="h-12"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="price-max" className="text-sm font-semibold text-foreground mb-2 block">
                                        Maximum
                                    </Label>
                                    <Input
                                        id="price-max"
                                        type="number"
                                        placeholder="$"
                                        value={priceMax}
                                        onChange={(e) => setPriceMax(e.target.value)}
                                        className="h-12"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Seats Section */}
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <h2 className="text-xl font-bold text-primary mb-4">Seats</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="seats-min" className="text-sm font-semibold text-foreground mb-2 block">
                                        Minimum
                                    </Label>
                                    <Input
                                        id="seats-min"
                                        type="number"
                                        placeholder="e.g., 4"
                                        value={seatsMin}
                                        onChange={(e) => setSeatsMin(e.target.value)}
                                        className="h-12"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="seats-max" className="text-sm font-semibold text-foreground mb-2 block">
                                        Maximum
                                    </Label>
                                    <Input
                                        id="seats-max"
                                        type="number"
                                        placeholder="e.g., 7"
                                        value={seatsMax}
                                        onChange={(e) => setSeatsMax(e.target.value)}
                                        className="h-12"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Powertrain & Drivetrain Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Powertrain Type */}
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h2 className="text-xl font-bold text-primary mb-4">Powertrain Type</h2>
                                <Select value={powertrain} onValueChange={setPowertrain}>
                                    <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="petrol">Petrol</SelectItem>
                                        <SelectItem value="diesel">Diesel</SelectItem>
                                        <SelectItem value="electric">Electric</SelectItem>
                                        <SelectItem value="hybrid">Hybrid</SelectItem>
                                        <SelectItem value="plugin-hybrid">Plug-in Hybrid</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            
                            {/* Drivetrain Type */}
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h2 className="text-xl font-bold text-primary mb-4">Drivetrain Type</h2>
                                <Select value={drivetrain} onValueChange={setDrivetrain}>
                                    <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="fwd">Front-Wheel Drive (FWD)</SelectItem>
                                        <SelectItem value="rwd">Rear-Wheel Drive (RWD)</SelectItem>
                                        <SelectItem value="awd">All-Wheel Drive (AWD)</SelectItem>
                                        <SelectItem value="4wd">Four-Wheel Drive (4WD)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        
                        {/* Boot Space Section */}
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <h2 className="text-xl font-bold text-primary mb-4">Boot Space</h2>
                            <Select value={bootSpace} onValueChange={setBootSpace}>
                                <SelectTrigger className="h-12">
                                    <SelectValue placeholder="Suitcases/Litres" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="small">Small (1-2 suitcases / 200-300L)</SelectItem>
                                    <SelectItem value="medium">Medium (3-4 suitcases / 300-500L)</SelectItem>
                                    <SelectItem value="large">Large (5-6 suitcases / 500-700L)</SelectItem>
                                    <SelectItem value="xlarge">Extra Large (7+ suitcases / 700L+)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        
                        {/* Equipment Section */}
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <div className="mb-4">
                                <h2 className="text-xl font-bold text-primary inline-block">
                                    Equipment<span className="text-accent ml-1">*</span>
                                </h2>
                                <p className="text-sm text-muted-foreground mt-1">
                                    options may be an extra cost
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {equipmentOptions.map((option) => (
                                    <div key={option.key} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={option.key}
                                            checked={equipment[option.key]}
                                            onCheckedChange={() => handleEquipmentToggle(option.key)}
                                            className="h-5 w-5"
                                        />
                                        <Label
                                            htmlFor={option.key}
                                            className="text-sm font-medium text-foreground cursor-pointer"
                                        >
                                            {option.label}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    
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

export default VehicleOptionalityPage;