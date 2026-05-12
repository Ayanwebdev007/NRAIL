import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const TermsConditionsPage = () => {
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
                        <span className="text-[#8b0000] font-medium px-1 uppercase tracking-wider">Terms & Conditions</span>
                    </div>

                    <motion.h1
                        className="text-[40px] md:text-[56px] font-extrabold mb-4 leading-[1.1] uppercase tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="block text-black">Terms &</span>
                        <span className="block text-[#8b0000]">Conditions</span>
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
                                Terms & Conditions for <a href="https://www.nrail.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:underline">N R Agarwal Industries</a>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                By accessing or using this website, you agree to the following terms and conditions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Website Use</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                The content on this website is provided for general information purposes only. Users agree to use the website lawfully and responsibly.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Intellectual Property</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                All content, logos, text, images, and materials on this website are the property of N R Agarwal Industries Limited and may not be copied, reproduced, or distributed without prior written permission.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Accuracy of Information</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                While we strive to keep the information accurate and updated, we do not guarantee the completeness or reliability of any content on the website.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Limitation of Liability</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                The Company shall not be liable for any direct or indirect damages arising from the use of this website or reliance on its content.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Third-Party Links</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                Links to external websites are provided for convenience only. We do not endorse or take responsibility for third-party content.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Changes to Terms</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                We reserve the right to modify these terms at any time without prior notice.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Governing Law</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                These terms shall be governed by and interpreted in accordance with the laws of India.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">Contact</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
                                For any questions regarding these Terms & Conditions, please contact us through the official website.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TermsConditionsPage;
