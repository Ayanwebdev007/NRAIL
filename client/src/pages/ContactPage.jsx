import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// Asset imports
import contactHero from '../assets/contact us page.JPG';
import nrailLogo from '../assets/logo.png';

const ContactPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            {/* Hero Section - Full viewport with NRAIL logo top-left and "Let's Connect" bottom-left */}
            <div className="relative w-full h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-top"
                    style={{ backgroundImage: `url("${contactHero}")` }}
                >
                    {/* Dark gradient from bottom for text contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0"></div>
                </div>

                {/* "Let's Connect" - Bottom Left */}
                <div className="absolute bottom-16 left-10 z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="font-['Outfit'] text-white"
                        style={{
                            fontSize: 'clamp(36px, 5vw, 56px)',
                            fontWeight: 300,
                            lineHeight: 1.1,
                            letterSpacing: '0.01em',
                        }}
                    >
                        Let's Connect
                    </motion.h1>
                </div>
            </div>

            {/* Contact Details Section */}
            <section className="bg-white" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-6xl">

                    {/* Corporate Office */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-[280px_1fr_1fr] gap-8 md:gap-12 items-start"
                        style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '40px', marginBottom: '40px' }}
                    >
                        <h2 className="font-['Outfit']" style={{ color: '#8b0000', fontSize: '32px', fontWeight: 300, lineHeight: 1.2 }}>
                            Corporate Office
                        </h2>
                        <div>
                            <p className="font-['Outfit'] uppercase tracking-[0.15em] text-[#8b0000] mb-2" style={{ fontSize: '12px', fontWeight: 500 }}>ADDRESS</p>
                            <p className="font-['Outfit'] text-gray-800" style={{ fontSize: '16px', lineHeight: 1.7, fontWeight: 400 }}>
                                502-A/501 B, Fortune Terraces,<br />
                                5th Floor, Opp. City Mall,<br />
                                New Link Road, Andheri (West),<br />
                                Mumbai 400 053
                            </p>
                        </div>
                        <div>
                            <p className="font-['Outfit'] uppercase tracking-[0.15em] text-[#8b0000] mb-2" style={{ fontSize: '12px', fontWeight: 500 }}>CONTACT</p>
                            <p className="font-['Outfit'] text-gray-800" style={{ fontSize: '16px', lineHeight: 1.7, fontWeight: 400 }}>
                                Phone: +91 (22) 67317500<br />
                                Fax: +91 (22) 26730227 / 26736953
                            </p>
                        </div>
                    </motion.div>

                    {/* Unit I */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-[280px_1fr_1fr] gap-8 md:gap-12 items-start"
                        style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '40px', marginBottom: '40px' }}
                    >
                        <h2 className="font-['Outfit']" style={{ color: '#8b0000', fontSize: '32px', fontWeight: 300, lineHeight: 1.2 }}>
                            Unit I
                        </h2>
                        <div>
                            <p className="font-['Outfit'] uppercase tracking-[0.15em] text-[#8b0000] mb-2" style={{ fontSize: '12px', fontWeight: 500 }}>ADDRESS</p>
                            <p className="font-['Outfit'] text-gray-800" style={{ fontSize: '16px', lineHeight: 1.7, fontWeight: 400 }}>
                                Plot No. 169, Phase II, GIDC,<br />
                                Vapi - 396 195,<br />
                                Dist. Valsad, Gujarat
                            </p>
                        </div>
                        <div>
                            <p className="font-['Outfit'] uppercase tracking-[0.15em] text-[#8b0000] mb-2" style={{ fontSize: '12px', fontWeight: 500 }}>CONTACT</p>
                            <p className="font-['Outfit'] text-gray-800" style={{ fontSize: '16px', lineHeight: 1.7, fontWeight: 400 }}>
                                Phone: +91 (260) 2401634 / 2401706
                            </p>
                        </div>
                    </motion.div>

                    {/* Unit V */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-[280px_1fr_1fr] gap-8 md:gap-12 items-start"
                    >
                        <h2 className="font-['Outfit']" style={{ color: '#8b0000', fontSize: '32px', fontWeight: 300, lineHeight: 1.2 }}>
                            Unit V
                        </h2>
                        <div>
                            <p className="font-['Outfit'] uppercase tracking-[0.15em] text-[#8b0000] mb-2" style={{ fontSize: '12px', fontWeight: 500 }}>ADDRESS</p>
                            <p className="font-['Outfit'] text-gray-800" style={{ fontSize: '16px', lineHeight: 1.7, fontWeight: 400 }}>
                                Survey No. 361,<br />
                                At/Post - Angam & Sarigam,<br />
                                Kalay Road, Ta - Umbergaon,<br />
                                Dist: Valsad 396 155, Gujarat
                            </p>
                        </div>
                        <div>
                            <p className="font-['Outfit'] uppercase tracking-[0.15em] text-[#8b0000] mb-2" style={{ fontSize: '12px', fontWeight: 500 }}>CONTACT</p>
                            <p className="font-['Outfit'] text-gray-800" style={{ fontSize: '16px', lineHeight: 1.7, fontWeight: 400 }}>
                                Phone: +91 (260) 2784082 / 83
                            </p>
                        </div>
                    </motion.div>

                    {/* Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start"
                        style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid #e5e5e5' }}
                    >
                        <div>
                            <h2 className="font-['Outfit']" style={{ color: '#8b0000', fontSize: '32px', fontWeight: 300, lineHeight: 1.2 }}>
                                Inquiry
                            </h2>
                        </div>

                        <div>
                            <form className="flex flex-col" style={{ gap: '24px' }} onSubmit={(e) => e.preventDefault()}>
                                {/* Name & Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px' }}>
                                    <input
                                        type="text"
                                        placeholder="Name*"
                                        className="font-['Outfit'] contact-input"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="font-['Outfit'] contact-input"
                                    />
                                </div>
                                {/* Phone & Inquiry Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px' }}>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number*"
                                        className="font-['Outfit'] contact-input"
                                    />
                                    <select
                                        className="font-['Outfit'] contact-input contact-select"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Type of Inquiry*</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="sales">Sales</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="careers">Careers</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                {/* Message */}
                                <textarea
                                    placeholder="Message*"
                                    rows={5}
                                    className="font-['Outfit'] contact-input"
                                    style={{ resize: 'vertical' }}
                                />
                                {/* Submit */}
                                <div style={{ marginTop: '8px' }}>
                                    <button
                                        type="submit"
                                        className="font-['Outfit'] contact-submit-btn"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>

                {/* Contact Form Styles */}
                <style dangerouslySetInnerHTML={{ __html: `
                    .contact-input {
                        width: 100%;
                        padding: 16px 20px;
                        font-size: 15px;
                        font-weight: 300;
                        font-family: 'Outfit', sans-serif;
                        border: 1px solid #e5e5e5;
                        border-radius: 2px;
                        outline: none;
                        color: #333;
                        background: #fff;
                        transition: border-color 0.3s ease, box-shadow 0.3s ease;
                    }
                    .contact-input::placeholder {
                        color: #a3a3a3;
                        font-weight: 300;
                    }
                    .contact-input:focus {
                        border-color: #8b0000;
                        box-shadow: 0 0 0 1px #8b0000;
                    }
                    .contact-select {
                        appearance: none;
                        color: #a3a3a3;
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a3a3a3' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
                        background-repeat: no-repeat;
                        background-position: right 20px center;
                    }
                    .contact-select:focus {
                        color: #333;
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238b0000' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
                    }
                    .contact-select option {
                        color: #333;
                    }
                    .contact-submit-btn {
                        padding: 16px 40px;
                        font-size: 14px;
                        font-weight: 600;
                        font-family: 'Outfit', sans-serif;
                        letter-spacing: 0.1em;
                        color: #fff;
                        background: #8b0000;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 14px rgba(139, 0, 0, 0.25);
                    }
                    .contact-submit-btn:hover {
                        background: #a00000;
                        box-shadow: 0 6px 20px rgba(139, 0, 0, 0.3), transform: translateY(-2px);
                    }
                    .contact-submit-btn:active {
                        transform: translateY(0);
                        box-shadow: 0 2px 8px rgba(139, 0, 0, 0.2);
                    }
                ` }} />
            </section>

            {/* Bottom Spacer */}
            <div className="h-20 md:h-32 bg-white"></div>

            <Footer />
        </div>
    );
};

export default ContactPage;
