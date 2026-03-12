import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const committeeData = [
    {
        title: "AUDIT COMMITTEE",
        members: [
            { name: "Shri R K Bakshi", role: "Chairman - Independent" },
            { name: "Shri K L Chandak", role: "Member - Independent" },
            { name: "Shri Sanjay Sinha", role: "Member - Independent" }
        ]
    },
    {
        title: "STAKEHOLDERS’ RELATIONSHIP COMMITTEE",
        members: [
            { name: "Shri R K Bakshi", role: "Chairman - Independent" },
            { name: "Shri K L Chandak", role: "Member - Independent" },
            { name: "Shri R N Agarwal", role: "Member - non-independent" }
        ]
    },
    {
        title: "NOMINATION AND REMUNERATION COMMITTEE",
        members: [
            { name: "Shri R K Bakshi", role: "Chairman - Independent" },
            { name: "Shri K L Chandak", role: "Member - Independent" },
            { name: "Shri Sanjay Sinha", role: "Member - Independent" }
        ]
    },
    {
        title: "CORPORATE SOCIAL RESPONSIBILITY COMMITTEE",
        members: [
            { name: "Shri R K Bakshi", role: "Chairman - Independent" },
            { name: "Shri K L Chandak", role: "Member - Independent" },
            { name: "Smt. Reena Agarwal", role: "Member - non-independent" }
        ]
    },
    {
        title: "RISK MANAGEMENT COMMITTEE",
        members: [
            { name: "Shri R K Bakshi", role: "Chairman - Independent" },
            { name: "Shri R N Agarwal", role: "Member - non-independent" },
            { name: "Shri Raunak Agarwal", role: "Member - non-independent" }
        ]
    }
];

const CommitteesPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            {/* Essential Spacer for fixed Navbar */}
            <div className="h-20 md:h-28 w-full bg-white"></div>

            {/* Radiant Hero Section */}
            <div className="pt-16 pb-12 border-b border-gray-100 relative overflow-hidden">
                {/* Subtle Gradient Glow */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b0000]/[0.02] to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-1.5 text-lg mb-16 font-normal">
                            <Link to="/" className="text-[#2d6ca2] hover:text-[#800000] transition-colors px-1">Home</Link>
                            <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                            <Link to="/our-story" className="text-[#2d6ca2] hover:text-[#800000] transition-colors px-1">Our Story</Link>
                            <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                            <span className="text-[#800000] font-medium px-1">Board of Committees</span>
                        </div>

                        {/* Smaller Spacer for balanced gap */}
                        <div className="h-6 md:h-8"></div>

                        <motion.h1
                            className="text-[48px] font-extrabold mb-8 leading-[0.9]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            <span className="block text-black uppercase">Board of</span>
                            <span className="block text-[#8b0000] uppercase">
                                Committees
                            </span>
                        </motion.h1>
                    </motion.div>

                    {/* Explicit Gap Below Title Before Cards */}
                    <div className="h-8 md:h-12 w-full"></div>
                </div>
            </div>

            {/* Radiant Corporate Grid */}
            <div className="py-24 md:py-32 bg-[#fafafa]/50">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {committeeData.map((committee, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: false, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="group relative rounded-2xl border border-[#8b0000]/20 hover:border-[#d4af37]/40 transition-all duration-500 overflow-hidden"
                                style={{
                                    padding: '32px 28px 28px',
                                    background: 'linear-gradient(145deg, #a01020 0%, #8b0000 40%, #600010 100%)',
                                    boxShadow: '0 4px 20px rgba(139,0,0,0.2), 0 8px 32px rgba(0,0,0,0.12)',
                                }}
                            >
                                {/* Left Accent Bar - Gold */}
                                <div
                                    className="absolute top-0 left-0 h-full"
                                    style={{ width: '4px', background: 'linear-gradient(180deg, #d4af37 0%, #f5d97e 50%, #d4af37 100%)' }}
                                ></div>

                                {/* Committee Title - White */}
                                <h3
                                    className="font-extrabold uppercase"
                                    style={{ fontSize: '13px', lineHeight: '1.5', marginBottom: '16px', letterSpacing: '0.08em', color: '#ffffff' }}
                                >
                                    {committee.title}
                                </h3>

                                {/* Divider - semi-transparent */}
                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', marginBottom: '16px' }}></div>

                                {/* Members List */}
                                <div className="flex flex-col" style={{ gap: '10px' }}>
                                    {committee.members.map((member, mIdx) => (
                                        <div
                                            key={mIdx}
                                            className="group/member transition-all duration-300"
                                            style={{
                                                padding: '10px 12px',
                                                borderRadius: '8px',
                                                background: 'rgba(255,255,255,0.08)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                                                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                            }}
                                        >
                                            <h4
                                                className="font-semibold"
                                                style={{ fontSize: '15px', lineHeight: '1.3', marginBottom: '3px', color: '#ffffff' }}
                                            >
                                                {member.name}
                                            </h4>
                                            <span
                                                className="font-semibold uppercase"
                                                style={{
                                                    fontSize: '11px',
                                                    letterSpacing: '0.1em',
                                                    color: '#d4af37',
                                                }}
                                            >
                                                {member.role}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div >

            {/* Bottom Spacer before Footer */}
            <div className="h-20 md:h-32 bg-white"></div>

            <Footer />
        </div >
    );
};

export default CommitteesPage;
