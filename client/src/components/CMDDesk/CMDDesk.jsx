import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const CMDDesk = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, x: -50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 1, ease: "circOut" },
        },
    };

    const barVariants = {
        hidden: { scaleY: 0, originY: 0.5 },
        visible: {
            scaleY: 1,
            transition: { duration: 1.2, ease: "expoOut" },
        },
    };

    return (
        <section className="relative w-full bg-white min-h-[800px] py-12 lg:py-24 flex items-center overflow-hidden">
            <div className="container mx-auto px-4 relative">

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Side: Image with Decorative Bar */}
                    <motion.div
                        className="relative w-full lg:w-5/12 flex justify-center lg:justify-end items-center h-[500px] lg:h-[650px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                    >
                        {/* Decorative Red Bar */}
                        <motion.div
                            className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-12 w-48 lg:w-80 h-full bg-primary opacity-100 hidden lg:block"
                            variants={barVariants}
                        />

                        <motion.div
                            className="relative z-10 w-full max-w-[320px] lg:max-w-[400px] aspect-[4/5] shadow-2xl overflow-hidden rounded-sm"
                            variants={imageVariants}
                        >
                            {/* Inner Decorative Red Frame for Mobile */}
                            <div className="absolute inset-0 border-[12px] border-primary translate-x-4 translate-y-4 -z-10 lg:hidden" />

                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                                alt="CMD Harsh Pati Singhania"
                                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-7/12 relative">
                        <motion.div
                            className="relative"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.3, once: false }}
                        >
                            {/* Quote Icon Top */}
                            <motion.div variants={itemVariants}>
                                <Quote size={60} className="text-primary opacity-20 absolute -top-12 -left-8 lg:-left-16 rotate-180" fill="currentColor" />
                            </motion.div>

                            <div className="relative z-10">
                                <motion.h3
                                    className="text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed mb-8 italic"
                                    variants={itemVariants}
                                >
                                    The year gone by marks the beginning of a <span className="text-primary font-medium">new phase</span> for the company as NRAIL announced a new vision during the year. We are committed to excellence and sustainable growth.
                                </motion.h3>

                                <motion.div className="flex items-center gap-4 mb-2" variants={itemVariants}>
                                    <div className="w-12 h-[2px] bg-primary" />
                                    <h4 className="text-xl font-bold text-black uppercase tracking-wider">Harsh Pati Singhania</h4>
                                </motion.div>

                                <motion.p
                                    className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em] ml-16"
                                    variants={itemVariants}
                                >
                                    Chairman and Managing Director
                                </motion.p>
                            </div>

                            {/* Quote Icon Bottom */}
                            <motion.div className="flex justify-end mt-4" variants={itemVariants}>
                                <Quote size={60} className="text-primary opacity-20" fill="currentColor" />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CMDDesk;
