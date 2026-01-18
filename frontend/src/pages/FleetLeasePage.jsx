import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowRight } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion';

export const FleetLeasePage = () => {
    const navigate = useNavigate();
    
    const faqItems = [
        {
            question: 'What is Car Select Fleeting?',
            answer: 'Car Select Fleeting is a specialized service designed to help businesses and fleet managers find the best vehicle leasing and purchase options. We work with trusted dealers across New Zealand to provide competitive rates, flexible terms, and comprehensive support for your fleet needs.',
        },
        {
            question: 'How we work for you?',
            answer: 'Our dedicated fleeting team acts as your advocate, curating all available options from our network of verified dealers. We handle negotiations, compare rates, arrange test drives, and manage the entire process from inquiry to delivery. We save you time and money by doing the heavy lifting.',
        },
        {
            question: 'Do I receive offers on all cars?',
            answer: 'Yes! Whether you need passenger vehicles, commercial utes, vans, or specialized fleet vehicles, our team can source competitive offers from multiple dealers. We work across all makes and models to ensure you get the right vehicles for your business needs.',
        },
        {
            question: 'How does Car Select Fleeting compare?',
            answer: 'Unlike traditional approaches where you contact dealers individually, we bring all options to you in one place. Our service is free for businesses, we negotiate on your behalf, provide transparent pricing, and offer ongoing support. We leverage our dealer network to secure better rates than you would typically get on your own.',
        },
    ];
    
    const deals = [
        {
            id: 1,
            title: 'NEW FORD RANGER',
            price: '$242',
            description: 'Tough, smart, versatile. Perfect for work, family and play',
            image: 'https://images.unsplash.com/photo-1653102284085-aa5420886ea6?w=800&q=80',
        },
        {
            id: 2,
            title: 'NEW KIA SORENTO',
            price: '$309',
            description: 'The new Sorento features the latest connectivity and infotainment technology...',
            image: 'https://images.unsplash.com/photo-1694649686884-0d62d0dc47d1?w=800&q=80',
        },
    ];
    
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl lg:text-6xl font-black text-primary leading-tight mb-6">
                                FLEET/LEASE
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Our Fleeting team is here to help, whether its buying or leasing, our team will curate all options available for your business.
                            </p>
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group"
                            >
                                Get Fleeting Deals Now
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                        
                        {/* Right Car Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1000&q=80"
                                alt="Fleet Vehicle"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* Why Choose Section */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl lg:text-4xl font-black text-center text-primary mb-12">
                            Why Choose Car Select Fleet Leasing?
                        </h2>
                        
                        <Accordion type="single" collapsible className="space-y-4 mb-12">
                            {faqItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <AccordionItem
                                        value={`item-${index}`}
                                        className="bg-muted hover:bg-muted/80 transition-colors rounded-xl px-6 border-0"
                                    >
                                        <AccordionTrigger className="text-left text-base lg:text-lg font-bold text-primary hover:no-underline py-6">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                        
                        <div className="text-center">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                Our Online Fleeting Form
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* Best Leasing Deals Section */}
            <section className="py-16 lg:py-24 bg-secondary/20">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl lg:text-5xl font-black text-primary mb-12 text-center"
                    >
                        SOME OF THE BEST LEASING DEALS WE'VE SEEN
                    </motion.h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {deals.map((deal, index) => (
                            <motion.div
                                key={deal.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    <div className="relative h-64 overflow-hidden bg-muted">
                                        <img
                                            src={deal.image}
                                            alt={deal.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-2xl font-black text-primary mb-2">
                                            {deal.title}
                                        </h3>
                                        <p className="text-3xl font-black text-accent mb-4">
                                            {deal.price} <span className="text-base font-bold">pw (excl. GST)</span>
                                        </p>
                                        <p className="text-muted-foreground mb-6 flex-1">
                                            {deal.description}
                                        </p>
                                        <Button
                                            className="w-full bg-muted hover:bg-muted/80 text-primary font-bold py-6 rounded-xl border-2 border-transparent hover:border-primary transition-all"
                                        >
                                            GET THE {deal.title.replace('NEW ', '')} DEAL
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default FleetLeasePage;
