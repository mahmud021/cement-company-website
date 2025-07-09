"use client";

import { motion } from "framer-motion";

interface FeatureCard {
    title: string;
    description: string;
    image: string;
}

const features: FeatureCard[] = [
    {
        title: "Reliable Delivery",
        description:
            "We guarantee timely delivery to keep your projects on schedule. Count on us to be where you need us, when you need us.",
        image:
            "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Quality Assurance",
        description:
            "Our materials meet the highest industry standards. We source only certified components to ensure lasting results.",
        image:
            "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "High-Quality Mix",
        description:
            "Get the best value for your investment. Our mix is engineered for strength, durability, and sustainability.",
        image:
            "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=800&auto=format&fit=crop",
    },
];

export const WhyWeStandOutSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                    Why We Stand Out
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl bg-gradient-to-br  p-[2px]"
                            style={{
                            }}
                        >
                            <div className="flex flex-col gap-4 h-full bg-white p-5 rounded-2xl shadow-sm">
                                {/* Image Cover */}
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full aspect-[16/9] object-cover rounded-xl"
                                    />
                                </div>

                                {/* Content */}
                                <div className="grow">
                                    <h3 className="text-xl font-extrabold mb-2 text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
