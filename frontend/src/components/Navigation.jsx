import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navLinks = [
        { name: 'NEW', href: '/new' },
        { name: 'USED', href: '#used' },
        { name: 'SELL', href: '#sell' },
        { name: 'LEASE', href: '/lease' },
        { name: 'RESEARCH', href: '#research' },
    ];
    
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-background'
            }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/">
                        <motion.div
                            className="flex items-center space-x-2 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <svg className="w-7 h-7 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                                </svg>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-background bg-accent flex items-center justify-center">
                                <span className="text-[8px] font-bold text-accent-foreground">NZ</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tight text-primary">CAR SELECT</span>
                            <span className="text-[9px] font-semibold text-muted-foreground tracking-wider">NZ OWNED & OPERATED</span>
                        </div>
                        </motion.div>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            link.href.startsWith('/') ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            )
                        ))}
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden py-4 border-t border-border"
                    >
                        {navLinks.map((link) => (
                            link.href.startsWith('/') ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-muted transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-muted transition-colors"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};
