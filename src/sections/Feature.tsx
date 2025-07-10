"use client";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, DollarSign, Clock, Layers, Leaf } from "lucide-react";

const features = [
    {
        title: "Reliable Delivery",
        icon: Truck,
        color: "bg-[#A2C5E0]/20",
        iconColor: "text-[#A2C5E0]",
        description: "Just-in-time delivery with GPS tracking and 99.8% on-time rate across Nigeria",
        stat: "98%",
        statLabel: "On-Time Delivery"
    },
    {
        title: "Quality Assured",
        icon: ShieldCheck,
        color: "bg-[#D4A89C]/20",
        iconColor: "text-[#D4A89C]",
        description: "ISO 9001 certified with triple-testing protocol on every batch",
        stat: "0.01%",
        statLabel: "Defect Rate"
    },
    {
        title: "Cost Effective",
        icon: DollarSign,
        color: "bg-[#4A4D4B]/10",
        iconColor: "text-[#4A4D4B]",
        description: "Competitive bulk pricing with 15% savings guarantee vs competitors",
        stat: "15%",
        statLabel: "Cost Savings"
    },
    {
        title: "Fast Turnaround",
        icon: Clock,
        color: "bg-[#A8C3B0]/20",
        iconColor: "text-[#A8C3B0]",
        description: "Emergency orders fulfilled within 4 hours across major cities",
        stat: "4h",
        statLabel: "Rush Delivery"
    },
    {
        title: "High Durability",
        icon: Layers,
        color: "bg-[#A2C5E0]/20",
        iconColor: "text-[#A2C5E0]",
        description: "60MPa strength concrete with 50+ year structural guarantee",
        stat: "60MPa",
        statLabel: "Compressive Strength"
    },
    {
        title: "Eco Friendly",
        icon: Leaf,
        color: "bg-[#A8C3B0]/20",
        iconColor: "text-[#A8C3B0]",
        description: "Low-carbon cement with 30% reduced CO₂ emissions",
        stat: "30%",
        statLabel: "CO₂ Reduction"
    },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100
        }
    },
    hover: {
        y: -8,
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)",
        transition: {
            type: "spring",
            stiffness: 400
        }
    }
};

export const FeaturesSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-[#F7F5F0] to-[#F7F5F0] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-48 h-48 bg-[#D4A89C]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-20 w-64 h-64 bg-[#A2C5E0]/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#4A4D4B] mb-4">
                        Built for Performance
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#D4A89C] to-[#A8C3B0] mx-auto mb-6" />
                    <p className="text-[#4A4D4B]/80 max-w-2xl mx-auto text-lg leading-relaxed">
                        Engineering excellence in every batch. Our solutions combine cutting-edge
                        technology with decades of construction expertise.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map(({ title, icon: Icon, color, iconColor, description, stat, statLabel }, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover="hover"
                            className="rounded-xl bg-white/90 border border-[#E8D0C1]/30 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-6">
                                <div className={`${color} ${iconColor} w-12 h-12 flex items-center justify-center rounded-md mb-4`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#4A4D4B] mb-2">{title}</h3>
                                <p className="text-[#4A4D4B]/80 mb-6">{description}</p>

                                <div className="flex items-center gap-3 pt-4 border-t border-[#E8D0C1]/30">
                                    <span className="text-2xl font-bold text-[#4A4D4B]">{stat}</span>
                                    <span className="text-sm text-[#4A4D4B]/70">{statLabel}</span>
                                </div>
                            </div>

                            {/* Accent bar */}
                            <div className={`h-1 ${iconColor.replace('text-', 'bg-')}`} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-[#D4A89C]/10 to-[#A8C3B0]/10 rounded-xl p-8 border border-[#D4A89C]/20"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-[#4A4D4B] mb-4">
                            Ready to Build Better?
                        </h3>
                        <p className="text-[#4A4D4B]/80 mb-6 max-w-2xl mx-auto">
                            Get a customized quote for your project within 24 hours. Our technical team will
                            recommend the perfect concrete solution for your specific requirements.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#D4A89C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#D4A89C]/90 transition duration-300 shadow-sm"
                        >
                            Request a Quote
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};