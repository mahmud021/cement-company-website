"use client"

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

export const AboutSection = () => {
  const items = [
    {
      title: "Our Mission",
      description:
          "To provide high-quality cement products that form the foundation for durable, sustainable infrastructure worldwide.",
      icon: Construction,
      color: "bg-amber-100",
      iconColor: "text-amber-600",
      rotate: -3,
    },
    {
      title: "Our Vision",
      description:
          "To be the most trusted cement manufacturer, innovating for a greener construction future.",
      icon: Globe,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      rotate: 2,
    },
    {
      title: "Our Values",
      description:
          "Quality, integrity, innovation, and environmental responsibility guide every decision we make.",
      icon: ShieldCheck,
      color: "bg-green-100",
      iconColor: "text-green-600",
      rotate: 4,
    },
    {
      title: "Sustainability",
      description:
          "Reducing our carbon footprint by 25% by 2030 through innovative production methods.",
      icon: Leaf,
      color: "bg-emerald-100",
      iconColor: "text-emerald-600",
      rotate: -2,
    },
  ];

  return (
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Side - Cards */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Building the Future
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map(({ title, description, icon: Icon, color, iconColor, rotate }, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30, rotate: rotate - 4 }}
                        whileInView={{ opacity: 1, y: 0, rotate }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                      <Card className="h-full hover:rotate-0 transition-transform duration-300 transform shadow-md hover:shadow-lg">
                        <CardHeader>
                          <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.2 + 0.1, duration: 0.4 }}
                              className={`${color} p-3 rounded-full w-fit mb-4`}
                          >
                            <Icon className={`${iconColor} w-6 h-6`} />
                          </motion.div>
                          <CardTitle>{title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{description}</CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/5]"
              >
                <img
                    src="/images/cement-factory.jpg"
                    alt="Our modern cement production facility"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Since 1985</h3>
                  <p className="text-gray-200">
                    Delivering construction excellence for nearly four decades
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
};
