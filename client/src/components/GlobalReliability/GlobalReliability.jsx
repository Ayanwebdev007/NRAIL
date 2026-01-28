import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import mapImage from '../../assets/global-map-final.png';

const GlobalReliability = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax & Effects
    const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacityMap = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative w-full py-48 overflow-hidden font-[Outfit] bg-[#050505] text-white">

            {/* --- ATMOSPHERE LAYERS --- */}

            {/* 1. Cinematic Noise / Film Grain */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* 2. Red Glows (Ambient) */}
            <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-red-900/20 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />

            {/* 3. Holographic Grid Floor */}
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-red-900/5 to-transparent pointer-events-none"
                style={{ transform: 'perspective(1000px) rotateX(60deg) translateY(100px)' }}>
                <div className="w-full h-full"
                    style={{ backgroundImage: 'linear-gradient(#ff0000 1px, transparent 1px), linear-gradient(90deg, #ff0000 1px, transparent 1px)', backgroundSize: '100px 100px', opacity: 0.1 }}
                />
            </div>

            {/* --- CONTENT --- */}
            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* LEFT COLUMN: Industrial Text */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2
                                className="font-bold mb-10 tracking-tighter"
                                style={{ fontSize: '8vw', lineHeight: 0.85 }}
                            >
                                <span style={{ color: '#ffffff' }}>GLOBAL</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900 filter drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                                    RELIABILITY
                                </span>
                            </h2>

                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light border-l border-red-900/30 pl-8 max-w-4xl">
                                NRAIL delivers premium grade paper and board solutions to customers across multiple continents, strengthening global market presence year after year.
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Holographic Map */}
                    <div className="lg:col-span-7 order-1 lg:order-2 relative perspective-[2000px]">
                        <motion.div
                            className="relative w-full aspect-[16/10] flex items-center justify-center transform-gpu"
                            style={{ opacity: opacityMap, rotateY: -10 }}
                        >
                            {/* Scanning Light Effect */}
                            <motion.div
                                className="absolute top-0 bottom-0 w-1 bg-red-500/50 shadow-[0_0_20px_rgba(255,0,0,0.8)] z-20"
                                animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />

                            {/* The Map - Brightened for Dark Mode */}
                            {/* We invert it or brightness boost to make the grey pop against black */}
                            <motion.img
                                src={mapImage}
                                alt="Holographic Map"
                                className="w-full h-full object-contain filter brightness-[2] contrast-[1.2] drop-shadow-[0_0_30px_rgba(255,0,0,0.2)]"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            />

                            {/* Digital Overlay / HUD Elements */}
                            <div className="absolute -left-[5%] -right-[5%] top-[6%] bottom-[6%] border border-red-500/10 rounded-3xl" />
                            <div className="absolute top-[6%] -left-[5%] w-6 h-6 border-t border-l border-red-500 rounded-tl-lg" />
                            <div className="absolute top-[6%] -right-[5%] w-6 h-6 border-t border-r border-red-500 rounded-tr-lg" />
                            <div className="absolute bottom-[6%] -left-[5%] w-6 h-6 border-b border-l border-red-500 rounded-bl-lg" />
                            <div className="absolute bottom-[6%] -right-[5%] w-6 h-6 border-b border-r border-red-500 rounded-br-lg" />

                        </motion.div>
                    </div>

                </div>

                {/* Massive Watermark - Layered Behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none mix-blend-color-dodge opacity-20 z-0">
                    <motion.div style={{ x: yText }} className="text-[20vw] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-transparent">
                        WORLDWIDE
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default GlobalReliability;
