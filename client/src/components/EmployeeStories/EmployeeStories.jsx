
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowRight, ArrowLeft } from 'lucide-react';

const EmployeeStories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const stories = [
        {
            id: "01",
            name: "Pooja Daftari Mehta",
            designation: "Company Secretary & Compliance Officer",
            story: "What stands out for me at NRAIL is the leadership—it listens, guides, and leads with integrity. The workplace here feels collaborative, open, and encouraging. It’s an environment where learning and growth happen naturally.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
        },
        {
            id: "02",
            name: "Rahul Sharma",
            designation: "Senior Engineer - Process Excellence",
            story: "NRAIL is more than a workplace; it's a platform for innovation. The focus on future-ready infrastructure allows us to push the boundaries of what's possible in sustainable manufacturing every single day.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
        },
        {
            id: "03",
            name: "Sneha Iyer",
            designation: "Sustainability Lead",
            story: "Our commitment to the environment isn't just on paper—it's in our DNA. Working here gives me the chance to truly catalyse responsible growth across the industry through authentic, regenerative practices.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2622&auto=format&fit=crop"
        },
        {
            id: "04",
            name: "Vikram Malhotra",
            designation: "Operations Manager",
            story: "Efficiency and responsibility go hand-in-hand here. NRAIL empowers every individual to take ownership, creating a culture where excellence is a group achievement and growth is shared by all.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % stories.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);

    return (
        <section className="bg-black text-white py-0 overflow-hidden font-[Outfit] border-t border-white/5">
            <div className="flex flex-col lg:flex-row h-auto min-h-[600px]">
                {/* Left: Image Panel */}
                <div className="w-full lg:w-1/2 relative overflow-hidden group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 z-0"
                        >
                            <img
                                src={stories[currentIndex].image}
                                alt={stories[currentIndex].name}
                                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-[#050505]" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Branding Watermark */}
                    <div className="absolute top-10 lg:top-15 left-8 z-20 flex items-center">
                        <div className="h-10 w-[6px] bg-red-600"></div>
                        <div className="w-2"></div>
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/60">Employees Stories</span>
                    </div>

                    <div className="absolute bottom-8 left-8 z-20">
                        <span className="text-6xl md:text-8xl font-bold text-white/5 tracking-tighter select-none leading-none">
                            {stories[currentIndex].id}
                        </span>
                    </div>
                </div>

                {/* Right: Content Panel */}
                <div className="w-full lg:w-1/2 bg-[#050505] relative flex flex-col pt-12 pb-12 px-8 md:px-16 lg:px-24">

                    <div className="max-w-xl w-full">
                        {/* Top Spacer to push Bar down away from edge */}
                        <div className="h-25 w-full"></div>

                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex flex-col"
                                >
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 40 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                        className="h-1 bg-red-600 mb-8"
                                    />

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 0.4, scale: 1 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                    >
                                        <Quote className="w-8 h-8 text-red-600 mb-6" />
                                    </motion.div>

                                    <h3 className="text-lg md:text-xl lg:text-2xl font-light text-white leading-relaxed tracking-tight italic mb-8">
                                        "{stories[currentIndex].story}"
                                    </h3>

                                    <div className="mb-16">
                                        <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase">
                                            {stories[currentIndex].name}
                                        </h4>
                                        <p className="text-red-600 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-90">
                                            {stories[currentIndex].designation}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Spacer for Gap */}
                        <div className="h-8 md:h-12" />
                    </div>

                    {/* Sharp Navigation - Anchored at Bottom */}
                    {/* Sharp Navigation - Anchored at Bottom but lifted */}
                    <div className="absolute bottom-24 left-0 w-full px-8 md:px-16 lg:px-24">
                        <div className="flex items-center gap-0 border border-white/10 w-fit bg-[#050505]/80 backdrop-blur-md">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 flex items-center justify-center border-r border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <div className="px-5 text-[10px] font-bold tracking-[0.2em] text-white/40">
                                {stories[currentIndex].id} / 04
                            </div>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 bg-red-600 flex items-center justify-center hover:bg-black hover:text-red-600 transition-all duration-300"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Background Texture */}
                    <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] hidden lg:block pointer-events-none">
                        <span className="text-6xl font-bold tracking-tighter rotate-90 inline-block origin-bottom-right">VOICES</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmployeeStories;
