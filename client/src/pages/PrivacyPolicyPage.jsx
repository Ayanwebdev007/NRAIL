import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PrivacyPolicyPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            {/* Header Spacer */}
            <div className="h-20 md:h-28 w-full bg-white"></div>

            {/* Header Section */}
            <div className="pt-16 pb-12 relative overflow-hidden bg-[#fafafa]/30">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b0000]/[0.02] to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-24 relative z-10">
                    <div className="flex flex-wrap items-center gap-1.5 text-lg mb-12 font-normal">
                        <Link to="/" className="text-[#2d6ca2] hover:text-[#8b0000] transition-colors px-1">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-[#8b0000] font-medium px-1 uppercase tracking-wider">Privacy Policy</span>
                    </div>

                    <motion.h1
                        className="text-[40px] md:text-[56px] font-extrabold mb-4 leading-[1.1] uppercase tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="block text-black">Privacy</span>
                        <span className="block text-[#8b0000]">Policy</span>
                    </motion.h1>
                    <p className="text-gray-500 text-lg md:text-xl font-light">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-24 max-w-5xl">
                    <motion.div 
                        className="prose prose-lg max-w-none space-y-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#8b0000] border-b border-gray-100 pb-4">
                                Privacy Policy for <a href="https://www.nrail.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:underline">N R Agarwal Industries</a>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                At N R Agarwal Industries Limited (“Company”, “we”, “our”, or “us”), we respect your privacy and are committed to protecting the personal information shared with us through our website.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Information We Collect</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">We may collect:</p>
                            <ul className="list-disc pl-6 space-y-3 text-gray-600 text-lg font-light">
                                <li>Name, email address, phone number, and company details</li>
                                <li>Information submitted through contact or inquiry forms</li>
                                <li>Technical data such as IP address, browser type, and website usage information</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">How We Use Information</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">We use the collected information to:</p>
                            <ul className="list-disc pl-6 space-y-3 text-gray-600 text-lg font-light">
                                <li>Respond to inquiries and business requests</li>
                                <li>Improve our website and services</li>
                                <li>Share important updates or communications</li>
                                <li>Maintain website security and compliance</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Data Protection</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                We implement reasonable security measures to protect your information from unauthorized access, misuse, or disclosure.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Sharing of Information</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                We do not sell or rent personal information. Information may be shared only with authorized service providers or when required by law.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Cookies</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                Our website may use cookies to enhance user experience and analyze website traffic.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Third-Party Links</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Contact Us</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                For any privacy-related questions, please contact us through the contact details available on our website.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
