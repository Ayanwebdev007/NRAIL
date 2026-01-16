import React from 'react';
import { motion } from 'framer-motion';
import './OurStory.css';

const OurStory = () => {
    // Animation variants for staggered reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger effect for children
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 20 }
        }
    };

    return (
        <section className="our-story" id="our-story">
            <div className="story-grid">

                {/* Left Column */}
                <motion.div
                    className="story-left"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h3
                        className="story-label"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    >
                        Our Story
                    </motion.h3>
                    <motion.h2
                        className="story-title"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    >
                        NRAIL <br /> LEGACY
                    </motion.h2>
                </motion.div>

                {/* Right Column */}
                <motion.div
                    className="story-right"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.h4 className="story-heading" variants={itemVariants}>
                        A FUTURE-READY DESTINATION FOR THE MODERN ERA
                    </motion.h4>
                    <motion.p className="story-description" variants={itemVariants}>
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
                                variants={itemVariants}
                            >
                                <h5>{feature.title}</h5>
                                <p>{feature.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        className="brochure-btn"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, backgroundColor: "#8b0000" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        DOWNLOAD BOOK
                    </motion.button>

                    <motion.div
                        className="partners-section"
                        variants={itemVariants}
                    >
                        <h5 className="partners-title">Our Partner In Success</h5>
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
