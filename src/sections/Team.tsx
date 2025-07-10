"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";

const teamMembers = [
    {
        name: "Yahya R. Makarim",
        role: "CEO & President",
        bio: "Visionary leader with 20+ years in construction materials innovation",
        image: "https://images.pexels.com/photos/3785084/pexels-photo-3785084.jpeg",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        name: "Zakir Hussain Rezai",
        role: "VueJS Developer",
        bio: "Tech innovator bridging construction and digital solutions",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    // Add more team members as needed
];

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100
        }
    },
    hover: {
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
        transition: { type: "spring", stiffness: 300 }
    }
};

export function TeamSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-stone-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm uppercase tracking-wider text-amber-600 font-medium mb-2">
                        The People Behind Our Strength
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Meet Our <span className="text-amber-500">Team</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto" />
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                        >
                            <div className="h-64 w-full relative overflow-hidden">
                                <motion.img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 1.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                            </div>

                            <div className="p-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-amber-600 font-medium mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        {member.bio}
                                    </p>
                                </div>

                                <div className="flex space-x-4">
                                    <motion.a
                                        href={member.social.facebook}
                                        whileHover={{ y: -2 }}
                                        className="text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        href={member.social.twitter}
                                        whileHover={{ y: -2 }}
                                        className="text-gray-500 hover:text-blue-400 transition-colors"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        href={member.social.instagram}
                                        whileHover={{ y: -2 }}
                                        className="text-gray-500 hover:text-pink-600 transition-colors"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Our team of 150+ professionals brings together decades of experience in construction,
                        materials science, and customer service to deliver exceptional results.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                    >
                        View All Team Members
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}