import React from 'react';
import { motion } from 'framer-motion';
import './OurStory.css';

const OurStory = () => {
    return (
        <section className="our-story" id="our-story">
            <div className="story-grid">

                {/* Left Column */}
                <motion.div
                    className="story-left"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                >
                    <motion.h3
                        className="story-label"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Our Story
                    </motion.h3>
                    <motion.h2
                        className="story-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        NRAIL <br /> LEGACY
                    </motion.h2>
                </motion.div>

                {/* Right Column */}
                <motion.div
                    className="story-right"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <motion.h4
                        className="story-heading"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        A FUTURE-READY DESTINATION FOR THE MODERN ERA
                    </motion.h4>
                    <motion.p
                        className="story-description"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        NRAIL Legacy stands as a pinnacle of manufacturing excellence and infrastructure development.
                        Our commitment to quality and innovation has made us a leader in the industry,
                        providing sustainable and high-performance solutions for global markets.
                        Experience the core of our manufacturing prowess and our vision for a better future.
                    </motion.p>

                    <div className="story-features">
                        <motion.div
                            className="feature-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <h5>Manufacturing Edge</h5>
                            <p>State-of-the-art facilities equipped with advanced technology for superior output.</p>
                        </motion.div>
                        <motion.div
                            className="feature-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <h5>Process Excellence</h5>
                            <p>Meticulously designed workflows ensuring efficiency and consistency across all stages.</p>
                        </motion.div>
                        <motion.div
                            className="feature-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <h5>Quality Assurance</h5>
                            <p>Rigorous testing and international standards compliance for every product we deliver.</p>
                        </motion.div>
                        <motion.div
                            className="feature-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            <h5>Innovation Leader</h5>
                            <p>Constant R&D to stay ahead of market trends and provide cutting-edge solutions.</p>
                        </motion.div>
                    </div>

                    <motion.button
                        className="brochure-btn"
                        whileHover={{ scale: 1.05, backgroundColor: "#8b0000" }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            opacity: { delay: 0.9 },
                            backgroundColor: { duration: 0.1 },
                            scale: { duration: 0.2 }
                        }}
                    >
                        DOWNLOAD BOOK
                    </motion.button>

                    <motion.div
                        className="partners-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <h5 className="partners-title">Our Partner In Success</h5>
                        <div className="partners-grid">
                            {[
                                { name: "Company Name" },
                                { name: "Company Name" },
                                { name: "Company Name" },
                                { name: "Company Name" }
                            ].map((partner, index) => (
                                <div key={index} className="partner-item">
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
                                </div>
                            ))}
                        </div>

                        <motion.div
                            className="view-more-container"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <a href="#partners" className="view-more-btn">View More</a>
                            <div className="view-more-line"></div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;
