"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Phone } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Products", href: "#" },
        { name: "Solutions", href: "#" },
        { name: "Projects", href: "#" },
        { name: "About", href: "#" },
    ];

    return (
        <header className="fixed w-full z-50 top-0 left-0">
            <motion.nav
                className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
                    scrolled ? "py-2" : "py-4"
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div
                    className={`flex items-center justify-between rounded-2xl backdrop-blur-md ${
                        scrolled
                            ? "bg-[#F7F5F0]/90 border border-[#E8D0C1]/50 shadow-sm"
                            : "bg-[#F7F5F0]/80 border border-[#E8D0C1]/30"
                    }`}
                >
                    {/* Logo */}
                    <div className="flex items-center pl-5 py-3">
                        <div className="w-10 h-10 rounded-lg bg-[#D4A89C] flex items-center justify-center mr-3">
                            <div className="w-6 h-6 rounded bg-[#F7F5F0] flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-[#D4A89C]" />
                            </div>
                        </div>
                        <span className="text-xl font-bold text-[#4A4D4B]">
              Build<span className="text-[#A8C3B0]">Cem</span>
            </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                className={`px-4 py-2 rounded-xl text-[#4A4D4B] hover:text-[#4A4D4B]/90 font-medium transition-colors relative`}
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                                <motion.div
                                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-[#D4A89C]"
                                    whileHover={{ width: "80%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className="hidden md:block pr-5">
                        <motion.button
                            className="flex items-center bg-[#D4A89C] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#D4A89C]/90 transition-colors"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Contact Us
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-3 mr-2 rounded-xl bg-[#F7F5F0] text-[#4A4D4B]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden mt-2 rounded-2xl backdrop-blur-md bg-[#F7F5F0]/90 border border-[#E8D0C1]/50 shadow-sm"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col py-4">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        className="px-6 py-3 text-[#4A4D4B] font-medium hover:bg-[#E8D0C1]/20 transition-colors"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                                <motion.button
                                    className="mx-5 mt-3 flex items-center justify-center bg-[#D4A89C] text-white py-3 rounded-xl font-medium hover:bg-[#D4A89C]/90 transition-colors"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: navLinks.length * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    Contact Us
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    );
};