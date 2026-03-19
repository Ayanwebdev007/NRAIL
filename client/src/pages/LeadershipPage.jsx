import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import legacyHero from '../assets/Leadership Header Pic.JPG';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { IoEnterOutline } from "react-icons/io5";

import founderImg from '../assets/leadership founder.JPG';
import rnaLeadership from '../assets/Mr R N Agarwal leadership.JPG';
import raunakLeadership from '../assets/Raunak Agarwal.JPG';
import reenaLeadership from '../assets/Mrs Reena Agarwal.JPG';
import rohanALeadership from '../assets/Rohan A.JPG';
import pkMundraLeadership from '../assets/PK Mundra.jpeg';
import sanjaySinhaLeadership from '../assets/sanjaysinha.jpg';
import klChandakLeadership from '../assets/k_l_chandak.jpg';
import sunitaNairLeadership from '../assets/Sunita Nair.jpg';
import mahendraGuptaLeadership from '../assets/Mahendra Gupta.jpg';
import rkBakshiLeadership from '../assets/rk_bakshi.jpg';
import redTexture from '../assets/red texture.jpg';

// Panorama Leadership Assets
import rajanPng from '../assets/panorama/rajan.webp';
import navinPng from '../assets/panorama/navin.webp';
import shivaanPng from '../assets/panorama/shivaan.webp';
import sidharthPng from '../assets/panorama/Sidharth.webp';
import amitPng from '../assets/panorama/amit.png';
import kritiPng from '../assets/panorama/Kriti.png';
import aprajitaPng from '../assets/panorama/Aparajita.png';

const leadersList = [
    {
        id: 1,
        name: "Mr. R N Agarwal",
        role: "Chairman & MD",
        image: rnaLeadership,
        bgPos: "center",
        bgSize: "cover",
        bio: "N R Agarwal Industries Limited is guided by a distinguished Board of Directors under the leadership of Mr. R. N. Agarwal, Chairman & Managing Director. An Electrical Engineer and Management Graduate from the United States, Mr. Agarwal brings over two decades of deep industry expertise. As a promoter-director, he has been instrumental in shaping the company’s growth trajectory, strengthening its presence across domestic and international markets. His strategic foresight, analytical rigor, and decisive leadership continue to drive NRAIL’s sustained excellence and long-term vision."
    },
    {
        id: 2,
        name: "Mr. Raunak Agarwal",
        role: "Executive Director",
        image: raunakLeadership,
        bgPos: "center",
        bgSize: "cover",
        bio: "Mr. Raunak Agrawal holds a Business Administration degree from Kingston University, London, and serves as a Promoter and Director of N R Agarwal Industries Limited. Combining international exposure with progressive leadership capabilities, he has been instrumental in strengthening the Company’s market positioning. His strategic oversight of marketing and business expansion initiatives has enhanced NRAIL’s presence across key domestic and international markets. Through structured planning and decisive action, he continues to contribute meaningfully to the Company’s long-term development."
    },
    {
        id: 3,
        name: "Mrs. Reena Agarwal",
        role: "Executive Director",
        image: reenaLeadership,
        bgPos: "center",
        bgSize: "cover",
        bio: "Mrs. Reena Agarwal is an Executive Director at N R Agarwal Industries Limited and a respected member of the Agarwal family. With a background in Commerce and more than 17 years of experience in Human Resources and administration, she contributes significantly to building robust systems and fostering a disciplined, performance-driven workplace environment."
    },
    {
        id: 4,
        name: "Mr. Rohan Agarwal",
        role: "Executive Director & CEO",
        image: rohanALeadership,
        bgPos: "center",
        bgSize: "cover",
        bio: "Mr. Rohan Agrawal is a Promoter Director at N R Agarwal Industries Limited and a graduate in Business Administration from Kingston University, London. He plays a pivotal role in managing strategic purchasing, project management, and information technology functions. With strong research capabilities and sharp commercial insight, he has enhanced sourcing strategies and operational systems, supporting the Company’s expansion and performance excellence."
    },
    {
        id: 5,
        name: "Mr. P K Mundra",
        role: "Executive Director & CFO",
        image: pkMundraLeadership,
        bgPos: "center",
        bgSize: "cover",
        bio: "Mr. P. K. Mundra, Executive Director & Chief Financial Officer of N R Agarwal Industries Limited, holds qualifications in Company Secretariatship along with an MBA. With over 41 years of extensive professional experience, he brings deep expertise across finance, taxation, legal compliance, labour relations, secretarial practices, costing, insurance, procurement, and corporate governance. His broad strategic insight and operational command strengthen the Company’s financial discipline and governance framework, playing a vital role in sustaining organizational stability and growth."
    },
    {
        id: 6,
        name: "Mr. Rajiv Kumar Bakshi",
        role: "Independent Director",
        image: rkBakshiLeadership,
        bgPos: "center",
        bgSize: "contain",
        bgColor: "white",
        bio: "Mr. Rajiv Kumar Bakshi is a postgraduate in Science and a distinguished banking leader with more than 37 years of experience across key areas of finance and banking. His career includes leadership roles in branch management, credit strategy, treasury, international banking, and operational transformation across India and global markets. He held the prestigious position of Executive Director at Bank of Baroda from 2008 to 2012 and has also led overseas operations for Bank of India and IDBI. Presently, he serves as a Member of the Reserve Bank of India Services Board and as Senior Adviser to Centrum Capital Ltd., while contributing his expertise as an Independent Director on multiple corporate boards."
    },
    {
        id: 7,
        name: "Mrs. Sunita Nair",
        role: "Independent Director",
        image: sunitaNairLeadership,
        bgPos: "center",
        bgSize: "contain",
        bgColor: "white",
        bio: "Mrs. Sunita Ajay Nair is a practicing advocate enrolled with the Bar Council of Maharashtra & Goa, recognized for her comprehensive legal expertise and multidisciplinary academic credentials. A Commerce graduate from Mumbai University, she further pursued advanced qualifications including a Post Graduate Diploma in Marketing and Administration, a Diploma in Exports, and a Bachelor’s degree in Education. Her professional experience includes a distinguished tenure in education before transitioning fully into legal practice. She specializes in Property Law, Trade and Commercial Legislation, Employment Regulations, and statutes safeguarding women and children’s rights, offering strong advisory and governance support."
    },
    {
        id: 8,
        name: "Mr. K L Chandak",
        role: "Independent Director",
        image: klChandakLeadership,
        bgPos: "center",
        bgSize: "contain",
        bgColor: "white",
        bio: "Mr. K. L. Chandak brings over 45 years of distinguished experience in the paper industry. He served as Executive Director of West Coast Paper Mills Ltd. for 17 years, where he played a pivotal role in the company’s turnaround and strategic transformation. With comprehensive expertise across corporate management, including finance and accounts, he contributes seasoned leadership and governance insight. He also serves as an Independent Director at Shree Rama Newsprint Limited."
    },
    {
        id: 9,
        name: "Mr. Sanjay Sinha",
        role: "Independent Director",
        image: sanjaySinhaLeadership,
        bgPos: "center",
        bgSize: "contain",
        bgColor: "white",
        bio: "Mr. Sanjay Sinha is an accomplished finance leader with over four decades of expertise in financial strategy, portfolio management, and corporate planning. As former MD & CEO of Axis Trustee Services Limited, and through his associations with Axis Bank and State Bank of India, he has demonstrated strong institutional leadership. His engagement with regulatory and government bodies reflects his commitment to market development and policy advancement."
    },
    {
        id: 10,
        name: "Mr. Mahendra Kumar Gupta",
        role: "Independent Director",
        image: mahendraGuptaLeadership,
        bgPos: "center",
        bgSize: "contain",
        bgColor: "white",
        bio: "With 30+ years of professional experience, Mr. Gupta specializes in expansion funding, corporate finance strategy, project execution, ERP-SAP deployment, financial control mapping, and regulatory compliance including Income Tax and GST. His expertise strengthens financial governance and supports disciplined organizational growth."
    }
];

const LeadershipPage = () => {
    const location = useLocation();
    const gridRef = useRef(null);
    const [selectedLeader, setSelectedLeader] = useState(null);
    const extendedLeaders = [...leadersList, ...leadersList, ...leadersList];

    useEffect(() => {
        window.scrollTo(0, 0);
        // Initialize scroll to the middle group
        if (gridRef.current) {
            const singleSetWidth = leadersList.length * 350; // 320 card + 30 gap
            gridRef.current.scrollLeft = singleSetWidth;
        }
    }, [location]);

    const handleScroll = () => {
        if (!gridRef.current) return;
        const { scrollLeft, scrollWidth } = gridRef.current;
        const singleSetWidth = leadersList.length * 350;

        // If we reach the end of the middle group (going right), jump back to start of middle group
        if (scrollLeft >= singleSetWidth * 2) {
            gridRef.current.scrollLeft = scrollLeft - singleSetWidth;
        } 
        // If we reach the start of the middle group (going left), jump to end of middle group
        else if (scrollLeft <= singleSetWidth - 350) { // Small buffer to ensure seamless
             gridRef.current.scrollLeft = scrollLeft + singleSetWidth;
        }
    };

    const scroll = (direction) => {
        if (gridRef.current) {
            const scrollAmount = 350; // Card width (320) + gap (30)
            gridRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

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
                    <div className="h-4 md:h-8 w-full bg-white block"></div>
                </div>
            </div>
            {/* Old Board of Directors Section - Commented Out
            <div
                className="w-full relative pt-40 pb-48 md:pt-56 md:pb-64"
                style={{
                    backgroundImage: `url("${redTexture}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
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

                    <div
                        className="bg-black/40 backdrop-blur-md w-full"
                        style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '60px', paddingRight: '60px' }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                            {[
                                {
                                    name: "Mr. R N Agarwal",
                                    title: "Chairman & MD",
                                    image: rnaLeadership
                                },
                                {
                                    name: "Mr. Raunak Agarwal",
                                    title: "Executive Director",
                                    image: raunakLeadership
                                },
                                {
                                    name: "Mrs. Reena Agarwal",
                                    title: "Executive Director",
                                    image: reenaLeadership
                                },
                                {
                                    name: "Mr. Rohan Agarwal",
                                    title: "Executive Director & CEO",
                                    image: rohanALeadership
                                },
                                {
                                    name: "Mr. P K Mundra",
                                    title: "Executive Director & CFO",
                                    image: pkMundraLeadership
                                },
                                {
                                    name: "Mr. Rajiv Kumar Bakshi",
                                    title: "Independent Director",
                                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                                },
                                {
                                    name: "Mrs. Sunita Nair",
                                    title: "Independent Director",
                                    image: sunitaNairLeadership
                                },
                                {
                                    name: "Mr. K L Chandak",
                                    title: "Independent Director",
                                    image: klChandakLeadership
                                },
                                {
                                    name: "Mr. Sanjay Sinha",
                                    title: "Independent Director",
                                    image: sanjaySinhaLeadership
                                },
                                {
                                    name: "Mr. Mahendra Kumar Gupta",
                                    title: "Independent Director",
                                    image: mahendraGuptaLeadership
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

                    <div className="h-24 md:h-40 w-full"></div>
                </div>
            </div>
            */}

            <section className="leadership-outer-container">
                <div className="leadership-grid-bg relative overflow-hidden pt-16 pb-48 md:pt-24 md:pb-72">
                    {/* Texture Overlay from Manufacturing Edge */}
                    <div className="texture-overlay"></div>
                    
                    <div className="leadership-navigation-container flex flex-col items-center justify-center gap-12 relative z-10 w-full px-4">
                        
                        {/* Title - Now inside the background section */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-6"
                        >
                            <h2 className="text-4xl md:text-6xl font-normal !text-white tracking-widest uppercase">
                                Board of Directors
                            </h2>
                        </motion.div>

                        <div className="flex items-center justify-center gap-6 w-full">
                            {/* Left Arrow */}
                            <button 
                                onClick={() => scroll('left')}
                                className="nav-arrow-static"
                                aria-label="Scroll Left"
                            >
                                <ChevronLeft size={32} />
                            </button>
                        
                        {/* Viewport - Precisely 1370px for 4 cards + gaps */}
                        <div className="leadership-viewport w-full max-w-[1370px] overflow-hidden">
                            <div 
                                className="leadership-grid" 
                                ref={gridRef}
                                onScroll={handleScroll}
                            >
                                {extendedLeaders.map((leader, index) => (
                                    <motion.div
                                        key={`${leader.id}-${index}`}
                                        className="leadership-glass-card group"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: (index % leadersList.length) * 0.1, duration: 0.6 }}
                                    >
                                        <div className="glass-card-inner">
                                            {/* Circle Image Wrapper */}
                                            <div className="leader-circle-wrapper flex items-center justify-center overflow-hidden">
                                                <div
                                                    className="leader-circle-image-bg w-full h-full grayscale transition-all duration-500 group-hover:grayscale-0"
                                                    style={{
                                                        backgroundImage: `url(${leader.image})`,
                                                        backgroundPosition: leader.bgPos,
                                                        backgroundSize: leader.bgSize,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundColor: leader.bgColor || 'transparent'
                                                    }}
                                                />
                                            </div>

                                            {/* Name and Designation */}
                                            <div className="leader-details">
                                                <h3 className="leader-name">
                                                    {leader.name}
                                                </h3>
                                                <p className="leader-role">
                                                    {leader.role}
                                                </p>
                                                
                                                <div className="leader-separator" />
                                                
                                                <motion.div
                                                    whileHover={{ x: 5 }}
                                                    className="leader-view-profile cursor-pointer"
                                                    onClick={() => setSelectedLeader(leader)}
                                                >
                                                    <span>View Profile</span>
                                                    <span className="arrow">→</span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button 
                            onClick={() => scroll('right')}
                            className="nav-arrow-static"
                            aria-label="Scroll Right"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </section>

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

            <style dangerouslySetInnerHTML={{ __html: `
                .leadership-outer-container {
                    width: 100%;
                    background-color: #fff;
                    padding-top: 100px;
                }

                .leadership-grid-bg {
                    min-height: 700px;
                    display: flex;
                    align-items: center;
                    background-color: #4a0000;
                    background-image: 
                        radial-gradient(at 0% 0%, #660000 0px, transparent 50%),
                        radial-gradient(at 100% 0%, #2a0000 0px, transparent 50%),
                        radial-gradient(at 100% 100%, #660000 0px, transparent 50%),
                        radial-gradient(at 0% 100%, #2a0000 0px, transparent 50%),
                        radial-gradient(at 50% 50%, #4a0000 0px, transparent 50%);
                    background-size: 150% 150%;
                    animation: meshGradientLeadership 10s ease infinite;
                    position: relative;
                }

                @keyframes meshGradientLeadership {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .texture-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png");
                    opacity: 0.15;
                    pointer-events: none;
                    mix-blend-mode: overlay;
                    z-index: 1;
                }

                .leadership-navigation-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }

                .leadership-viewport {
                    flex: 1;
                    max-width: 1370px;
                    overflow: hidden;
                    position: relative;
                }

                .leadership-grid {
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: flex-start;
                    gap: 30px;
                    overflow-x: auto;
                    padding-bottom: 20px;
                    padding-top: 20px;
                    scroll-snap-type: x mandatory;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                    -webkit-overflow-scrolling: touch;
                }

                .leadership-grid::-webkit-scrollbar {
                    display: none;
                }

                .nav-arrow-static {
                    flex-shrink: 0;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: #ffffff;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                }

                .nav-arrow-static:hover {
                    background: #ffcc00;
                    color: #8b0000;
                    border-color: #ffcc00;
                    box-shadow: 0 0 25px rgba(255, 204, 0, 0.5);
                    transform: scale(1.1);
                }

                .leadership-glass-card {
                    flex: 0 0 320px;
                    max-width: 320px;
                    background: rgba(0, 0, 0, 0.4);
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    padding: 40px 20px 5px 20px;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                    overflow: hidden;
                    scroll-snap-align: start;
                    box-shadow: none;
                }

                .leadership-glass-card::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
                    transition: 0.5s;
                }

                .leadership-glass-card:hover::after {
                    left: 100%;
                }

                .leadership-glass-card:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(255, 255, 255, 0.25);
                    transform: translateY(-15px);
                    box-shadow: none;
                }

                .glass-card-inner {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    z-index: 2;
                    position: relative;
                }

                .leader-circle-wrapper {
                    width: 180px;
                    height: 180px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-bottom: 30px;
                    border: 2px solid rgba(255, 255, 255, 0.1);
                    background: rgba(0, 0, 0, 0.2);
                    transition: all 0.5s ease;
                }

                .leadership-glass-card:hover .leader-circle-wrapper {
                    border-color: #ffcc00;
                    transform: scale(1.05);
                    box-shadow: none;
                }

                .leader-circle-image-bg {
                    filter: grayscale(100%);
                    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                }

                .leadership-glass-card:hover .leader-circle-image-bg {
                    filter: grayscale(0%);
                    transform: scale(1.1);
                }

                .leader-details {
                    text-align: center;
                }

                .leader-name {
                    font-family: 'Outfit', sans-serif;
                    color: #ffffff;
                    font-size: 20px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }

                .leader-role {
                    font-family: 'Outfit', sans-serif;
                    color: #ffcc00;
                    font-size: 13px;
                    font-weight: 500;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                }

                .leader-separator {
                    height: 1px;
                    width: 40px;
                    background: rgba(255, 255, 255, 0.2);
                    margin: 12px auto;
                    transition: width 0.3s ease;
                }

                .leadership-glass-card:hover .leader-separator {
                    width: 60px;
                    background: rgba(255, 204, 0, 0.5);
                }

                .leader-view-profile {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #ffffff;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    cursor: pointer;
                    opacity: 0.7;
                    transition: all 0.3s ease;
                }

                .leader-view-profile:hover {
                    opacity: 1;
                    color: #ffcc00;
                }

                .leader-view-profile .arrow {
                    transition: transform 0.3s ease;
                    font-size: 16px;
                }

                .leader-view-profile:hover .arrow {
                    transform: translateX(5px);
                }

                @media (max-width: 1024px) {
                    .leadership-container {
                        padding-top: 15px;
                        padding-bottom: 20px;
                    }

                    .leadership-glass-card {
                        flex: 0 0 280px;
                        max-width: 280px;
                        padding: 25px 15px 5px 15px;
                        border-radius: 20px;
                    }

                    .leader-circle-wrapper {
                        width: 140px;
                        height: 140px;
                        margin-bottom: 15px;
                    }

                    .leader-name {
                        font-size: 16px;
                    }

                    .leader-role {
                        font-size: 11px;
                    }
                }

                @media (max-width: 768px) {
                    .leadership-glass-card {
                        flex: 0 0 240px;
                        max-width: 240px;
                        padding: 20px 10px 5px 10px;
                        border-radius: 16px;
                    }

                    .leader-circle-wrapper {
                        width: 110px;
                        height: 110px;
                        margin-bottom: 12px;
                    }

                    .leader-name {
                        font-size: 14px;
                    }

                    .leader-role {
                        font-size: 10px;
                    }
                }

                .pattern-dots {
                    background-image: radial-gradient(#ffffff 1px, transparent 1px);
                    background-size: 20px 20px;
                    opacity: 0.15;
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #d1d5db;
                }
            ` }} />
            
            <AnimatePresence>
                {selectedLeader && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                        onClick={() => setSelectedLeader(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 30 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="bg-white rounded-none w-full max-w-5xl h-[520px] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.7)] relative flex flex-col md:flex-row overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Left Banner */}
                            <div className="md:w-[40%] h-[240px] md:h-full bg-gradient-to-br from-[#8b0000] via-[#700000] to-[#4a0000] flex flex-col items-center justify-center p-6 md:p-10 relative overflow-hidden flex-shrink-0">
                                {/* Abstract texture overlay */}
                                <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                                
                                <div className="relative z-10 flex flex-col items-center w-full">
                                    <div 
                                        className="w-36 h-36 md:w-48 md:h-48 rounded-full border-[6px] border-white/10 shadow-2xl mx-auto mb-4 bg-white overflow-hidden ring-4 ring-[#8b0000]/50"
                                        style={{ backgroundColor: selectedLeader.bgColor || 'white' }}
                                    >
                                        <div 
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `url(${selectedLeader.image})`,
                                                backgroundSize: selectedLeader.bgSize || 'cover',
                                                backgroundPosition: 'top center',
                                                backgroundRepeat: 'no-repeat'
                                            }}
                                        />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-[Outfit] font-bold text-white text-center mb-1 leading-tight">{selectedLeader.name}</h3>
                                    <p className="text-[12px] md:text-sm text-[#ffcccc] font-medium text-center uppercase tracking-wider">{selectedLeader.role}</p>
                                </div>
                            </div>
                            
                            {/* Bio Content Area */}
                            <div className="md:w-[60%] h-full bg-white flex flex-col items-center justify-center relative overflow-hidden">
                                <button
                                    onClick={() => setSelectedLeader(null)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-[#8b0000] transition-all duration-300 bg-white hover:bg-red-50 p-2 z-20 shadow-sm border border-gray-100 hover:rotate-90"
                                    aria-label="Close modal"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                
                                <div className="w-full max-w-[85%] px-4 py-8 flex flex-col items-center justify-center min-h-0">
                                    <div className="w-full mb-6 relative">
                                        <span className="text-[4rem] md:text-[6rem] font-serif absolute -top-8 -left-4 text-[#8b0000]/5 select-none leading-none">“</span>
                                        <div className="h-[2px] w-10 bg-[#8b0000] mb-4 relative z-10"></div>
                                        <h4 className="text-gray-900 font-[Outfit] text-lg md:text-xl font-light italic leading-tight relative z-10 pr-8">
                                            Leading with vision, 
                                            <span className="block text-[#8b0000] font-semibold not-italic mt-1">Driving Excellence.</span>
                                        </h4>
                                    </div>

                                    <div className="w-full overflow-y-auto pr-6 custom-scrollbar mb-6 max-h-[280px]">
                                        <div className="max-w-none text-gray-700 leading-relaxed font-light">
                                            <p className="whitespace-pre-line text-[14px] md:text-[15px] text-justify tracking-tight opacity-90">{selectedLeader.bio}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Board of Directors</p>
                                        <div className="flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-none bg-[#8b0000]"></div>
                                            <div className="w-1.5 h-1.5 rounded-none bg-[#8b0000]/30"></div>
                                            <div className="w-1.5 h-1.5 rounded-none bg-[#8b0000]/10"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LeadershipPage;
