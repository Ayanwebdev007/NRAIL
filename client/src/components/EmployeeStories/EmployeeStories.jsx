
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowRight, ArrowLeft } from 'lucide-react';
import poojaImage from '../../assets/pooja_daftari.webp';
import raviImage from '../../assets/Ravi Kumar Sharma.webp';
import adityaImage from '../../assets/Aditya Sharma.webp';
import srinivaasImage from '../../assets/Srinivaas Iyengaar.webp';
import nishithaImage from '../../assets/Nishita Gandha.webp';
import rameshImage from '../../assets/Ramesh Alla.webp';
import sarvachanImage from '../../assets/Sarvachan Cahawla Chauhan.webp';
import aashishImage from '../../assets/Aashish Gulati.webp';

const EmployeeStories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const stories = [
        {
            id: "01",
            name: "Ravi Kumar Sharma",
            designation: "Vice President- Marketing Boards",
            story: "For me, marketing at NRAIL is not just about products—it’s about building trust with every interaction. When I speak about our FBB, Duplex, Power, or Pearl boards, I speak with confidence because I know the quality behind them. What I truly value is how closely we work as one team—manufacturing, innovation, and marketing—always aligned to deliver the right solution. That’s what makes every customer conversation meaningful. Being part of NRAIL, I feel proud to represent a brand that stands for reliability, performance, and long-term partnerships.",
            image: raviImage
        },
        {
            id: "02",
            name: "Aditya Sharma",
            designation: "Vice President- Sales & Marketing",
            story: "In my journey of over a decade, I’ve learned that real growth is built on trust and consistency. At NRAIL, I don’t just present products—I deliver reliable solutions that customers depend on every day. Our Writing, Printing, and Copier products are most popular depending on their quality. I work closely with cross-functional teams to ensure that every commitment we make is fulfilled with precision. That alignment is what helps us build strong, long-term relationships. Being part of NRAIL means being part of a journey that is constantly evolving—and that’s what drives me forward.",
            image: adityaImage
        },
        {
            id: "03",
            name: "Sarvachan Cahawla Chauhan",
            designation: "Head-R&D",
            story: "Working in Quality and Innovation at NRAIL means constantly evolving. We are always exploring better ways to enhance performance, improve consistency, and deliver value. The support from leadership and collaboration across teams make it possible to turn ideas into measurable outcomes. That’s what enables us to maintain high standards while continuing to innovate. For me, it’s about creating products that not only meet expectations—but set new benchmarks.",
            image: sarvachanImage
        },
        {
            id: "04",
            name: "Pooja Daftari Mehta",
            designation: "Company Secretary & Compliance Officer",
            story: "At NRAIL, learning is at the core of how we grow as individuals and as an organization. As perspectives evolve, our approach to governance becomes more robust and future-ready. What truly differentiates NRAIL is its leadership—approachable, supportive, and grounded in integrity. An open and collaborative culture encourages continuous development and shared responsibility. This environment enables us to strengthen compliance frameworks while building lasting trust across the organization.",
            image: poojaImage
        },
        {
            id: "05",
            name: "Srinivaas Iyengaar",
            designation: "HR- Lead",
            story: "At NRAIL, we truly believe learning is the strongest driver of growth. As people evolve, organizations evolve—and that’s why nurturing a culture of continuous development remains a core focus for us. We invest in building capabilities, encouraging curiosity, and creating an environment where individuals feel empowered to grow and contribute. From skill enhancement to leadership development, every initiative is designed to unlock potential and strengthen performance. For me, it’s about enabling people to move forward with confidence—because when individuals grow, the organization progresses with purpose.",
            image: srinivaasImage
        },
        {
            id: "06",
            name: "Nishitha Gandha",
            designation: "Head- Treasury",
            story: "At NRAIL, treasury is not just a function—it’s a responsibility that supports the company’s momentum. Every action is focused on maintaining stability while enabling growth. The leadership creates a sense of trust and direction, which reflects in how teams work together. That collaboration ensures we stay agile and aligned in a dynamic environment. For me, it’s about building financial strength that supports long-term success.",
            image: nishithaImage
        },
        {
            id: "07",
            name: "Aashish Gulati",
            designation: "President-Operations Unit V (PM1)",
            story: "At NRAIL’s Unit V (PM1), we are redefining what recycled paper can achieve. Using 100% recovered fibre, we produce Writing, Printing, and Copier papers that combine sustainability with superior performance. Our strength lies in integrating advanced technology with disciplined execution. From deinking and fibre refinement to precision-controlled production, every process is designed to ensure high brightness, smoothness, and consistency. It’s rewarding to see how innovation and recycling together enable us to deliver premium products for modern applications.",
            image: aashishImage
        },
        {
            id: "08",
            name: "Ramesh Alla",
            designation: "Unit Head: Unit V (PM2)",
            story: "Leading a team at NRAIL is both a responsibility and a privilege. Every day, I see individuals coming together with commitment, ownership, and a shared goal of excellence. It’s this collective spirit that transforms our efforts into real achievements. Our top management is deeply involved in our journey—not just as leaders, but as constant enablers of progress. Their vision and support have helped us reach milestones that have redefined what’s possible in our industry.",
            image: rameshImage
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
                                className={`w-full h-full object-cover ${stories[currentIndex].id === "03" ? 'object-right' : stories[currentIndex].id === "07" ? 'object-[80%_center]' : 'object-left'} grayscale brightness-75 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100`}
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
                <div className="w-full lg:w-1/2 bg-[#050505] relative flex flex-col pt-12 pb-32 px-8 md:px-16 lg:px-24">

                    <div className="max-w-xl w-full">
                        {/* Top Spacer to push Bar down away from edge */}
                        <div className="h-25 w-full"></div>

                        <div className="relative min-h-[450px] md:min-h-[400px] lg:min-h-[420px]">
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

                                    <h3 className="text-base md:text-lg font-light text-white leading-relaxed tracking-wide italic mb-8">
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
                    <div className="absolute bottom-12 left-0 w-full px-8 md:px-16 lg:px-24 z-10">
                        <div className="flex items-center gap-0 border border-white/10 w-fit bg-[#050505]/80 backdrop-blur-md">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 flex items-center justify-center border-r border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <div className="px-5 text-[10px] font-bold tracking-[0.2em] text-white/40">
                                {stories[currentIndex].id} / 0{stories.length}
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
