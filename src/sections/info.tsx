"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Construction,
  Globe,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

export const InfoSection = () => {
  const items = [
    {
      title: "Our Mission",
      description:
          "To provide high-quality cement products that form the foundation for durable, sustainable infrastructure worldwide.",
      icon: Construction,
      color: "bg-[#D4A89C]/20",
      iconColor: "text-[#D4A89C]",
      bgColor: "bg-white/90",
      rotate: 0,
    },
    {
      title: "Our Vision",
      description:
          "To be the most trusted cement manufacturer, innovating for a greener construction future.",
      icon: Globe,
      color: "bg-[#A2C5E0]/20",
      iconColor: "text-[#A2C5E0]",
      bgColor: "bg-white/90",
      rotate: 0,
    },
    {
      title: "Our Values",
      description:
          "Quality, integrity, innovation, and environmental responsibility guide every decision we make.",
      icon: ShieldCheck,
      color: "bg-[#A8C3B0]/20",
      iconColor: "text-[#A8C3B0]",
      bgColor: "bg-white/90",
      rotate: 0,
    },
    {
      title: "Sustainability",
      description:
          "Reducing our carbon footprint by 25% by 2030 through innovative production methods.",
      icon: Leaf,
      color: "bg-[#E8D0C1]/20",
      iconColor: "text-[#E8D0C1]",
      bgColor: "bg-white/90",
      rotate: 0,
    },
  ];

  return (
      <section className="py-16 md:py-24 bg-[#F7F5F0] bg-[url('/images/concrete-texture.png')] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#4A4D4B]">
            Building the Future
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - 2 Cards */}
            <div className="flex flex-col gap-6">
              {items.slice(0, 2).map(({ title, description, icon: Icon, color, iconColor, bgColor, rotate }, i) => (
                  <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30, rotate: rotate - 4 }}
                      whileInView={{ opacity: 1, y: 0, rotate }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                  >
                    <Card className={`h-full rounded-md border border-[#E8D0C1]/30 shadow-none hover:shadow-sm transition-shadow duration-300 ${bgColor}`}>
                      <CardHeader className="p-5 rounded-md">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 + 0.1, duration: 0.4 }}
                            className={`${color} p-2 inline-flex items-center justify-center w-10 h-10 ${iconColor} rounded-md`}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <CardTitle className="mt-4 text-[#4A4D4B]">{title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 px-5 pb-5 rounded-md">
                        <CardDescription className="text-[#4A4D4B]/80">{description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
              ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden shadow-sm border border-[#E8D0C1]/30 aspect-[3/4] max-w-sm w-full rounded-md"
              >
                <img
                    src="/images/about.jpg"
                    alt="Our modern cement production facility"
                    className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A4D4B]/80 via-[#4A4D4B]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Since 1985</h3>
                  <p className="text-[#F7F5F0] text-sm">
                    With over 10 years of experience in the construction industry, we are committed to delivering high-quality materials and services. Our core values of integrity, safety, and innovation drive us to exceed client expectations.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Side - 2 Cards */}
            <div className="flex flex-col gap-6">
              {items.slice(2).map(({ title, description, icon: Icon, color, iconColor, bgColor, rotate }, i) => (
                  <motion.div
                      key={i + 2}
                      initial={{ opacity: 0, y: 30, rotate: rotate - 4 }}
                      whileInView={{ opacity: 1, y: 0, rotate }}
                      transition={{ delay: (i + 2) * 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                  >
                    <Card className={`h-full rounded-md border border-[#E8D0C1]/30 shadow-none hover:shadow-sm transition-shadow duration-300 ${bgColor}`}>
                      <CardHeader className="p-5 rounded-md">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 + 0.1, duration: 0.4 }}
                            className={`${color} p-2 inline-flex items-center justify-center w-10 h-10 ${iconColor} rounded-md`}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <CardTitle className="mt-4 text-[#4A4D4B]">{title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 px-5 pb-5 rounded-md">
                        <CardDescription className="text-[#4A4D4B]/80">{description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};