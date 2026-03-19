import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import milestoneBg from '../assets/milestone_bg.webp';
import cityscape from '../assets/town-silhoutte.webp';
import { ChevronLeft, ChevronRight, Pause, Play, Home, Factory, Building2, BookOpen, Handshake, Printer, Settings, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
    {
        year: "1983",
        title: "Group Foundation",
        description: "The beginning of a legacy in paper manufacturing, setting the foundation for future growth and excellence.",
        icon: Home
    },
    {
        year: "1993",
        title: "Company Establishment",
        description: "Official establishment of NRAIL, marking a significant milestone in our corporate journey.",
        icon: Building2
    },
    {
        year: "1995",
        title: "Unit I — Duplex Production Launched",
        description: "Inauguration of our first manufacturing unit specifically dedicated to premium Duplex board production.",
        icon: Factory
    },
    {
        year: "1998",
        title: "Unit II – Newsprint Launched",
        description: "Expanding our horizons with the launch of Unit II, dedicated to high-quality newsprint production.",
        icon: BookOpen
    },
    {
        year: "2005",
        title: "Strategic Merger",
        description: "Merger of N R Paper & Boards Ltd. and Suman Paper & Boards Ltd. (Units III & IV), strengthening our market position.",
        icon: Handshake
    },
    {
        year: "2014",
        title: "Unit V, Sarigam",
        description: "Commencement of Writing & Printing Paper Production at our state-of-the-art Sarigam facility.",
        icon: Printer
    },
    {
        year: "2024",
        title: "Unit 5 PM II inaugurated",
        description: "A major leap in capacity with the inauguration of Paper Machine II at Unit 5, enhancing our production capabilities.",
        icon: Settings
    },
    {
        year: "2025",
        title: "Highest ever Monthly Group Production",
        description: "Achieved our Highest ever Monthly Group Production of 44,768 MT, a testament to our efficiency and scale.",
        icon: TrendingUp
    }
];

const MilestonesPage = () => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

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

            {/* Fixed Controls Container */}
            <div className="sticky top-20 left-0 w-full z-50 bg-white/95 backdrop-blur-md py-4 border-b border-gray-100">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center text-lg text-gray-500 font-normal whitespace-nowrap">
                        <Link to="/our-story" className="hover:text-[#8b0000] transition-colors">Our Story</Link>
                        <ChevronRight size={16} className="mx-2 text-gray-400" />
                        <span className="text-[#8b0000]">Our Legacy</span>
                    </div>

                    <div className="flex items-center gap-4 bg-white shadow-sm border border-gray-100 rounded-sm px-4 py-1 mx-4">
                        <ChevronLeft size={16} className="text-gray-300 cursor-pointer hover:text-[#8b0000]" onClick={() => scroll('prev')} />
                        <span className="text-[#8b0000] font-black text-xs md:text-sm tracking-widest min-w-[80px] md:min-w-[120px] text-center">1983 - 2025</span>
                        <ChevronRight size={16} className="text-gray-300 cursor-pointer hover:text-[#8b0000]" onClick={() => scroll('next')} />
                    </div>

                </div>
            </div>

            {/* Main Timeline Section */}
            <div 
                ref={scrollContainerRef}
                className={`relative h-[95vh] min-h-[700px] overflow-x-auto no-scrollbar flex items-center bg-white ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* 2. Timeline Content Container */}
                <div className="flex items-center gap-[30vw] min-w-max relative z-20 h-full">
                    {/* Intro Space: Allows city to establish before first milestone */}
                    <div className="w-[10vw] shrink-0"></div>                    {/* 1. Imaginary Middle Line (Static Dotted Path) */}
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
                        <div className="w-[10vw] shrink-0"></div>                        {milestones.map((m, idx) => (
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
                        <div className="w-[10vw] shrink-0"></div>
                        {milestones.map((m, idx) => {
                            const sectionProgress = (scrollProgress * milestones.length) - idx;
                            const isFocused = Math.abs(sectionProgress - 0.8) < 0.8;

                            return (
                                <div key={idx} className="relative w-[400px] h-full flex flex-col items-center">
                                    {idx < milestones.length - 1 && (
                                        <div className="absolute bottom-[40%] left-[calc(100%+15vw)] w-[600px] h-[350px] flex flex-col items-center pointer-events-none z-20 overflow-hidden transform -translate-x-1/2">
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
                                                <m.icon strokeWidth={0.5} size={48} />
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
                                <div className="absolute top-[60%] mt-12 w-[600px] flex flex-col items-center z-50 pointer-events-none">
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
                                        className="relative w-full flex flex-row items-center gap-8 px-8 py-6 rounded-2xl mesh-red border border-white/20"
                                        style={{
                                            transformStyle: "preserve-3d",
                                            perspective: "1000px"
                                        }}
                                    >
                                        {/* Parallax Image Fragment */}
                                        <motion.div 
                                            className="w-[200px] h-[150px] shrink-0 overflow-hidden border border-white/40 rounded-lg bg-black box-content"
                                        >
                                            <img 
                                                src={milestoneBg} 
                                                alt="" 
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>

                                        {/* Narrative Text */}
                                        <div className="flex-1 text-left">
                                            <motion.h4 
                                                animate={{ x: isNear ? 0 : 20 }}
                                                className="text-white text-3xl font-light tracking-wide mb-2 flex items-baseline gap-2"
                                            >
                                                <span className="text-white">{m.year}</span>
                                            </motion.h4>
                                            <motion.p 
                                                animate={{ x: isNear ? 0 : 40 }}
                                                className="text-gray-100 text-sm leading-relaxed max-w-[320px] font-light"
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

            <Footer />

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
