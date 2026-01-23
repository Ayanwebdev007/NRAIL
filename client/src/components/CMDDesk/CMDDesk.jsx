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
                            className="relative z-10 w-full max-w-[320px] lg:max-w-[400px] aspect-[3/4] shadow-2xl overflow-hidden rounded-sm"
                            variants={imageVariants}
                        >
                            {/* Inner Decorative Red Frame for Mobile */}
                            <div className="absolute inset-0 border-[12px] border-primary translate-x-4 translate-y-4 -z-10 lg:hidden" />

                            <img
                                src="/cmd_image.jpg"
                                alt="CMD Mr R N Agarwal"
                                className="w-full h-full object-cover object-bottom grayscale-[10%] hover:grayscale-0 transition-all duration-700"
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
                                <motion.div
                                    className="text-base lg:text-lg text-gray-700 leading-relaxed font-light text-justify"
                                    variants={itemVariants}
                                >
                                    <p className="mb-0">
                                        <span className="text-primary font-bold italic text-xl lg:text-2xl block mb-2 leading-tight">
                                            Every transformative step we take today becomes the foundation for India’s next era of paper excellence.
                                        </span>
                                        We stand at a powerful threshold of progress — a milestone that showcases our united ambition as we approach the commissioning of our packaging board capacity expansion in next 2 years. This development signals a pivotal chapter for N R Agarwal, bringing fresh momentum and transformative potential. With Unit VI rising as the largest machine of its class in India, we are turning bold vision into action through precision engineering, responsible innovation, and next-generation manufacturing. This investment delivers lasting value while strengthening our resolve to lead with insight, integrity, and bold conviction. As we move steadily toward our aspiration of being among the nation’s top three paper producers, I extend my deepest appreciation for your trust and partnership. Let us step forward together, shaping a future defined by growth, impact, and endless possibility for N R Agarwal.
                                    </p>
                                </motion.div>

                                <motion.div className="flex items-center gap-4 mb-2" variants={itemVariants}>
                                    <div className="w-12 h-[2px] bg-primary" />
                                    <h4 className="text-xl font-bold text-black uppercase tracking-wider">Mr. R N Agarwal</h4>
                                </motion.div>

                                <motion.p
                                    className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em] ml-16"
                                    variants={itemVariants}
                                >
                                    Chairman & Managing Director
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
