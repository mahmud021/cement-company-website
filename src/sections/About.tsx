"use client";

import { Building, Factory, HardHat, Leaf, ShieldCheck, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export default function AboutSection() {
    return (
        <section className="py-16 md:py-24 bg-[#F7F5F0]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Story Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Company Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#4A4D4B] mb-6">
                            Our Story
                        </h2>
                        <div className="space-y-4 text-[#4A4D4B]/80 leading-relaxed">
                            <p>
                                Founded in 1985, <span className="font-semibold text-[#D4A89C]">[Company Name]</span> began as a small
                                family-owned cement supplier in [Location]. What started as a single production facility
                                has grown into a trusted regional leader in construction materials.
                            </p>
                            <p>
                                Through three decades of innovation, we've remained committed to our core principle:
                                <span className="font-semibold"> quality materials build lasting legacies</span>.
                                Today, we serve over 500 commercial and residential projects annually while maintaining
                                our personal approach to customer service.
                            </p>
                            <p>
                                Our journey reflects Nigeria's construction evolution - from basic infrastructure to
                                cutting-edge sustainable development. We're proud to have contributed to iconic landmarks
                                like [Example Project 1] and [Example Project 2].
                            </p>
                        </div>
                    </motion.div>

                    {/* Milestones */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {[
                            { year: "1985", event: "Company Founded", icon: Factory },
                            { year: "2002", event: "First Major Project", icon: Building },
                            { year: "2015", event: "Sustainability Initiative", icon: Leaf },
                            { year: "2023", event: "Regional Expansion", icon: Globe }
                        ].map(({ year, event, icon: Icon }, i) => {
                            const colors = [
                                { bg: "bg-[#D4A89C]/10", border: "border-[#D4A89C]/30", iconBg: "bg-[#D4A89C]/20", iconColor: "text-[#D4A89C]" },
                                { bg: "bg-[#A2C5E0]/10", border: "border-[#A2C5E0]/30", iconBg: "bg-[#A2C5E0]/20", iconColor: "text-[#A2C5E0]" },
                                { bg: "bg-[#A8C3B0]/10", border: "border-[#A8C3B0]/30", iconBg: "bg-[#A8C3B0]/20", iconColor: "text-[#A8C3B0]" },
                                { bg: "bg-[#E8D0C1]/10", border: "border-[#E8D0C1]/30", iconBg: "bg-[#E8D0C1]/20", iconColor: "text-[#E8D0C1]" }
                            ][i];

                            return (
                                <Card
                                    key={i}
                                    className={`border ${colors.border} ${colors.bg} hover:shadow-sm transition-shadow`}
                                >
                                    <CardHeader className="pb-2">
                                        <div className={`p-2 w-10 h-10 rounded-md ${colors.iconBg} ${colors.iconColor}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle className="text-xl font-bold text-[#4A4D4B]">{year}</CardTitle>
                                        <CardDescription className="mt-1 text-[#4A4D4B]/80">{event}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </motion.div>
                </div>

                {/* Team/Values Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative rounded-xl overflow-hidden shadow-sm border border-[#E8D0C1]/30 aspect-[4/3]"
                    >
                        <img
                            src="/images/about.jpg"
                            alt="Our dedicated team"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#4A4D4B]/70 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <Users className="w-10 h-10 mb-4 text-[#E8D0C1]" />
                            <p className="text-lg font-medium">150+ professionals committed to excellence</p>
                        </div>
                    </motion.div>

                    {/* Values */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-[#4A4D4B] mb-6">
                                Our Core Values
                            </h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Quality First",
                                        description: "Every batch undergoes 27 quality checks before delivery",
                                        icon: ShieldCheck,
                                        color: "bg-[#D4A89C]/20 text-[#D4A89C]"
                                    },
                                    {
                                        title: "People Matter",
                                        description: "Investing in employee growth and community development",
                                        icon: Users,
                                        color: "bg-[#A2C5E0]/20 text-[#A2C5E0]"
                                    },
                                    {
                                        title: "Sustainable Future",
                                        description: "25% reduction in carbon footprint by 2030",
                                        icon: Leaf,
                                        color: "bg-[#A8C3B0]/20 text-[#A8C3B0]"
                                    }
                                ].map(({ title, description, icon: Icon, color }, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        viewport={{ once: true }}
                                        className="flex gap-4"
                                    >
                                        <div className={`p-3 rounded-lg ${color} flex-shrink-0`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg text-[#4A4D4B]">{title}</h4>
                                            <p className="text-[#4A4D4B]/80">{description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Full-width Mission */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-[#D4A89C]/10 to-[#A8C3B0]/10 rounded-xl p-8 md:p-12 border border-[#D4A89C]/20"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#4A4D4B] mb-6">
                            Building Nigeria's Future
                        </h3>
                        <p className="text-[#4A4D4B]/80 leading-relaxed max-w-3xl mx-auto">
                            We don't just supply cement - we enable dreams. Whether it's a family home, a
                            community hospital, or Nigeria's next landmark, we provide the foundation for
                            progress. Our technical expertise and local knowledge ensure your project gets
                            exactly what it needs, when it needs it.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}