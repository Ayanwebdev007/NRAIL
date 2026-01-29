import React from 'react';
import { motion } from 'framer-motion';
import './OurStory.css';

// Standard transition
const springTransition = { type: "spring", stiffness: 50, damping: 20 };
// Faster transition for buttons
const fastSpringTransition = { type: "spring", stiffness: 120, damping: 14 };

const OurStory = ({ onOpenBook }) => {

    return (
        <section className="our-story" id="our-story">
            <div className="story-grid">

                {/* Left Column */}
                <motion.div
                    className="story-left"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} // Slightly faster duration
                >
                    <motion.h3
                        className="story-label"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }} // Faster delay & duration
                    >
                        Our Story
                    </motion.h3>
                    <motion.h2
                        className="story-title"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }} // Faster delay & duration
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
                        transition={{ delay: 0.1, ...springTransition }} // Reduced delay
                    >
                        Shaping tomorrow’s solutions through purposeful engineering and strategic excellence
                    </motion.h4>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.2, ...springTransition }} // Reduced delay
                    >
                        <p className="story-description" style={{ marginBottom: '15px' }}>
                            At NRAIL, progress is powered by responsibility—and guided by purpose. Founded in 1983, N R Agarwal Industries Limited has built a legacy rooted in recycling excellence, disciplined manufacturing, and a commitment to creating value beyond products.
                        </p>
                        <p className="story-description">
                            The company’s operations are anchored in wastepaper-based production, where recovered fibre is transformed into reliable, high-performance paper through advanced processing and quality systems. This recycling-led foundation is strengthened by future-ready infrastructure and the introduction of virgin-grade boards, enabling NRAIL to serve both sustainable and premium packaging requirements with equal confidence.
                        </p>
                    </motion.div>

                    <div className="story-features">
                        {[
                            { title: "Manufacturing Edge", text: "Redefining Manufacturing Excellence Through Advanced Technology" },
                            { title: "Process Excellence", text: "Intelligent Process Technology for Responsible Manufacturing." },
                            { title: "Quality Assurance", text: "Rigorous quality testing and global compliance standards define every product we deliver" },
                            { title: "Innovation with Purpose", text: "Innovation-led development that stays ahead of industry evolution." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ delay: 0.3 + (index * 0.05), ...springTransition }} // Tighter stagger
                            >
                                <h5>{feature.title}</h5>
                                <p>{feature.text}</p>
                            </motion.div>
                        ))}
                    </div>


                    <motion.div
                        className="view-more-container"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.45 }}
                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                        style={{ marginBottom: '2rem' }}
                    >
                        <a href="#our-story" className="view-more-btn">Read More</a>
                        <div className="view-more-line"></div>
                    </motion.div>

                    <motion.button
                        className="brochure-btn"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.5, ...fastSpringTransition }} // Much faster delay & spring
                        whileHover={{ scale: 1.05, backgroundColor: "#8b0000" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenBook}
                        style={{ marginTop: '1rem' }}
                    >
                        VIEW COFFEE TABLE BOOK
                    </motion.button>

                    <div className="partners-section">
                        <motion.h5
                            className="partners-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ delay: 0.6, ...springTransition }}
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
                                    transition={{ delay: 0.7 + (index * 0.05), ...springTransition }}
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
                            transition={{ delay: 0.9 }} // Reduced from 1.5
                            whileHover={{ x: 10, transition: { duration: 0.2 } }}
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
