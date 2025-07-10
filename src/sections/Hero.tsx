"use client"

import { Folder, Users, Grid3X3 } from "lucide-react"
import { motion } from "framer-motion"
import { SectionBackground } from "../components/backgrounds";

export default function HeroSection() {
    const heading = "Your Trusted Partner in Concrete Supply.".split(" ")

    const cards = [
        { src: "/placeholder.svg?height=120&width=160", className: "top-20 left-8 md:left-16 lg:left-24", rotate: -6, width: 160, height: 120 },
        { src: "/placeholder.svg?height=100&width=140", className: "top-32 right-8 md:right-16 lg:right-24", rotate: 3, width: 140, height: 100 },
        { src: "/placeholder.svg?height=140&width=120", className: "top-1/2 left-4 md:left-12 -translate-y-1/2", rotate: 6, width: 120, height: 140 },
        { src: "/placeholder.svg?height=130&width=150", className: "top-1/2 right-4 md:right-12 -translate-y-1/2", rotate: -3, width: 150, height: 130 },
        { src: "/placeholder.svg?height=110&width=130", className: "bottom-32 left-12 md:left-20", rotate: 12, width: 130, height: 110 },
        { src: "/placeholder.svg?height=125&width=145", className: "bottom-20 right-16 md:right-28", rotate: -6, width: 145, height: 125 },
    ]

    return (
        <SectionBackground variant="hero">
            <section className="min-h-screen bg-[#F7F5F0] flex items-center justify-center px-4 py-16 relative overflow-hidden">
                {/* Central Content */}
                <div className="text-center max-w-4xl z-10 relative">
                    {/* Top Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="flex justify-center gap-4 mb-8"
                    >
                        {[Folder, Users, Grid3X3].map((Icon, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }}
                                className="p-2 bg-[#E8D0C1] rounded-lg shadow-sm"
                            >
                                <Icon className="w-5 h-5 text-[#4A4D4B]" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Animated Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A4D4B] mb-6 leading-tight">
                        {heading.map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="inline-block mr-2"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    {/* Animated Paragraph */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="text-[#4A4D4B]/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Delivering high-quality ready-mix concrete for projects of all sizes.
                        <br />
                        From residential foundations to large-scale commercial developments, we ensure reliability and performance.
                    </motion.p>
                </div>

                {/* Floating Image Cards */}
                {cards.map(({ src, className, rotate, width, height }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, rotate: rotate - 5, y: 20 }}
                        animate={{ opacity: 1, rotate, y: 0 }}
                        transition={{ delay: 1.4 + index * 0.2, duration: 0.5 }}
                        className={`absolute ${className}`}
                    >
                        <div className="bg-[#F7F5F0] border-2 border-[#E8D0C1] p-3 rounded-2xl shadow-lg transform hover:rotate-0 transition-transform duration-300">
                            <img
                                src="/images/about.jpg"
                                alt="Concrete project"
                                width={width}
                                height={height}
                                className="rounded-xl object-cover"
                            />
                        </div>
                    </motion.div>
                ))}

                {/* Primary Accent Circle */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.6, duration: 0.4 }}
                    className="absolute bottom-8 left-8 w-12 h-12 bg-[#D4A89C] rounded-full shadow-lg z-20"
                />

                {/* Secondary Accent Circle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.8 }}
                    className="absolute top-16 right-1/3 w-6 h-6 bg-[#A2C5E0] rounded-full opacity-60"
                />
            </section>
        </SectionBackground>
    )
}