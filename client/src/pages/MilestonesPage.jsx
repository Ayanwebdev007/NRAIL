import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import milestoneBg from '../assets/milestone_bg.webp';
import cityscape from '../assets/town-silhoutte.webp';
import { ChevronLeft, ChevronRight, TrendingUp, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import milestone1 from '../assets/Connector Image 1.png';
import milestone2 from '../assets/Connector Image 2.png';
import milestone3 from '../assets/Connector Image 3.png';
import milestone4 from '../assets/Connector Image 4.png';
import milestone5 from '../assets/Connector Image 5.png';
import milestone6 from '../assets/Connector Image 6.png';
import milestone7 from '../assets/milestone_7.png';
import img1983 from '../assets/1983.webp';
import img1993 from '../assets/1993.webp';
import img1995 from '../assets/1995.webp';
import img1998 from '../assets/1998.webp';
import img2014 from '../assets/2014.webp';
import img2024 from '../assets/2024.webp';
import img2025 from '../assets/2025.webp';

const milestones = [
    {
        year: "1983",
        title: "Group Foundation",
        description: "The beginning of a legacy in paper manufacturing, setting the foundation for future growth and excellence.",
        icon: milestone1,
        image: img1983
    },
    {
        year: "1993",
        title: "Company Establishment",
        description: "Official establishment of NRAIL, marking a significant milestone in our corporate journey.",
        icon: milestone2,
        image: img1993
    },
    {
        year: "1995",
        title: "Unit I — Duplex Production Launched",
        description: "Inauguration of our first manufacturing unit specifically dedicated to premium Duplex board production.",
        icon: milestone3,
        image: img1995
    },
    {
        year: "1998",
        title: "Unit II – Newsprint Launched",
        description: "Expanding our horizons with the launch of Unit II, dedicated to high-quality newsprint production.",
        icon: milestone4,
        image: img1998
    },
    {
        year: "2005",
        title: "Strategic Merger",
        description: "Merger of N R Paper & Boards Ltd. and Suman Paper & Boards Ltd. (Units III & IV), strengthening our market position.",
        icon: milestone5,
        image: milestoneBg
    },
    {
        year: "2014",
        title: "Unit V, Sarigam",
        description: "Commencement of Writing & Printing Paper Production at our state-of-the-art Sarigam facility.",
        icon: milestone6,
        image: img2014
    },
    {
        year: "2024",
        title: "Unit 5 PM II inaugurated",
        description: "A major leap in capacity with the inauguration of Paper Machine II at Unit 5, enhancing our production capabilities.",
        icon: milestone7,
        image: img2024
    },
    {
        year: "2025",
        title: "Announcement of 1500 TPD new Dahej plant",
        description: "Announcement of 1500 TPD new Dahej plant",
        icon: TrendingUp,
        image: img2025
    }
];

const MilestonesPage = () => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Ensure the page always starts from the top when navigated to
        window.scrollTo(0, 0);

        const el = scrollContainerRef.current;
        if (!el) return;

        const handleScroll = () => {
            const currentScroll = el.scrollLeft;
            const viewportCenter = el.clientWidth / 2;
            const totalWidth = el.scrollWidth;
            // Progress reflects where the center of the screen is on the total timeline
            setScrollProgress((currentScroll + viewportCenter) / totalWidth);
        };

        const handleMouseDown = (e) => {
            setIsDragging(true);
            setStartX(e.pageX - el.offsetLeft);
            setScrollLeft(el.scrollLeft);
        };

        const handleMouseLeave = () => {
            setIsDragging(false);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            el.scrollLeft = scrollLeft - walk;
        };

        const handleWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };

        el.addEventListener('scroll', handleScroll);
        el.addEventListener('mousedown', handleMouseDown);
        el.addEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseup', handleMouseUp);
        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            el.removeEventListener('scroll', handleScroll);
            el.removeEventListener('mousedown', handleMouseDown);
            el.removeEventListener('mouseleave', handleMouseLeave);
            el.removeEventListener('mouseup', handleMouseUp);
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('wheel', handleWheel);
        };
    }, [isDragging, startX, scrollLeft]);

    // Auto-scroll logic when playing
    useEffect(() => {
        let timer;
        if (isPlaying && scrollContainerRef.current) {
            timer = setInterval(() => {
                const el = scrollContainerRef.current;
                const maxScroll = el.scrollWidth - el.clientWidth;
                
                if (el.scrollLeft >= maxScroll - 1) {
                    setIsPlaying(false); // Stop at end
                } else {
                    el.scrollBy({ left: 4, behavior: 'auto' }); // Smooth continuous scroll
                }
            }, 30);
        }
        return () => clearInterval(timer);
    }, [isPlaying]);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth * 0.8;
            scrollContainerRef.current.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-white min-h-screen font-[Outfit] flex flex-col">
            <Navbar />

            {/* Fixed Breadcrumbs Container */}
            <div className="sticky top-20 left-0 w-full z-50 bg-white/95 backdrop-blur-md py-4 border-b border-gray-100">
                <div className="container mx-auto px-6 flex items-center justify-start">
                    <div className="flex items-center text-sm md:text-lg text-gray-500 font-normal whitespace-nowrap">
                        <Link to="/our-story" className="hover:text-[#8b0000] transition-colors">Our Story</Link>
                        <ChevronRight size={16} className="mx-2 text-gray-400" />
                        <span className="text-[#8b0000]">Our Legacy</span>
                    </div>
                </div>
            </div>

            {/* Floating Navigation Pill */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60]">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-6 bg-white shadow-2xl border border-gray-100 rounded-full px-8 py-3 mx-4"
                >
                    <ChevronLeft size={20} className="text-gray-300 cursor-pointer hover:text-[#8b0000] transition-colors" onClick={() => scroll('prev')} />
                    
                    <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#8b0000] hover:bg-red-50 transition-colors shadow-inner"
                    >
                        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
                    </button>

                    <span className="text-[#8b0000] font-black text-xs md:text-base tracking-[0.2em] min-w-[100px] md:min-w-[150px] text-center select-none uppercase">1983 - 2025</span>
                    
                    <ChevronRight size={20} className="text-gray-300 cursor-pointer hover:text-[#8b0000] transition-colors" onClick={() => scroll('next')} />
                </motion.div>
            </div>

            {/* Main Timeline Section */}
            <div 
                ref={scrollContainerRef}
                className={`relative h-[95vh] min-h-[700px] overflow-x-auto no-scrollbar flex items-center bg-white ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* 2. Timeline Content Container */}
                <div className="flex items-center gap-[30vw] min-w-max relative z-20 h-full">
                    <div className="w-[3vw] shrink-0"></div>
                    {/* 1. Imaginary Middle Line (Static Dotted Path) */}
                    <div className="absolute left-0 right-0 h-[2px] bg-gray-100 top-[60%] -translate-y-1/2 z-10">
                        <div className="absolute inset-0 border-t-2 border-dashed border-gray-200"></div>
                    </div>

                    {/* 2. Continuous Townscape Background (Tiled above the middle line) */}
                    <div className="absolute bottom-[40%] left-0 right-0 h-40 pointer-events-none z-10 overflow-hidden flex items-end opacity-100 transform translate-y-[-2%]">
                        <div className="flex min-w-full">
                            {[...Array(35)].map((_, i) => (
                                <img key={i} src={cityscape} className="h-40 w-auto object-contain object-bottom invert-[90%]" alt="" />
                            ))}
                        </div>
                    </div>

                    {/* 3. Watermark Years Background Layer (Behind towns) */}
                    <div className="absolute inset-0 flex items-center gap-[30vw] min-w-max pointer-events-none z-0">
                        <div className="w-[3vw] shrink-0"></div>
                        {milestones.map((m, idx) => (
                            <div key={idx} className="relative w-[400px] h-full flex flex-col items-center">
                                <div className="absolute bottom-[40%] w-full flex flex-col items-center pointer-events-none z-0">
                                    <div className="absolute bottom-0 text-[12rem] font-light tracking-tighter leading-none select-none bg-gradient-to-t from-transparent via-[#8b0000]/20 to-[#8b0000]/40 bg-clip-text text-transparent transform translate-y-[-30%]">
                                        {m.year}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
 
                    {/* 4. Interactive Milestone Icons Layer (In front of towns) */}
                    <div className="absolute inset-0 flex items-center gap-[30vw] min-w-max pointer-events-none z-20">
                        <div className="w-[3vw] shrink-0"></div>

                        {milestones.map((m, idx) => {
                            const sectionProgress = (scrollProgress * milestones.length) - idx;
                            const isFocused = Math.abs(sectionProgress - 0.8) < 0.8;

                            return (
                                <div key={idx} className="relative w-[400px] h-full flex flex-col items-center">
                                    {idx < milestones.length - 1 && (
                                        <div className="absolute bottom-[40%] left-[calc(100%+15vw)] w-[600px] h-[500px] flex flex-col items-center pointer-events-none z-20 overflow-hidden transform -translate-x-1/2">
                                            <motion.div 
                                                initial={{ opacity: 0, y: 350, scale: 3.5 }}
                                                animate={{ 
                                                    opacity: isFocused ? 1 : 0,
                                                    y: isFocused ? 0 : 350,
                                                    scale: isFocused ? 4 : 3.5
                                                }}
                                                transition={{ 
                                                    type: "spring",
                                                    damping: 25,
                                                    stiffness: 120,
                                                    opacity: { duration: 0.5 }
                                                }}
                                                className="absolute bottom-0 text-black origin-bottom"
                                            >
                                                {typeof m.icon === 'string' ? (
                                                    <img 
                                                        src={m.icon} 
                                                        alt="" 
                                                        className={(m.year === "1995" || m.year === "2024") ? "w-24 h-24 object-contain translate-y-[20%]" : "w-12 h-12 object-contain"} 
                                                    />
                                                ) : (
                                                    <m.icon strokeWidth={0.5} size={48} />
                                                )}
                                            </motion.div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>


                    
                    {milestones.map((m, idx) => {
                        const sectionProgress = (scrollProgress * milestones.length) - idx;
                        const isNear = Math.abs(sectionProgress - 0.5) < 1.0;
                        
                        return (
                            <div key={idx} className="relative flex flex-col items-center w-[400px] h-full justify-center">
                                {/* --- UPPER PART (Above Line) --- */}
                                <div className="absolute bottom-[40%] w-full flex flex-col items-center pointer-events-none pb-0 z-20">
                                    {/* Aura Glow (Focus Based) */}
                                    {isNear && (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 0.15, scale: 1.2 }}
                                            className="absolute bottom-0 w-[600px] h-[600px] bg-gradient-radial from-[#8b0000] to-transparent rounded-full -translate-y-1/2 blur-3xl z-0"
                                        />
                                    )}

                                    {/* Milestone Marker (Victorian Lamp Post) */}
                                    <div className="absolute bottom-0 flex flex-col items-center z-30">
                                        <svg width="80" height="160" viewBox="0 0 80 160" className="drop-shadow-2xl">
                                            <g fill="#333" stroke="#222" strokeWidth="1">
                                                <rect x="38" y="40" width="4" height="120" />
                                                <path d="M30 40 L50 40 L55 30 L40 10 L25 30 Z" fill="#444" />
                                                <circle cx="40" cy="25" r="8" fill={isNear ? "#ffeb3b" : "#666"} className="transition-colors duration-1000" />
                                                <path d="M20 45 Q40 35 60 45" fill="none" stroke="#222" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                                {/* --- CENTER LINE DOT --- */}
                                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center">
                                    <motion.div 
                                        animate={{ 
                                            backgroundColor: isNear ? "#8b0000" : "#cbd5e0",
                                            scale: isNear ? 1.5 : 1
                                        }}
                                        className="w-5 h-5 rounded-full border-4 border-white transition-colors"
                                    />
                                    <div className="w-[3px] h-20 bg-gradient-to-b from-[#8b0000] to-transparent mt-0 opacity-40"></div>
                                </div>

                                {/* --- LOWER PART: "Atmos-Nav" Floating Fragment --- */}
                                <div className="absolute top-[60%] mt-12 w-[400px] flex flex-col items-center z-50 pointer-events-none">
                                    <motion.div 
                                        animate={{ 
                                            y: isNear ? [0, -10, 0] : 0,
                                            opacity: isNear ? 1 : 0.3,
                                            scale: isNear ? 1 : 0.9,
                                            rotateY: sectionProgress * 15
                                        }}
                                        transition={{ 
                                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                            opacity: { duration: 0.5 }
                                        }}
                                        className="relative w-full flex flex-row items-center gap-5 px-5 py-3 rounded-2xl mesh-red border border-white/20"
                                        style={{
                                            transformStyle: "preserve-3d",
                                            perspective: "1000px"
                                        }}
                                    >
                                        {/* Large Image Fragment */}
                                        <motion.div 
                                            className="w-[200px] h-[140px] shrink-0 overflow-hidden border border-white/40 rounded-lg bg-white box-content"
                                        >
                                            <img 
                                                src={m.image || milestoneBg} 
                                                alt={m.year} 
                                                className={`w-full h-full ${m.year === "1983" ? 'object-contain' : 'object-cover'}`}
                                            />
                                        </motion.div>

                                        {/* Narrative Text */}
                                        <div className="flex-1 text-left">
                                            <motion.h4 
                                                animate={{ x: isNear ? 0 : 20 }}
                                                className="text-white text-2xl font-light tracking-wide mb-2 flex items-baseline gap-2"
                                            >
                                                <span className="text-white">{m.year}</span>
                                            </motion.h4>
                                            <motion.p 
                                                animate={{ x: isNear ? 0 : 40 }}
                                                className="text-gray-100 text-[10px] leading-relaxed max-w-[150px] font-light text-justify"
                                            >
                                                {m.description}
                                            </motion.p>
                                            
                                            {/* Decorative Narrative Line */}
                                            <div className="h-[1px] w-24 bg-gradient-to-r from-[#8b0000] to-transparent mt-4"></div>
                                        </div>

                                        {/* Glass Refraction Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl"></div>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                    
                    <div className="w-[15vw]"></div>
                </div>
            </div>


            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                #root {
                    display: flex;
                    flex-direction: column;
                }
                .bg-gradient-radial {
                    background-image: radial-gradient(var(--tw-gradient-stops));
                }
                .glass-fragment {
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                }
                .mesh-red {
                    background-color: #5a0000;
                    background-image: 
                        radial-gradient(at 0% 0%, hsla(0,100%,25%,1) 0, transparent 50%), 
                        radial-gradient(at 50% 0%, hsla(0,100%,30%,1) 0, transparent 50%), 
                        radial-gradient(at 100% 0%, hsla(0,100%,25%,1) 0, transparent 50%), 
                        radial-gradient(at 100% 100%, hsla(0,100%,22%,1) 0, transparent 50%),
                        radial-gradient(at 0% 100%, hsla(0,100%,22%,1) 0, transparent 50%);
                    background-blend-mode: soft-light;
                    position: relative;
                    overflow: hidden;
                }
                .mesh-red::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                    opacity: 0.15;
                    pointer-events: none;
                }
            ` }} />
        </div>
    );
};

export default MilestonesPage;
