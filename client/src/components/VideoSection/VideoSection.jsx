import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const VideoSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <section className="relative w-full h-[250px] lg:h-[350px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop")',
                    transform: 'scale(1.05)'
                }}
            />

            {/* Red Overlay (20% Transparent Brand Red) */}
            <div className="absolute inset-0 bg-primary/20 z-0" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">

                {/* Static Play Button */}
                <div className="relative cursor-pointer group scale-75 lg:scale-90" onClick={toggleModal}>
                    {/* Main Button - Forcefully 100% Solid White */}
                    <motion.div
                        className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 z-20"
                        style={{ backgroundColor: '#ffffff', opacity: 1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play size={32} className="text-primary fill-primary ml-1" />
                    </motion.div>
                </div>
            </div>

            {/* YouTube Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 lg:p-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleModal}
                    >
                        {/* Close Button */}
                        <button
                            onClick={toggleModal}
                            className="absolute top-6 right-6 lg:top-12 lg:right-12 text-white/70 hover:text-white transition-colors z-[110]"
                        >
                            <X size={44} />
                        </button>

                        {/* Video Container - Smaller Popup */}
                        <motion.div
                            className="w-full max-w-3xl aspect-video bg-black shadow-2xl relative rounded-lg overflow-hidden border border-white/10"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/jmo3h73TuLI?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default VideoSection;
