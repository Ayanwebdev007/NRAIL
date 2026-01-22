import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const products = [
    {
        id: 'fbb',
        name: 'FBB / SBS (Premium Boards)',
        images: [
            { id: 101, src: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=800', title: 'Premium Board Elite', desc: 'Superior industrial quality' },
            { id: 102, src: 'https://images.unsplash.com/photo-1603484477859-ce6bd000d3f9?auto=format&fit=crop&q=80&w=800', title: 'SBS Ultra White', desc: 'Pure pulp premium surface' },
            { id: 103, src: 'https://images.unsplash.com/photo-1598048147117-c6f33626f1ad?auto=format&fit=crop&q=80&w=800', title: 'Gloss Showcase', desc: 'Ideal for luxury cosmetics' },
            { id: 104, src: 'https://images.unsplash.com/photo-1517646287270-a5a698a26244?auto=format&fit=crop&q=80&w=800', title: 'High-Bulk Ivory', desc: 'Premium stiffness & density' },
            { id: 105, src: 'https://images.unsplash.com/photo-1589366531454-fa290b3aaee5?auto=format&fit=crop&q=80&w=800', title: 'Food Grade Pro', desc: 'Sustainable food packaging' },
        ]
    },
    {
        id: 'duplex',
        name: 'Duplex Boards',
        images: [
            { id: 201, src: 'https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&q=80&w=800', title: 'Grey Back Industrial', desc: 'Sturdy packaging core' },
            { id: 202, src: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800', title: 'White Back Premium', desc: 'Bright exterior coating' },
            { id: 203, src: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800', title: 'Eco-Kraft Board', desc: '100% recycled fibers' },
            { id: 204, src: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&q=80&w=800', title: 'Recycled Series', desc: 'Eco-conscious shipping' },
            { id: 205, src: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800', title: 'Industrial Texture', desc: 'Heavy-duty performance' },
        ]
    },
    {
        id: 'writing',
        name: 'Writing & Printing Paper',
        images: [
            { id: 301, src: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80&w=800', title: 'Architect White', desc: 'Precision offset printing' },
            { id: 302, src: 'https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&q=80&w=800', title: 'Premium Maplitho', desc: 'High-opacity smooth finish' },
            { id: 303, src: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=800', title: 'Classic Cream Paper', desc: 'Elegant tactile feel' },
            { id: 304, src: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&q=80&w=800', title: 'High-Quality Stack', desc: 'Consistent weight and color' },
            { id: 305, src: 'https://images.unsplash.com/photo-1612115502120-e7f2258d4a67?auto=format&fit=crop&q=80&w=800', title: 'Fine Grain Surface', desc: 'Superior ink absorption' },
        ]
    },
    {
        id: 'copier',
        name: 'Copier Paper',
        images: [
            { id: 401, src: 'https://images.unsplash.com/photo-1512418490979-92798ccc13b0?auto=format&fit=crop&q=80&w=800', title: 'EcoCopy Daily', desc: 'High-speed jam-free paper' },
            { id: 402, src: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&q=80&w=800', title: 'Office Pro Suite', desc: 'Vibrant color reproduction' },
            { id: 403, src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800', title: 'Master Bright 80GSM', desc: 'Premium white copier series' },
            { id: 404, src: 'https://images.unsplash.com/photo-1616628188859-e15a8c484378?auto=format&fit=crop&q=80&w=800', title: 'Packaged Precision', desc: 'Optimal moisture control' },
            { id: 405, src: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=800', title: 'Workspace Essential', desc: 'Reliable office performance' },
        ]
    },
];

const ProductQuickAccess = () => {
    const [activeTab, setActiveTab] = useState(products[0].id);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    // Parallax Logic
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacityParallax = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0]);

    // Get active product data
    const activeProduct = products.find(p => p.id === activeTab);
    const images = activeProduct?.images || [];

    // Reset index when tab changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [activeTab]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const getSlideStyles = (index) => {
        // Calculate minimal distance in a circular array
        let diff = (index - currentIndex + images.length) % images.length;
        if (diff > images.length / 2) diff -= images.length;

        const isActive = diff === 0;
        const isPrev = diff === -1;
        const isNext = diff === 1;
        const isPrev2 = diff === -2;
        const isNext2 = diff === 2;

        let x = '0%';
        let scale = 1;
        let opacity = 0;
        let zIndex = 0;
        let brightness = 1;
        let grayscale = 0;

        if (isActive) {
            scale = 1.05;
            opacity = 1;
            zIndex = 20;
            x = '0%';
            brightness = 1;
        } else if (isPrev) {
            scale = 0.9;
            opacity = 0.8;
            zIndex = 10;
            x = '-85%'; // Closer grouping
            brightness = 0.7;
        } else if (isNext) {
            scale = 0.9;
            opacity = 0.8;
            zIndex = 10;
            x = '85%'; // Closer grouping
            brightness = 0.7;
        } else if (isPrev2) {
            scale = 0.8;
            opacity = 0.4;
            zIndex = 5;
            x = '-155%';
            brightness = 0.5;
        } else if (isNext2) {
            scale = 0.8;
            opacity = 0.4;
            zIndex = 5;
            x = '155%';
            brightness = 0.5;
        } else {
            opacity = 0;
            zIndex = 0;
            x = diff < 0 ? '-250%' : '250%';
        }

        return { x, scale, opacity, zIndex, brightness, grayscale, isActive };
    };

    return (
        <section
            className="relative w-full bg-[#f8f9fa] overflow-hidden pb-24 font-[Outfit]"
            style={{ paddingTop: '10vh' }}
        >

            {/* Parallax Background Typography */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 select-none overflow-hidden">
                <motion.h1
                    style={{ y: yParallax, opacity: opacityParallax }}
                    className="text-[12vw] leading-none font-black text-gray-200 tracking-tighter uppercase whitespace-nowrap opacity-40"
                >
                    Portfolio
                </motion.h1>
            </div>

            <div className="max-w-[1920px] mx-auto relative z-10 flex flex-col items-center mt-10">

                {/* Header Section */}
                <div className="text-center mb-12 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="text-black mb-10 uppercase"
                        style={{
                            fontSize: '28px',
                            fontWeight: 800,
                            letterSpacing: '-0.5px',
                            lineHeight: 1.1
                        }}
                    >
                        Product Quick-Access Tiles
                    </motion.h2>

                    {/* Magnetic Navigation - Compact */}
                    <div className="relative z-30 px-4">
                        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full flex flex-wrap justify-center gap-6 md:gap-10">
                            {products.map((product) => (
                                <button
                                    key={product.id}
                                    onClick={() => setActiveTab(product.id)}
                                    style={{ padding: '12px 40px' }} // Force padding
                                    className={`
                                        relative rounded-full text-[11px] md:text-sm font-bold uppercase tracking-wide transition-all duration-300
                                        ${activeTab === product.id ? 'text-white' : 'text-black'}
                                    `}
                                >
                                    {activeTab === product.id && (
                                        <motion.div
                                            layoutId="pill"
                                            className="absolute inset-0 bg-red-700 rounded-full shadow-lg"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10 whitespace-nowrap">{product.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 'Product Showcase' Text - Accent */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[#8b0000] font-bold uppercase tracking-[0.25em]"
                        style={{ fontSize: '18px', marginBottom: '20px', marginTop: '48px' }} // Reduced gap significantly
                    >
                        Product Showcase
                    </motion.p>

                </div>

                {/* Cinematic Slider Stage - Reduced Height */}
                <motion.div
                    className="relative w-full max-w-[1200px] h-[500px] flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
                >

                    {/* Navigation Buttons - Smaller & Closer */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-black hover:scale-110 transition-all duration-300 group border border-gray-100"
                    >
                        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-black hover:scale-110 transition-all duration-300 group border border-gray-100"
                    >
                        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {/* Cards Container */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[2000px]">
                        <AnimatePresence initial={false} mode="popLayout">
                            {images.map((img, index) => {
                                const styles = getSlideStyles(index);
                                if (styles.opacity === 0 && !styles.isActive) return null;

                                return (
                                    <motion.div
                                        key={`${activeTab}-${img.id}`}
                                        className="absolute top-1/2 left-1/2 w-[260px] h-[360px] md:w-[320px] md:h-[450px] bg-white shadow-2xl overflow-hidden origin-center" // SIGNIFICANTLY SMALLER
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            x: `calc(-50% + ${styles.x})`,
                                            y: '-50%',
                                            scale: styles.scale,
                                            opacity: styles.opacity,
                                            zIndex: styles.zIndex,
                                            filter: `brightness(${styles.brightness}) grayscale(${styles.grayscale})`
                                        }}
                                        transition={{
                                            duration: 1.0, // Increased for smoothness
                                            ease: [0.16, 1, 0.3, 1] // More relaxed "Industrial" ease
                                        }}
                                    >
                                        {/* Image */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                                            style={{ backgroundImage: `url(${img.src})` }}
                                        />

                                        {/* Cinematic Dark Gradient - Lighter */}
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70`} />

                                        {/* Product Info - Only for Active */}
                                        <motion.div
                                            className="absolute bottom-2 left-2 right-2 p-8 text-white"
                                            animate={{ opacity: styles.isActive ? 1 : 0 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                        >
                                            <div className="flex flex-col gap-2">
                                                <div className="w-8 h-0.5 bg-red-600"></div>
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-none mb-1">{img.title}</h3>
                                                    <p className="text-gray-300 text-xs font-medium tracking-widest uppercase">{img.desc || 'Premium'}</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Interactive 'Explore' Overlay Button */}
                                        <div className={`absolute top-4 right-4 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ${styles.isActive ? 'opacity-100' : 'opacity-0'}`}>
                                            <ArrowUpRight className="text-white" size={14} />
                                        </div>

                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default ProductQuickAccess;
