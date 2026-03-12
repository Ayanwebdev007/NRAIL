import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import legacyHero from '../assets/legacy hero.JPG';
import FounderImg from '../assets/founder.png';
import RoyalFrame from '../assets/frame.png';
import MissionImg from '../assets/mission vision png.png';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Shield, Zap, Leaf, ClipboardCheck, Users } from 'lucide-react';

const OurStoryPage = () => {
    const location = useLocation();

    useEffect(() => {
        // Force scroll to top on every navigation/hash change
        window.scrollTo(0, 0);

        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="bg-white min-h-screen font-main">
            <Navbar />

            {/* Hero Section - 95vh height */}
            <div className="relative w-full h-[95vh]">
                <div
                    className="absolute inset-0 bg-cover bg-top"
                    style={{ backgroundImage: `url("${legacyHero}")` }}
                >
                    {/* Overlay gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Hero Text */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="font-[Outfit]"
                        style={{
                            fontSize: '48px', // Matching the 48px from reference
                            fontWeight: 300,
                            lineHeight: 1.1,
                            letterSpacing: '0.02em',
                            color: '#ffffffff' // Red base color for first part
                        }}
                    >
                        Generations of <span className="text-white">Visionary Leadership</span>
                    </motion.h1>
                </div>
            </div>

            {/* Breadcrumbs - Premium Design with forced spacing */}
            <div className="container mx-auto px-6" style={{ marginTop: '5px ', marginBottom: '50px' }}>
                <div className="flex items-center text-lg text-gray-500 font-normal">
                    <Link to="/" className="hover:text-primary transition-colors hover:bg-gray-50 px-2 py-1 rounded-md">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                    <Link to="/our-story" className="hover:text-primary transition-colors hover:bg-gray-50 px-2 py-1 rounded-md">Our Story</Link>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                    <span className="text-primary font-medium px-2 py-1">Our Legacy</span>
                </div>
            </div>

            {/* Main Content Sections - Removed as per request to start fresh */}
            {/* Main Content - Legacy Section */}
            <div id="nrail-legacy" className="bg-white py-20 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column - History Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <h2 className="text-6xl font-extrabold mb-8 leading-[0.9]">
                                <span className="block text-black">NRAIL</span>
                                <span className="block text-[#8b0000]">LEGACY</span>
                            </h2>

                            <div className="text-gray-700 text-lg leading-relaxed font-light space-y-6 text-justify">
                                <p>
                                    NRAIL’s product portfolio reflects this balance—offering Folding Box Boards, Solid Bleached Boards, Duplex grades, and Writing & Printing papers designed for consistency, durability, and superior print performance. Each solution supports industries seeking dependable materials that perform efficiently across modern converting and printing environments.
                                </p>
                                <p>
                                    Sustainability and responsibility shape every decision. Environmental care, safe operations, ethical governance, and community upliftment form the pillars of NRAIL’s ESG framework, ensuring growth that aligns with societal and ecological priorities.
                                </p>
                                <p>
                                    As industries evolve and expectations rise, NRAIL continues to invest in people, innovation, and capacity—building paper and board solutions that are relevant today and resilient for tomorrow.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column - Manufacturing Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 self-center">
                            {[
                                { title: "Manufacturing Edge", text: "Redefining Manufacturing Excellence Through Advanced Technology" },
                                { title: "Process Excellence", text: "Intelligent Process Technology for Responsible Manufacturing." },
                                { title: "Quality Assurance", text: "Rigorous quality testing and global compliance standards define every product we deliver" },
                                { title: "Innovation with Purpose", text: "Innovation-led development that stays ahead of industry evolution." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex flex-row items-start gap-x-5"
                                >
                                    <div className="w-[4px] h-[24px] bg-[#8b0000] shrink-0 mt-1"></div>
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Large Spacer for separation */}
            <div className="h-20 w-full"></div>

            {/* Founder's Message Section - Premium Royal Design */}
            <div className="bg-white pt-48 pb-48 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/40 to-[#d4af37]/0"></div>

                <div className="container mx-auto px-6 max-w-7xl" style={{ marginTop: '80px', marginBottom: '100px' }}>
                    <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">

                        {/* Image Section - The Royal Frame */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:w-5/12 relative group flex justify-center py-6"
                        >
                            {/* Frame Container */}
                            <div className="relative w-full max-w-[500px] drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                                <img
                                    src={FounderImg}
                                    alt="Shri N R Agarwal"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:w-6/12 text-center lg:text-left"
                        >
                            {/* Title */}
                            <div className="mb-10">
                                <h5 className="font-['Cinzel'] text-[#d4af37] tracking-[0.2em] uppercase font-bold mb-3 text-lg">
                                    Founder’s Message
                                </h5>
                                <h2 className="font-['Playfair_Display'] text-6xl text-[#1a1a1a] font-bold leading-tight mb-4">
                                    Shri N R Agarwal
                                </h2>
                                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                                    <span className="h-[1px] w-12 bg-[#8b0000]"></span>
                                    <span className="font-['Cinzel'] text-[#8b0000] font-semibold tracking-widest text-sm">
                                        FOUNDER CHAIRMAN | 1932 – 2011
                                    </span>
                                    <span className="h-[1px] w-12 bg-[#8b0000]"></span>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="relative mb-10 p-8 border-y-2 border-[#d4af37]/20 bg-white/50 backdrop-blur-sm">
                                <p className="font-['Playfair_Display'] text-2xl italic text-[#4a4a4a] leading-relaxed">
                                    "Every challenge is an invitation to rise higher. Keep moving, and success will meet you on the way."
                                </p>
                            </div>

                            {/* Body */}
                            <div className="space-y-6 font-main text-gray-700 leading-8 text-lg font-light text-justify">
                                <p>
                                    Late Shri N. R. Agarwal, founder of NRAIL, was a visionary Chemical Engineer whose four decades of expertise reshaped India’s paper landscape. From establishing a modest unit in 1993 to building a multi-plant enterprise, he steered growth through innovation, disciplined execution, and an unshakeable commitment to Quality, Quantity & Quickness.
                                </p>
                                <p>
                                    His emphasis on modernisation, global standards, and people-first leadership transformed NRAIL into a trusted partner for Fortune 100 companies. His legacy of continuous learning, integrity, and progress remains the guiding force propelling NRAIL into the future.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/80 to-[#d4af37]/0"></div>
            </div>

            {/* Mission & Vision Header Section */}
            <div id="vision-mission" className="bg-white pt-32 pb-48 relative">
                <div className="container mx-auto px-6 max-w-7xl" style={{ marginTop: '40px' }}>
                    <div className="flex flex-col items-center text-center mt-8">
                        {/* Top Line with Red Lines matching reference */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center justify-center gap-4 w-full m-0 p-0"
                        >
                            <span className="h-[5px] w-16 md:w-32 bg-[#8b0000]"></span>
                            <h4 className="font-main text-black font-extrabold tracking-tight uppercase m-0 p-0 leading-none" style={{ fontSize: '26px' }}>CORPORATE EXCELLENCE</h4>
                            <span className="h-[5px] w-16 md:w-32 bg-[#8b0000]"></span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-main font-extrabold text-[#1a1a1a] uppercase w-full m-0 p-0 leading-none" style={{ fontSize: '26px', margin: 0 }}
                        >
                            MISSION, VISION AND CORE VALUES
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-gray-600 text-lg text-center w-full p-0 leading-none mt-2" style={{ margin: '15px 0 50px 0' }}
                        >
                            Since 1993 our team share the same convictions and engagements.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Detail Section - Redesigned Section */}
            <div className="bg-[#8b0000] py-52 relative overflow-hidden flex items-center" style={{ minHeight: '60vh' }}>
                {/* Decorative Floral Background (Leaf/Plant illustration logic) */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg
                        viewBox="0 0 400 400"
                        className="absolute -top-20 -left-20 w-[400px] h-[400px] rotate-[-15deg] fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M100,200 C100,100 200,50 300,100 C250,150 200,250 100,200 Z" />
                        <path d="M50,150 C50,80 120,40 180,80 C150,120 120,180 50,150 Z" />
                        <path d="M150,250 C150,180 220,140 280,180 C250,220 220,280 150,250 Z" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Column - Organic Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-20 overflow-hidden"
                                style={{
                                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 40%',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                }}>
                                <img
                                    src={MissionImg}
                                    alt="NRAIL Vision & Mission"
                                    className="w-full h-auto object-cover scale-[1.05]"
                                />
                            </div>

                            {/* Accent Floral Line logic */}
                            <div className="absolute -left-10 -top-10 w-40 h-40 opacity-20">
                                {/* Simulating the floral illustration with an SVG or similar if possible, otherwise keeping it simple */}
                            </div>
                        </motion.div>

                        {/* Right Column - Vertical Text Blocks */}
                        <div className="lg:w-1/2 space-y-32">
                            {/* Mission Block */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-white space-y-6"
                            >
                                <h3 className="text-4xl font-extrabold tracking-tight uppercase">
                                    MISSION
                                </h3>
                                <div className="w-12 h-[2px] bg-white opacity-40"></div>
                                <p className="text-lg leading-relaxed text-gray-100 font-light max-w-xl">
                                    N R Agarwal Industries Limited remains focused on creating sustained stakeholder value through technology-led innovation, cost-effective operations, and a robust organizational culture.
                                </p>
                            </motion.div>

                            {/* Vision Block */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-white space-y-6" style={{ marginTop: '50px' }}
                            >
                                <h3 className="text-4xl font-extrabold tracking-tight uppercase">
                                    VISION & AMBITION
                                </h3>
                                <div className="w-12 h-[2px] bg-white opacity-40"></div>
                                <p className="text-lg leading-relaxed text-gray-100 font-light max-w-xl">
                                    To be a globally acknowledged manufacturer delivering innovative paper products with consistent value to customers. Through steadfast adherence to our core values. Focused on providing sustainable returns while strengthening stakeholder confidence.
                                </p>
                            </motion.div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Core Values Section */}
            <div className={`bg-white pt-24 pb-60 relative overflow-hidden`} style={{ marginTop: '50px', marginBottom: '100px' }}>
                {/* Subtle Pinstripe Background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #8b0000 0px, #8b0000 1px, transparent 1px, transparent 10px)' }}></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    {/* Top Header like Corporate Excellence */}
                    <div className="flex flex-col items-center" style={{ marginBottom: '80px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center justify-center gap-4 w-full m-0 p-0"
                        >
                            <span className="h-[5px] w-16 md:w-32 bg-[#8b0000]"></span>
                            <h4 className="font-main text-black font-extrabold tracking-tight uppercase m-0 p-0 leading-none" style={{ fontSize: '26px' }}>CORE VALUES</h4>
                            <span className="h-[5px] w-16 md:w-32 bg-[#8b0000]"></span>
                        </motion.div>
                    </div>

                    {/* Values Grid - Premium Card Layout */}
                    <div className="flex flex-col gap-16 items-center w-full">
                        {/* First Row: 3 Values */}
                        <div className="flex flex-wrap justify-center gap-24 w-full">
                            {[
                                {
                                    icon: <Shield size={36} />,
                                    title: "Ethics",
                                    desc: "Upholding the highest standards of integrity and transparency in every action."
                                },
                                {
                                    icon: <Zap size={36} />,
                                    title: "Progress",
                                    desc: "Driven by innovation and a relentless pursuit of engineering excellence and growth."
                                },
                                {
                                    icon: <Leaf size={36} />,
                                    title: "Sustainability",
                                    desc: "Committing to eco-friendly practices that protect our environment and future."
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50, rotateX: -25, filter: "blur(5px)" }}
                                    whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{
                                        duration: 1.2,
                                        delay: index * 0.15,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
                                    className="relative flex flex-col items-center text-center p-6 transition-all duration-300 w-full md:w-[300px] group"
                                    style={{ perspective: "1200px" }}
                                >
                                    {/* Subtly removed card container styling */}

                                    {/* Icon Container with subtle glow */}
                                    <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gray-100 group-hover:bg-[#8b0000] transition-colors duration-500">
                                        <div className="relative z-10 text-black group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                                            {value.icon}
                                        </div>
                                    </div>

                                    {/* Forced Gap */}
                                    <div className="h-6 w-full"></div>

                                    <h3 className="text-2xl font-main font-bold text-black uppercase mb-4 tracking-tight">{value.title}</h3>
                                    <p className="text-gray-500 text-base leading-relaxed font-main">
                                        {value.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Second Row: 2 Values (Centered) */}
                        <div className="flex flex-wrap justify-center gap-24 w-full">
                            {[
                                {
                                    icon: <ClipboardCheck size={36} />,
                                    title: "Reliability",
                                    desc: "Consistency in quality and commitment that our partners can depend on."
                                },
                                {
                                    icon: <Users size={36} />,
                                    title: "People Power",
                                    desc: "Empowering our workforce to lead with confidence and collaborative strength."
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50, rotateX: -25, filter: "blur(5px)" }}
                                    whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{
                                        duration: 1.2,
                                        delay: (index + 3) * 0.15,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
                                    className="relative flex flex-col items-center text-center p-6 transition-all duration-300 w-full md:w-[300px] group"
                                    style={{ perspective: "1200px" }}
                                >
                                    {/* Subtly removed card container styling */}

                                    {/* Icon Container with subtle glow */}
                                    <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gray-100 group-hover:bg-[#8b0000] transition-colors duration-500">
                                        <div className="relative z-10 text-black group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                                            {value.icon}
                                        </div>
                                    </div>

                                    {/* Forced Gap */}
                                    <div className="h-6 w-full"></div>

                                    <h3 className="text-2xl font-main font-bold text-black uppercase mb-4 tracking-tight">{value.title}</h3>
                                    <p className="text-gray-500 text-base leading-relaxed font-main">
                                        {value.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Coming Soon Message - Refined Gap */}
                    <div className="flex flex-col items-center" style={{ marginTop: '100px', marginBottom: '100px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="w-16 h-[1px] bg-gray-200"></div>
                            <p className="font-main text-gray-400 italic tracking-[0.3em] text-[11px] uppercase py-2">Next Part Coming Soon</p>
                            <div className="w-16 h-[1px] bg-gray-200"></div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
};

export default OurStoryPage;
