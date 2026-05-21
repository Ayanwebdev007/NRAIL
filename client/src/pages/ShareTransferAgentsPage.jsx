import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import InvestorCard from '../components/Investors/InvestorCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, MapPin, Phone, Mail, Building2 } from 'lucide-react';

const ShareTransferAgentsPage = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            <div className="h-20 md:h-28 w-full bg-white"></div>

            <div className="pt-16 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b0000]/[0.02] to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-24 relative z-10">
                    <div className="flex flex-wrap items-center gap-1.5 text-lg mb-16 font-normal">
                        <Link to="/" className="text-[#2d6ca2] hover:text-[#800000] transition-colors px-1">Home</Link>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span className="text-[#2d6ca2] px-1 pointer-events-none">Investors</span>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span className="text-[#800000] font-medium px-1">Share Transfer Agents</span>
                    </div>

                    <div className="h-6 md:h-8"></div>

                    <motion.h1
                        className="text-[48px] font-extrabold mb-8 leading-[0.9] uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="block text-black">Share Transfer</span>
                        <span className="block text-[#8b0000]">Agents</span>
                    </motion.h1>

                    <div className="h-8 md:h-12 w-full"></div>
                </div>
            </div>

            <div className="py-24 md:py-32 bg-[#fafafa]/50">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <InvestorCard 
                            title="Share Transfer Agent"
                            number="01"
                            type="file"
                            onClick={() => setShowPopup(true)}
                        />
                    </motion.div>
                </div>
            </div>

            <div className="h-20 md:h-32 bg-white"></div>

            <Footer />

            {/* Address Content Popup */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/90 z-[99999] flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setShowPopup(false)}
                    >
                        {/* Header */}
                        <div 
                            className="w-full max-w-2xl flex justify-between items-center mb-6 text-white bg-white/10 px-10 md:px-16 py-6 rounded-xl border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-1 min-w-0">
                                <span className="text-sm md:text-xl font-bold tracking-wider uppercase text-[#b01e1e] truncate max-w-[200px] md:max-w-md">
                                    Share Transfer Agent
                                </span>
                                <span className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
                                    Address for Correspondence
                                </span>
                            </div>
                            <button
                                onClick={() => setShowPopup(false)}
                                className="p-3 hover:bg-white/10 rounded-full transition-all duration-300"
                            >
                                <X size={28} className="text-white" />
                            </button>
                        </div>

                        {/* Content Card */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className="w-full max-w-2xl bg-white rounded-xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Red accent bar */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-[#8b0000] via-[#b01e1e] to-[#8b0000]"></div>

                            <div style={{ padding: '56px 56px 56px 96px' }}>
                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] uppercase tracking-tight mb-2">
                                    Share Transfers Agents
                                </h2>

                                <div className="flex items-center gap-3 mb-10">
                                    <div className="h-[3px] w-12 bg-[#8b0000]"></div>
                                    <span className="text-xs uppercase tracking-[0.2em] text-[#8b0000] font-bold">
                                        Address for Correspondence
                                    </span>
                                </div>

                                {/* Agent Details */}
                                <div className="space-y-7">
                                    {/* Company Name */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#8b0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Building2 size={20} className="text-[#8b0000]" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.15em] text-black/40 font-semibold mb-1">Registrar and Share Transfer Agent</p>
                                            <p className="text-lg md:text-xl font-bold text-[#1a1a1a] leading-snug">
                                                MUFG Intime India Private Limited
                                            </p>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#8b0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <MapPin size={20} className="text-[#8b0000]" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.15em] text-black/40 font-semibold mb-1">Address</p>
                                            <p className="text-base md:text-lg text-[#333] leading-relaxed font-normal">
                                                C-101, 247 Park, L.B.S. Marg<br />
                                                Vikhroli (W), Mumbai – 400 083
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#8b0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Phone size={20} className="text-[#8b0000]" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.15em] text-black/40 font-semibold mb-1">Telephone</p>
                                            <a 
                                                href="tel:02249186000"
                                                className="text-base md:text-lg text-[#333] hover:text-[#8b0000] transition-colors font-normal"
                                            >
                                                022-49186000
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#8b0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Mail size={20} className="text-[#8b0000]" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.15em] text-black/40 font-semibold mb-1">Email</p>
                                            <a 
                                                href="mailto:rnt.helpdesk@in.mpms.mufg.com"
                                                className="text-base md:text-lg text-[#2d6ca2] hover:text-[#8b0000] transition-colors font-normal break-all"
                                            >
                                                rnt.helpdesk@in.mpms.mufg.com
                                            </a>
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

export default ShareTransferAgentsPage;

