import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import legacyHero from '../assets/Leadership Header Pic.JPG';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import founderImg from '../assets/leadership founder.JPG';
import rnaLeadership from '../assets/Mr R N Agarwal leadership.JPG';
import redTexture from '../assets/red texture.jpg';

const LeadershipPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-white min-h-screen font-main">
            <Navbar />

            {/* Hero Section - 95vh height */}
            <div className="relative w-full h-[95vh]">
                <div
                    className="absolute inset-0 bg-cover"
                    style={{ 
                        backgroundImage: `url("${legacyHero}")`,
                        backgroundPosition: 'center 40%'
                    }}
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
                            fontSize: '48px',
                            fontWeight: 300,
                            lineHeight: 1.1,
                            letterSpacing: '0.02em',
                            color: '#ffffffff'
                        }}
                    >
                        Leaders Who Build What’s Next.
                    </motion.h1>
                </div>
            </div>

            {/* Breadcrumbs - Premium Design with forced spacing */}
            <div className="container mx-auto px-6" style={{ marginTop: '5px ', marginBottom: '50px' }}>
                <div className="flex items-center text-lg text-gray-500 font-normal">
                    <Link to="/" className="hover:text-primary transition-colors hover:bg-gray-50 px-2 py-1 rounded-md">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                    <span className="hover:text-primary transition-colors hover:bg-gray-50 px-2 py-1 rounded-md">About Us</span>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                    <span className="text-primary font-medium px-2 py-1">Leadership</span>
                </div>
            </div>

            {/* Leadership Text Content */}
            <div className="bg-white pt-12 pb-32 lg:pb-64 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-none"
                        style={{ marginBottom: '100px' }}
                    >
                        <p
                            className="text-black text-2xl md:text-3xl lg:text-[32px] font-light text-left tracking-tight"
                            style={{ lineHeight: '1.1' }}
                        >
                            Leadership at NRAIL extends beyond the present, shaping pathways that empower teams, enhance infrastructure, and redefine industry benchmarks. A forward-thinking approach drives enduring performance and purposeful evolution.
                        </p>
                    </motion.div>

                    {/* Founder and CMD Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 - Founder */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="bg-[#f8f8f8] p-6 flex flex-col md:flex-row gap-6 items-start md:items-center"
                        >
                            <div className="flex-shrink-0 w-56 h-56 bg-[#f8f8f8] flex items-center justify-center self-center">
                                <div className="w-40 h-40 overflow-hidden">
                                    <img
                                        src={founderImg}
                                        alt="Shri N R Agarwal"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <div>
                                    <h3 className="text-xl font-bold text-black leading-tight">Shri N R Agarwal <span className="text-gray-500 text-sm italic font-normal">(1932-2011)</span></h3>
                                    <p className="text-gray-700 text-sm font-medium mt-1">Our Inspiration & Beloved Founder</p>
                                </div>
                                <div className="h-[1px] w-[90%] bg-gray-300 my-2"></div>
                                <div style={{ marginTop: '16px' }}>
                                    <p className="text-[#8b0000] text-xs font-bold uppercase tracking-widest mt-1">Founder Chairman</p>
                                </div>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-[12px] cursor-pointer group w-fit"
                                >
                                    <span className="text-[#8b0000] font-bold text-sm tracking-wide">READ MORE</span>
                                    <div className="h-[2px] w-[30px] bg-[#8b0000] opacity-50 group-hover:w-[45px] transition-all duration-300"></div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Card 2 - CMD */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-[#f8f8f8] p-6 flex flex-col md:flex-row gap-6 items-start md:items-center"
                        >
                            <div className="flex-shrink-0 w-56 h-56 bg-[#f8f8f8] flex items-center justify-center self-center">
                                <div className="w-40 h-40 overflow-hidden">
                                    <img
                                        src={rnaLeadership}
                                        alt="R N Agarwal"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <div>
                                    <h3 className="text-xl font-bold text-black leading-tight">Mr. R N Agarwal</h3>
                                    <p className="text-gray-700 text-sm font-medium mt-1">Driving Excellence & Innovation</p>
                                </div>
                                <div className="h-[1px] w-[90%] bg-gray-300 my-2"></div>
                                <div style={{ marginTop: '16px' }}>
                                    <p className="text-[#8b0000] text-xs font-bold uppercase tracking-widest mt-1">Chairman & Managing Director</p>
                                </div>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-[12px] cursor-pointer group w-fit"
                                >
                                    <span className="text-[#8b0000] font-bold text-sm tracking-wide">READ MORE</span>
                                    <div className="h-[2px] w-[30px] bg-[#8b0000] opacity-50 group-hover:w-[45px] transition-all duration-300"></div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                    {/* Explicit physical spacer to force gap */}
                    <div className="h-24 md:h-48 w-full bg-white block"></div>
                </div>
            </div>
            {/* Board of Directors Section */}
            <div
                className="w-full relative pt-40 pb-48 md:pt-56 md:pb-64"
                style={{
                    backgroundImage: `url("${redTexture}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Dark Overlay for better contrast */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    {/* Explicit gap from the top of the section */}
                    <div className="h-12 md:h-16 w-full"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white !text-white tracking-tight">Board of Directors</h2>
                    </motion.div>

                    {/* Glassmorphism Container */}
                    <div
                        className="bg-black/40 backdrop-blur-md w-full"
                        style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '60px', paddingRight: '60px' }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                            {[
                                {
                                    name: "Mr. R N Agarwal",
                                    title: "Chairman & MD",
                                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                                },
                                {
                                    name: "Mr. Raunak Agarwal",
                                    title: "Executive Director",
                                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                                },
                                {
                                    name: "Mrs. Reena Agarwal",
                                    title: "Executive Director",
                                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                                },
                                {
                                    name: "Mr. Rohan Agarwal",
                                    title: "Executive Director & CEO",
                                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                                },
                                {
                                    name: "Mr. P K Mundra",
                                    title: "Executive Director & CFO",
                                    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
                                },
                                {
                                    name: "Mr. Rajiv Kumar Bakshi",
                                    title: "Independent Director",
                                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                                },
                                {
                                    name: "Mrs. Sunita Nair",
                                    title: "Independent Director",
                                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                                },
                                {
                                    name: "Mr. K L Chandak",
                                    title: "Independent Director",
                                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
                                },
                                {
                                    name: "Mr. Sanjay Sinha",
                                    title: "Independent Director",
                                    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop"
                                },
                                {
                                    name: "Mr. Mahendra Kumar Gupta",
                                    title: "Independent Director",
                                    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop"
                                },
                            ].map((director, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col gap-4 group"
                                >
                                    {/* Circle Picture */}
                                    <div
                                        className="w-20 h-20 rounded-full bg-white/20 border border-white/30 flex-shrink-0 group-hover:scale-105 transition-transform duration-300 overflow-hidden"
                                    >
                                        <img
                                            src={director.image}
                                            alt={director.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-white font-bold text-lg leading-tight mb-1">{director.name}</h3>
                                        <p className="text-white/70 text-sm font-medium">{director.title}</p>
                                    </div>

                                    <div className="h-[1px] w-full bg-white/20 mb-2 group-hover:bg-white/40 transition-colors"></div>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 cursor-pointer w-fit"
                                    >
                                        <span className="text-white text-sm font-bold tracking-wide">View Profile</span>
                                        <span className="text-white transform group-hover:translate-x-1 transition-transform">→</span>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Explicit gap below the rectangle to show background */}
                    <div className="h-24 md:h-40 w-full"></div>
                </div>
            </div>

            {/* Senior Management Team Section */}
            <div className="bg-[#fafafa] pt-40 pb-72 md:pt-56 md:pb-96 border-t border-gray-100">
                <div className="container mx-auto px-12 md:px-24 max-w-6xl">
                    {/* Top Gap Spacer - Matched with Board of Directors */}
                    <div className="h-12 md:h-16 w-full"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h2 className="text-4xl md:text-6xl font-[Outfit] font-extralight tracking-tight" style={{ color: '#8b0000' }}>Senior Management Team</h2>
                    </motion.div>

                    {/* Fine-tuned Vertical Spacer */}
                    <div className="h-8 md:h-12 w-full"></div>

                    <div className="max-w-6xl mx-auto flex flex-col gap-12">
                        {[
                            {
                                name: "Ravi Kumar Sharma",
                                designation: "Vice President - Marketing Board"
                            },
                            {
                                name: "Aditya Sharma",
                                designation: "Vice President - Sales and Marketing"
                            },
                            {
                                name: "Joshua Madhuker",
                                designation: "President - Corporate Affairs"
                            },
                            {
                                name: "Pooja Daftary",
                                designation: "Company Secretary & Compliance Officer"
                            },
                            {
                                name: "Ramesh Harkulkar",
                                designation: "Senior General Manager - Accounts and Taxation"
                            }
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 pb-12 border-b border-gray-200/60 group-hover:border-[#8b0000]/30 transition-colors duration-500">
                                    {/* Vertical Index Number */}
                                    <span className="text-4xl md:text-5xl font-[Outfit] font-bold text-gray-200 group-hover:text-[#8b0000]/20 transition-colors duration-500 min-w-[60px]">
                                        0{index + 1}
                                    </span>

                                    {/* Content Group */}
                                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-12 flex-grow md:whitespace-nowrap">
                                        <h3 className="text-3xl md:text-3xl lg:text-4xl font-[Outfit] text-black font-light tracking-tight group-hover:text-[#8b0000] transition-colors duration-500 whitespace-nowrap">
                                            {member.name}
                                        </h3>
                                        <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] mt-2 md:mt-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap" style={{ color: '#8b0000' }}>
                                            {member.designation}
                                        </p>
                                    </div>

                                    {/* Perspective Arrow - Subtle Detail */}
                                    <motion.div
                                        className="hidden md:block opacity-0 lg:group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500"
                                    >
                                        <ChevronRight className="w-6 h-6 text-[#8b0000] font-thin" strokeWidth={1} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final Bottom Spacer to Footer - Matched with existing style */}
                    <div className="h-32 md:h-48 w-full"></div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default LeadershipPage;
