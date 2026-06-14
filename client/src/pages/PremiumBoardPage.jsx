import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, FileText, Layout, Shield, Target, Award, ArrowRight, ChevronLeft, Trees, ShieldCheck, Layers, Zap, Printer, Feather } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import logo from '../assets/logo.webp';
import heroImg from '../assets/Premium Board Grades Header.webp';
import fbb1 from '../assets/fbb pic 1.webp';
import fbb2 from '../assets/fbb pic 2.webp';
import fbb3 from '../assets/FBB pic 4.webp';
import nrPowerCoatPdf from '../assets/NR Power Coat Specs_.pdf';
import nrPowerPacPdf from '../assets/NR Power Pac Specs_.pdf';
import nrPearlCoatPdf from '../assets/NR Pearl Coat Specs_.pdf';
import nrPearlPacPdf from '../assets/NR Pearl Pac Specs_.pdf';
import pearl1 from '../assets/sbs.webp';
import pearl2 from '../assets/DSC06215 copy.webp';
import pearl3 from '../assets/sbs 3.webp';
import industryCosmetics from '../assets/Cosmetics.webp';
import industryElectronicsNew from '../assets/Electronics.webp';
import industryFoodNew from '../assets/Food & Confectionary.webp';
import industryGarmentsNew from '../assets/Garments.webp';
import industryLiquorNew from '../assets/Liquor Cartons.webp';
import industryPharmaNew from '../assets/Pharmaceuticals.webp';
import industryTeaNew from '../assets/Tea-Packaging-1.webp';
import { X, Download, Phone } from 'lucide-react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';



const NRPowerSection = () => {
    const [swiper, setSwiper] = useState(null);

    return (
        <section className="relative w-full h-[600px] flex items-center overflow-hidden group pb-slider-mobile">
            <style>
                {`
                .nr-power-nav-btn {
                    color: rgba(255, 255, 255, 0.9) !important;
                    background: rgba(0, 0, 0, 0.2);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border: none;
                    outline: none;
                    opacity: 0;
                }
                .group:hover .nr-power-nav-btn {
                    opacity: 1;
                }
                .nr-power-nav-btn:hover {
                    background: rgba(139, 0, 0, 0.8);
                    color: white !important;
                    transform: scale(1.1);
                }
                .nr-power-nav-btn svg {
                    width: 20px;
                    height: 20px;
                }
                `}
            </style>
            {/* Background Slider */}
            <div className="absolute inset-0 pb-slider-bg-mobile">
                <Swiper
                    modules={[Autoplay, EffectFade, Navigation]}
                    onSwiper={setSwiper}
                    effect="fade"
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="h-full w-full"
                >
                    <SwiperSlide>
                        <div 
                            className="w-full h-full bg-cover bg-center" 
                            style={{ backgroundImage: `url(${fbb1})` }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                            className="w-full h-full bg-cover bg-center" 
                            style={{ backgroundImage: `url(${fbb2})` }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                            className="w-full h-full bg-cover bg-center" 
                            style={{ backgroundImage: `url(${fbb3})` }}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Blurry Gradient Overlay - 0% blur at top edge, smoothly increasing to full blur at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-[45%] z-[1] pointer-events-none pb-slider-overlay-mobile" style={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 85%, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 85%, black 100%)' }}></div>
            {/* Dark tint at bottom for text legibility on bright images */}
            <div className="absolute inset-x-0 bottom-0 h-[30%] z-[2] pointer-events-none pb-slider-overlay-mobile" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' }}></div>

            {/* Content at Bottom - Full Width */}
            <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none pb-slider-text-container-mobile" style={{ padding: '0 60px 40px 60px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full pointer-events-auto"
                >
                    <h2 className="font-['Outfit'] font-bold tracking-wide pb-slider-title-mobile" style={{ fontSize: '26px', margin: 0, padding: 0, lineHeight: '1.2', fontWeight: 700, color: '#ffffff', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                        NR Power Pac / NR Power Coat
                    </h2>
                    <p className="font-['Outfit'] font-light pb-slider-text-mobile" style={{ fontSize: '21px', lineHeight: '1.6', marginTop: '8px', maxWidth: '1200px', color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
                        Deliver bright, refined, and high-impact packaging solutions engineered for luxury brands, beauty, and personal care segments where visual excellence meets structural strength.
                    </p>
                </motion.div>
            </div>

            {/* Custom Navigation Arrows */}
            <button 
                onClick={() => swiper?.slidePrev()}
                className="nr-power-prev nr-power-nav-btn absolute left-8 top-1/2 -translate-y-1/2 z-[60]"
            >
                <ChevronLeft />
            </button>
            <button 
                onClick={() => swiper?.slideNext()}
                className="nr-power-next nr-power-nav-btn absolute right-8 top-1/2 -translate-y-1/2 z-[60]"
            >
                <ChevronRight />
            </button>
        </section>
    );
};

const NRPearlSection = () => {
    const [swiper, setSwiper] = useState(null);

    return (
        <section className="relative w-full h-[600px] flex items-center overflow-hidden group pb-slider-mobile">
            <style>
                {`
                .nr-pearl-nav-btn {
                    color: rgba(255, 255, 255, 0.9) !important;
                    background: rgba(0, 0, 0, 0.2);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border: none;
                    outline: none;
                    opacity: 0;
                }
                .group:hover .nr-pearl-nav-btn {
                    opacity: 1;
                }
                .nr-pearl-nav-btn:hover {
                    background: rgba(139, 0, 0, 0.8);
                    color: white !important;
                    transform: scale(1.1);
                }
                `}
            </style>
            
            <div className="absolute inset-0 pb-slider-bg-mobile">
                <Swiper
                    modules={[Autoplay, EffectFade, Navigation]}
                    effect="fade"
                    speed={1500}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full h-full"
                    onSwiper={setSwiper}
                >
                    {[pearl1, pearl2, pearl3].map((img, index) => (
                        <SwiperSlide key={index}>
                            <div 
                                className="w-full h-full bg-cover transition-transform duration-[10000ms] scale-110 group-hover:scale-100"
                                style={{ 
                                    backgroundImage: `url("${img}")`, 
                                    backgroundColor: '#ffffff',
                                    backgroundPosition: index === 2 ? 'top' : 'center'
                                }}
                            >
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Blurry Gradient Overlay - 0% blur at top edge, smoothly increasing to full blur at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-[45%] z-[1] pointer-events-none pb-slider-overlay-mobile" style={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 85%, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 85%, black 100%)' }}></div>
            {/* Dark tint at bottom for text legibility on bright images */}
            <div className="absolute inset-x-0 bottom-0 h-[30%] z-[2] pointer-events-none pb-slider-overlay-mobile" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' }}></div>

            {/* Content at Bottom - Full Width */}
            <div className="absolute inset-x-0 bottom-0 z-50 pointer-events-none pb-slider-text-container-mobile" style={{ padding: '0 60px 40px 60px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full pointer-events-auto"
                >
                    <h2 className="font-['Outfit'] font-bold tracking-wide pb-slider-title-mobile" style={{ fontSize: '26px', margin: 0, padding: 0, lineHeight: '1.2', fontWeight: 700, color: '#ffffff', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                        NR Pearl Pac / NR Pearl Coat
                    </h2>
                    <p className="font-['Outfit'] font-light pb-slider-text-mobile" style={{ fontSize: '21px', lineHeight: '1.6', marginTop: '8px', maxWidth: '1200px', color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
                        Premium solid bleached boards designed for superior surface elegance, high brightness, and exceptional print clarity—ideal for cosmetics, pharmaceuticals, food, and specialty packaging that demands sophistication and strength.
                    </p>
                </motion.div>
            </div>

            {/* Custom Navigation Arrows */}
            <button 
                onClick={() => swiper?.slidePrev()}
                className="nr-pearl-prev nr-pearl-nav-btn absolute left-8 top-1/2 -translate-y-1/2 z-[60]"
            >
                <ChevronLeft />
            </button>
            <button 
                onClick={() => swiper?.slideNext()}
                className="nr-pearl-next nr-pearl-nav-btn absolute right-8 top-1/2 -translate-y-1/2 z-[60]"
            >
                <ChevronRight />
            </button>
        </section>
    );
};

const IndustriesSection = () => {
    const swiperRef = useRef(null);

    const industries = [
        { name: "FMCG", img: industryTeaNew },
        { name: "Pharmaceuticals", img: industryPharmaNew },
        { name: "Food & Confectionary", img: industryFoodNew },
        { name: "Garment Packaging", img: industryGarmentsNew },
        { name: "Small Electronics Appliances", img: industryElectronicsNew },
        { name: "Liquor Cartons", img: industryLiquorNew },
        { name: "Beauty & Personal Care", img: industryCosmetics },
        // Double for smooth loop
        { name: "FMCG", img: industryTeaNew },
        { name: "Pharmaceuticals", img: industryPharmaNew },
        { name: "Food & Confectionary", img: industryFoodNew },
        { name: "Garment Packaging", img: industryGarmentsNew },
        { name: "Small Electronics Appliances", img: industryElectronicsNew },
        { name: "Liquor Cartons", img: industryLiquorNew },
        { name: "Beauty & Personal Care", img: industryCosmetics }
    ];

    return (
        <section 
            className="bg-white relative overflow-hidden group/industries flex flex-col items-center"
            style={{ paddingTop: '40px', paddingBottom: '80px' }}
        >
            {/* Subtle Pinstripe Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #8b0000 0px, #8b0000 1px, transparent 1px, transparent 10px)' }}></div>

            <div 
                className="container mx-auto px-6 md:px-12 lg:px-24 text-center relative z-10"
                style={{ marginBottom: '60px', marginTop: '20px' }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-center gap-4 w-full"
                >
                    <span className="h-[5px] w-16 md:w-32 bg-[#8b0000]"></span>
                    <h4 className="font-['Outfit'] text-black font-extrabold tracking-tight uppercase leading-none" style={{ fontSize: '26px' }}>INDUSTRIES</h4>
                    <span className="h-[5px] w-16 md:w-32 bg-[#8b0000]"></span>
                </motion.div>
            </div>
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 relative overflow-visible flex justify-center">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Autoplay, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    observer={true}
                    observeParents={true}
                    grabCursor={true}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="industries-swiper !pb-20 w-full"
                >
                    {industries.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full">
                                <div className="relative h-[420px] overflow-hidden group cursor-pointer border border-gray-100 bg-white">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                        style={{ backgroundImage: `url("${item.img}")` }}
                                    />
                                  <div className="absolute inset-0 h-full bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
                                
                                <div className="absolute inset-x-0 bottom-12 p-6 text-center z-10">
                                    <h3 className="font-['Outfit'] text-white text-xl font-light tracking-[0.2em] leading-tight group-hover:translate-y-[-5px] transition-transform duration-500 uppercase">
                                            {item.name}
                                        </h3>
                                        <div className="w-12 h-[1px] bg-[#8b0000] mx-auto mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Arrows */}
                <button 
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-[-20px] lg:left-[-40px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-[#8b0000] text-white rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 opacity-0 group-hover/industries:opacity-100 industries-nav-btn"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-[-20px] lg:right-[-40px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-[#8b0000] text-white rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 opacity-0 group-hover/industries:opacity-100 industries-nav-btn"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};

const ProductSpecsSection = ({ specs }) => {
    const [selectedPdf, setSelectedPdf] = useState(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <section 
            className="relative bg-black overflow-hidden pb-specs-mobile" 
            style={{ paddingTop: '160px', paddingBottom: '160px' }}
            onMouseMove={handleMouseMove}
        >
            <style>
                {`
                @keyframes mesh-pulse {
                    0% { transform: translate(-10%, -10%) scale(1); opacity: 0.3; }
                    50% { transform: translate(5%, 5%) scale(1.1); opacity: 0.5; }
                    100% { transform: translate(-10%, -10%) scale(1); opacity: 0.3; }
                }
                @keyframes sweep {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .mesh-gradient {
                    background: radial-gradient(circle at 20% 30%, #1a0000 0%, transparent 40%),
                                radial-gradient(circle at 80% 70%, #0a0000 0%, transparent 40%),
                                radial-gradient(circle at 50% 50%, #100000 0%, transparent 60%);
                    filter: blur(80px);
                    animation: mesh-pulse 15s ease-in-out infinite;
                }
                `}
            </style>

            {/* Dynamic Mesh Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 mesh-gradient opacity-60"></div>
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Interactive Mouse Glow */}
            <motion.div 
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(139, 0, 0, 0.15),
                            transparent 80%
                        )
                    `
                }}
            />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {specs.map((spec, index) => (
                        <motion.div
                            key={spec.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative overflow-hidden border border-white/5 p-10 lg:p-14 group transition-all duration-500 hover:border-[#8b0000]/30 hover:shadow-[0_0_50px_rgba(139,0,0,0.1)]"
                            style={{ minHeight: '380px', backgroundColor: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(10px)' }}
                        >
                            {/* Watermark Logo Only */}
                            <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center transition-transform duration-1000 group-hover:scale-110">
                                <img 
                                    src={logo} 
                                    alt="NRAIL Watermark" 
                                    className="w-56 opacity-[0.14] group-hover:opacity-[0.25] transition-opacity duration-700 object-contain" 
                                />
                            </div>

                            {/* Card Content */}
                            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                                <motion.span 
                                    className="text-[10px] uppercase tracking-[0.4em] text-[#8b0000] font-bold mb-4"
                                >
                                    Technical Specification
                                </motion.span>
                                
                                <h3 
                                    className="font-['Outfit'] text-2xl lg:text-[32px] font-light text-gray-900 uppercase tracking-widest leading-tight"
                                    style={{ marginBottom: '16px' }}
                                >
                                    {spec.title}
                                </h3>

                                <div 
                                    className="w-16 h-[2px] bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:w-28 group-hover:bg-[#8b0000] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                                    style={{ marginBottom: '24px' }}
                                ></div>

                                <button 
                                    onClick={() => setSelectedPdf({ url: spec.pdf, title: spec.title })}
                                    className="group/btn relative h-[40px] w-[180px] bg-white border-2 border-[#8b0000] rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center overflow-hidden hover:bg-[#8b0000] hover:scale-105"
                                >
                                    <span className="relative z-10 text-[#8b0000] group-hover/btn:text-white font-bold text-[12px] uppercase tracking-[0.2em] transition-colors duration-500">
                                        View Details
                                    </span>
                                </button>
                            </div>

                            {/* Ambient Glow Corner */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8b0000]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* PDF Preview Modal - Ultra Minimalist Redesign */}
            <AnimatePresence>
                {selectedPdf && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 md:p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPdf(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="relative w-full max-w-[1100px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[90vh]"
                        >
                            {/* PDF Viewer Area */}
                            <div className="flex-grow bg-gray-50 relative h-full">
                                <iframe 
                                    src={`${selectedPdf.url}#toolbar=0`} 
                                    className="w-full h-full border-none"
                                    title="PDF Preview"
                                />
                                <button 
                                    onClick={() => setSelectedPdf(null)}
                                    className="absolute top-4 left-4 w-10 h-10 bg-white/80 hover:bg-white text-black rounded-full shadow-lg flex items-center justify-center transition-all backdrop-blur-md md:hidden"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Sidebar - Clean Minimalist */}
                            <div className="w-full md:w-[320px] bg-white p-8 flex flex-col items-center justify-center relative border-l border-gray-100">
                                <button 
                                    onClick={() => setSelectedPdf(null)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div className="text-center w-full space-y-10 flex flex-col items-center">
                                    <div className="opacity-100">
                                        <img src={logo} alt="brand" className="w-24 h-24 object-contain" />
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-['Outfit'] font-light text-gray-900 uppercase tracking-widest px-4">
                                            {selectedPdf.title}
                                        </h3>
                                    </div>

                                    <div className="w-12 h-[1px] bg-gray-200 mx-auto"></div>

                                    <div className="space-y-3 w-full flex flex-col items-center">
                                        <div className="w-full max-w-[300px] flex flex-col gap-4">
                                            <a 
                                                href={selectedPdf.url} 
                                                download 
                                                className="w-full h-[44px] border border-gray-900 text-gray-900 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
                                            >
                                                <Download size={16} />
                                                <span className="font-bold text-[10px] uppercase tracking-[0.1em]">Download PDF</span>
                                            </a>

                                            <a 
                                                href="tel:+912267317500"
                                                className="w-full h-[44px] bg-[#8b0000] text-white rounded-full flex items-center justify-center gap-2 hover:bg-[#a30000] transition-all duration-300"
                                            >
                                                <Phone size={16} className="text-white" />
                                                <span className="font-bold text-[10px] uppercase tracking-[0.1em] text-white">Enquiry: +91 (22) 67317500</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

const PremiumBoardPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Prefetch PDFs for instant loading
        const pdfs = [nrPowerCoatPdf, nrPowerPacPdf, nrPearlCoatPdf, nrPearlPacPdf];
        pdfs.forEach(pdf => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = pdf;
            document.head.appendChild(link);
        });
    }, [location]);

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />
            <style>{`
                @media (max-width: 1023px) {
                    .pb-hero-mobile {
                        height: auto !important;
                        aspect-ratio: 16 / 9 !important;
                        min-height: unset !important;
                        margin-top: 70px !important;
                    }
                    .pb-hero-title-mobile { font-size: 18px !important; line-height: 1.2 !important; }
                    .pb-hero-text-container-mobile { bottom: 16px !important; }
                    
                    .pb-breadcrumb-mobile { padding-top: 16px !important; }
                    .pb-breadcrumb-flex-mobile { flex-wrap: wrap !important; font-size: 14px !important; }
                    
                    .pb-slider-mobile { height: auto !important; display: flex !important; flex-direction: column !important; }
                    .pb-slider-bg-mobile { position: relative !important; height: 300px !important; width: 100% !important; }
                    .pb-slider-text-container-mobile { position: relative !important; padding: 40px 24px !important; background: #0a0a0a !important; }
                    .pb-slider-overlay-mobile { display: none !important; }
                    .pb-slider-text-mobile { font-size: 16px !important; line-height: 1.4 !important; }
                    .pb-slider-title-mobile { font-size: 24px !important; }
                    
                    .pb-specs-mobile { padding-top: 60px !important; padding-bottom: 60px !important; }
                    
                    .nr-power-nav-btn, .nr-pearl-nav-btn, .industries-nav-btn { display: none !important; }
                }
            `}</style>

            {/* Hero Section */}
            <div className="relative w-full h-[95vh] pb-hero-mobile">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${heroImg}")` }}
                >
                    {/* Overlay gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                {/* Hero Text */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center w-full px-4 pb-hero-text-container-mobile">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="font-[Outfit] pb-hero-title-mobile"
                        style={{
                            fontSize: '48px',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: '0.02em',
                            color: '#ffffff'
                        }}
                    >
                        <span className="font-bold">Paper that</span> <span className="font-bold text-[#f8f9fa]">Powers Tomorrow</span>
                    </motion.h1>
                </div>
            </div>

            {/* Breadcrumbs Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-12 pb-breadcrumb-mobile">
                <div className="flex items-center text-sm md:text-lg text-gray-500 font-normal pb-breadcrumb-flex-mobile">
                    <Link to="/" className="hover:text-[#8b0000] transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                    <span className="text-gray-500">Products</span>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                    <span className="text-[#8b0000] font-medium">Premium Board Grades</span>
                </div>
            </div>

            {/* SPACER - Explicitly adding height here */}
            <div style={{ height: '60px' }}></div>

            {/* Descriptive Section */}
            <section className="pb-32 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="max-w-6xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-['Outfit'] !mb-0 leading-tight"
                            style={{ 
                                fontSize: 'clamp(26px, 3.2vw, 34px)', 
                                fontWeight: 300,
                                color: '#1a1a1a'
                            }}
                        >
                            <span className="text-[#8b0000] font-light">Sustainability Meets Strength</span> with NRAIL's Packaging Board Solutions
                        </motion.h2>
                        
                        <div className="flex flex-col">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify font-light !mt-4"
                            >
                                As global markets transition toward sustainable materials, paperboard has become a preferred packaging medium for brands seeking responsible alternatives. At NRAIL, we engineer advanced paperboard solutions that balance structural integrity, visual appeal, and environmental stewardship. Our high-quality boards, including virgin-grade offerings, are crafted to provide enhanced bulk, stiffness, and surface durability, ensuring reliable protection and superior print outcomes. Designed with recyclability and biodegradability in mind, these products contribute to circular packaging ecosystems. By combining performance excellence with climate-conscious manufacturing, NRAIL supports industries in building packaging that is both impactful and responsible.
                            </motion.p>
                        </div>

                        {/* SPACER for GAP */}
                        <div style={{ height: '60px' }}></div>                        {/* Features Icons Section - Organized in 2 rows (3 top, 2 bottom) */}
                        <div className="flex flex-col gap-y-16 mt-16">
                            {/* Row 1: First 3 items */}
                            <div className="flex flex-wrap justify-center gap-x-12 lg:gap-x-24 gap-y-12">
                                {[
                                    { icon: <Target size={80} strokeWidth={1} color="#8b0000" />, title: "Consistency" },
                                    { icon: <Shield size={80} strokeWidth={1} color="#8b0000" />, title: "Durability" },
                                    { icon: <Feather size={80} strokeWidth={1} color="#8b0000" />, title: "Smooth Surface" }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col items-center text-center w-full md:w-auto md:min-w-[200px]"
                                    >
                                        <div className="mb-4">
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900 leading-tight whitespace-nowrap px-2">
                                            {feature.title}
                                        </h4>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Row 2: Remaining 2 items */}
                            <div className="flex flex-wrap justify-center gap-x-12 lg:gap-x-24 gap-y-12">
                                {[
                                    { icon: <Printer size={80} strokeWidth={1} color="#8b0000" />, title: "Superior Print Quality" },
                                    { icon: <Layers size={80} strokeWidth={1} color="#8b0000" />, title: "Superior Foldability" }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index + 3}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (index + 3) * 0.1 }}
                                        className="flex flex-col items-center text-center w-full md:w-auto md:min-w-[200px]"
                                    >
                                        <div className="mb-4">
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900 leading-tight whitespace-nowrap px-2">
                                            {feature.title}
                                        </h4>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPACER for GAP */}
            <div style={{ height: '60px' }}></div>

            {/* NR Power Section */}
            <NRPowerSection />

            {/* Product Specifications Section - Power Range */}
            <ProductSpecsSection specs={[
                { 
                    id: "power-pac-spec",
                    title: "NR POWER PAC", 
                    description: "High-strength packaging board engineered for maximum durability.",
                    pdf: nrPowerPacPdf
                },
                { 
                    id: "power-coat-spec",
                    title: "NR POWER COAT", 
                    description: "Premium coated board with superior surface finish and printability.",
                    pdf: nrPowerCoatPdf
                }
            ]} />

            {/* NR Pearl Section */}
            <NRPearlSection />

            {/* Product Specifications Section - Pearl Range */}
            <ProductSpecsSection specs={[
                { 
                    id: "pearl-pac-spec",
                    title: "NR PEARL PAC", 
                    description: "High-clarity bleached board tailored for luxury pharmaceutical and food packaging.",
                    pdf: nrPearlPacPdf
                },
                { 
                    id: "pearl-coat-spec",
                    title: "NR PEARL COAT", 
                    description: "Ultra-premium bleached board with exceptional brightness and elegance.",
                    pdf: nrPearlCoatPdf
                }
            ]} />

            {/* Industries Section */}
            <IndustriesSection />

            <Footer />
        </div>
    );
};

export default PremiumBoardPage;

