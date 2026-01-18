import React from 'react';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './ui/accordion';

export const WhyCarSelect = () => {
    const faqItems = [
        {
            question: 'What is Car Select?',
            answer: 'Car Select is New Zealand\'s leading automotive marketplace that connects buyers with trusted dealers and private sellers. We make buying and selling cars simple, transparent, and stress-free.',
        },
        {
            question: 'How we work for you?',
            answer: 'We aggregate the best deals from verified dealers across New Zealand, provide comprehensive vehicle information, arrange test drives, and help with financing options. Our platform is completely free for buyers.',
        },
        {
            question: 'What fees are involved?',
            answer: 'For buyers, Car Select is 100% free. There are no hidden charges. For sellers, we offer competitive commission rates and only charge when your car is sold. Transparent pricing, no surprises.',
        },
        {
            question: 'What if I am unsure what I want to buy?',
            answer: 'Our expert team can guide you through the entire process. Use our car comparison tool, read verified reviews, and chat with our advisors who can help match you with the perfect vehicle based on your needs and budget.',
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
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl lg:text-4xl font-black text-center text-primary mb-12">
                        Why Car Select?
                    </h2>
                    
                    <Accordion type="single" collapsible className="space-y-4">
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
                </motion.div>
            </div>
        </section>
    );
};
