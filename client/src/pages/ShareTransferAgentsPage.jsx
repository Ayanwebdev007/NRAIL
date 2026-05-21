import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

const ShareTransferAgentsPage = () => {
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

            <div className="py-12 md:py-20 bg-[#fafafa]/50">
                <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="bg-white rounded-2xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden"
                    >
                        <div className="p-8 md:p-12">
                            {/* Agent Details */}
                            <div className="space-y-6">
                                {/* Company Name */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#8b0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Building2 size={20} className="text-[#8b0000]" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.15em] text-black/40 font-semibold mb-1">Company</p>
                                        <p className="text-lg md:text-xl font-bold text-[#1a1a1a] leading-snug">
                                            MUFG Intime India Private Limited
                                        </p>
                                    </div>
                                </div>

                                <div className="h-px bg-gray-100 w-full"></div>

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

                                <div className="h-px bg-gray-100 w-full"></div>

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

                                <div className="h-px bg-gray-100 w-full"></div>

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
                </div>
            </div>

            <div className="h-20 md:h-32 bg-white"></div>

            <Footer />
        </div>
    );
};

export default ShareTransferAgentsPage;

