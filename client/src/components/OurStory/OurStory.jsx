import React from 'react';
import { motion } from 'framer-motion';
import './OurStory.css';

const OurStory = () => {
    // Individual item transition
    const springTransition = { type: "spring", stiffness: 50, damping: 20 };

    return (
        <section className="our-story" id="our-story">
            <div className="story-grid">

                {/* Left Column */}
                <motion.div
                    className="story-left"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h3
                        className="story-label"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    >
                        Our Story
                    </motion.h3>
                    <motion.h2
                        className="story-title"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    >
                        NRAIL <br /> LEGACY
                    </motion.h2>
                </motion.div>

                {/* Right Column */}
                <div className="story-right">
                    <motion.h4
                        className="story-heading"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.2, ...springTransition }}
                    >
                        A FUTURE-READY DESTINATION FOR THE MODERN ERA
                    </motion.h4>
                    <motion.p
                        className="story-description"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.3, ...springTransition }}
                    >
                        NRAIL Legacy stands as a pinnacle of manufacturing excellence and infrastructure development.
                        Our commitment to quality and innovation has made us a leader in the industry,
                        providing sustainable and high-performance solutions for global markets.
                        Experience the core of our manufacturing prowess and our vision for a better future.
                    </motion.p>

                    <div className="story-features">
                        {[
                            { title: "Manufacturing Edge", text: "State-of-the-art facilities equipped with advanced technology for superior output." },
                            { title: "Process Excellence", text: "Meticulously designed workflows ensuring efficiency and consistency across all stages." },
                            { title: "Quality Assurance", text: "Rigorous testing and international standards compliance for every product we deliver." },
                            { title: "Innovation Leader", text: "Constant R&D to stay ahead of market trends and provide cutting-edge solutions." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ delay: 0.4 + (index * 0.1), ...springTransition }}
                            >
                                <h5>{feature.title}</h5>
                                <p>{feature.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        className="brochure-btn"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.8, ...springTransition }}
                        whileHover={{ scale: 1.05, backgroundColor: "#8b0000" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        DOWNLOAD BOOK
                    </motion.button>

                    <div className="partners-section">
                        <motion.h5
                            className="partners-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ delay: 0.9, ...springTransition }}
                        >
                            Our Partner In Success
                        </motion.h5>
                        <div className="partners-grid">
                            {[
                                { name: "Company Name" },
                                { name: "Company Name" },
                                { name: "Company Name" },
                                { name: "Company Name" }
                            ].map((partner, index) => (
                                <motion.div
                                    key={index}
                                    className="partner-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    transition={{ delay: 1.0 + (index * 0.1), ...springTransition }}
                                    whileHover={{ y: -5 }} // Subtle lift on hover
                                >
                                    <div className="partner-logo-box">
                                        <img
                                            src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design_460848-13936.jpg"
                                            alt={partner.name}
                                            className="partner-logo-img"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = `https://placehold.jp/24/333333/ffffff/150x150.png?text=${partner.name}`
                                            }}
                                        />
                                    </div>
                                    <p className="partner-name">{partner.name}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="view-more-container"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 1.5 }}
                            whileHover={{ x: 10 }}
                        >
                            <a href="#partners" className="view-more-btn">View More</a>
                            <div className="view-more-line"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
