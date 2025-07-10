"use client"
import { motion } from "framer-motion"
import type React from "react"

import { Truck, Shield, Zap, ArrowRight } from "lucide-react"
import {SectionBackground} from "../components/backgrounds";

interface FeatureCard {
    title: string
    description: string
    image: string
    icon: React.ReactNode
    gradient: string
    stats?: string
}

const features: FeatureCard[] = [
    {
        title: "Lightning Fast Delivery",
        description:
            "Same-day delivery across the metro area. Our fleet of specialized trucks ensures your concrete arrives fresh and ready to pour, exactly when you need it.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
        icon: <Truck className="w-6 h-6" />,
        gradient: "from-blue-500 to-cyan-400",
        stats: "< 2hrs avg delivery",
    },
    {
        title: "Certified Excellence",
        description:
            "ISO 9001 certified processes and materials. Every batch is tested for strength, consistency, and durability to exceed industry standards.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
        icon: <Shield className="w-6 h-6" />,
        gradient: "from-emerald-500 to-teal-400",
        stats: "99.8% quality rate",
    },
    {
        title: "Premium Mix Technology",
        description:
            "Advanced polymer-enhanced concrete with superior strength-to-weight ratio. Engineered for maximum durability and sustainability.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
        icon: <Zap className="w-6 h-6" />,
        gradient: "from-orange-500 to-red-400",
        stats: "40% stronger mix",
    },
]

export const WhyWeStandOutSection = () => {
    return (
        <SectionBackground variant="features">
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_50%)]" />

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Zap className="w-4 h-4" />
                        Industry Leading
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                        Why We Stand Out
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Three decades of excellence in concrete delivery and quality assurance
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.7 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="relative rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                                {/* Gradient overlay */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                />

                                {/* Icon with gradient background */}
                                <div
                                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 shadow-lg`}
                                >
                                    {item.icon}
                                </div>

                                {/* Stats badge */}
                                {item.stats && (
                                    <div className="absolute top-6 right-6 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {item.stats}
                                    </div>
                                )}

                                {/* Image with overlay */}
                                <div className="relative overflow-hidden rounded-2xl mb-6 group">
                                    <img
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>

                                    {/* Learn more link */}
                                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300 cursor-pointer">
                                        <span>Learn more</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}

            </div>
        </section>
        </SectionBackground>
    )
}
