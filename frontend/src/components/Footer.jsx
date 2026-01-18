import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export const Footer = () => {
    const footerLinks = {
        'Buy': ['New Cars', 'Used Cars', 'Electric Cars', 'Car Reviews', 'Compare Cars'],
        'Sell': ['Sell My Car', 'Value My Car', 'Part Exchange', 'How It Works'],
        'Company': ['About Us', 'Contact', 'Careers', 'Press', 'Investor Relations'],
        'Resources': ['Help Centre', 'Finance Guide', 'Car Buying Tips', 'Blog'],
    };
    
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                                    </svg>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-primary bg-accent flex items-center justify-center">
                                    <span className="text-[7px] font-bold text-accent-foreground">NZ</span>
                                </div>
                            </div>
                            <span className="text-lg font-black">CAR SELECT</span>
                        </div>
                        <p className="text-sm text-primary-foreground/80 mb-4">
                            New Zealand's trusted automotive marketplace. Making car buying simple since 2024.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    
                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-bold text-base mb-4">{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                {/* Bottom Bar */}
                <div className="border-t border-primary-foreground/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-primary-foreground/70">
                            © 2024 Car Select NZ. All rights reserved.
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm">
                            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
