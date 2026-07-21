import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronRight, Camera, Calendar, Image as ImageIcon } from 'lucide-react';

const MediaPage = () => {
    const [view, setView] = useState('root'); // root, event-details
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    // Dynamic asset loading for converted event images (.webp)
    const eventImages = import.meta.glob('../assets/**/*.webp', { eager: true, query: '?url', import: 'default' });

    // Filter images from specific event folders
    const eventFolders = ['Cricket Match', 'Republic Day', 'Environment Day'];
    
    const events = eventFolders.map(folder => {
        const images = Object.keys(eventImages)
            .filter(path => path.includes(`/${folder}/`))
            .map(path => eventImages[path]);
        
        return {
            name: folder,
            coverImage: images[0] || '',
            imageCount: images.length,
            images: images
        };
    }).filter(event => event.imageCount > 0);

    const handleNavigate = (event) => {
        setSelectedEvent(event);
        setView('event-details');
    };

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            {/* Spacer for Navbar */}
            <div className="h-20 md:h-28 w-full bg-white"></div>

            {/* Header Section */}
            <div className="pt-16 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b0000]/[0.02] to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-24 relative z-10">
                    <div className="flex flex-wrap items-center gap-1.5 text-lg mb-16 font-normal">
                        <Link to="/" className="text-[#2d6ca2] hover:text-[#8b0000] transition-colors px-1">Home</Link>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span 
                            className={`${view === 'root' ? 'text-[#800000] font-medium' : 'text-[#2d6ca2] hover:text-[#800000] cursor-pointer'} transition-colors px-1`}
                            onClick={() => setView('root')}
                        >
                            Media & Events
                        </span>
                        {view === 'event-details' && selectedEvent && (
                            <>
                                <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                                <span className="text-[#800000] font-medium px-1 uppercase tracking-wider">
                                    {selectedEvent.name}
                                </span>
                            </>
                        )}
                    </div>

                    <motion.h1
                        className="text-[40px] md:text-[56px] font-extrabold mb-12 leading-[1.1] uppercase tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {view === 'root' ? (
                            <>
                                <span className="block text-black">Company</span>
                                <span className="block text-[#8b0000]">Events</span>
                            </>
                        ) : (
                            <>
                                <span className="block text-black">Event</span>
                                <span className="block text-[#8b0000]">{selectedEvent.name}</span>
                            </>
                        )}
                    </motion.h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="pt-12 pb-24 bg-[#fafafa]/50">
                <div className="container mx-auto px-10 md:px-32 max-w-7xl">
                    <AnimatePresence mode="wait">
                        {view === 'root' ? (
                            <motion.div
                                key="root"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
                            >
                                {events.map((event, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -10 }}
                                        className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl"
                                        onClick={() => handleNavigate(event)}
                                    >
                                        <div 
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url("${event.coverImage}")` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                        
                                        <div 
                                            className="absolute inset-0 flex flex-col justify-end"
                                            style={{ padding: '40px' }}
                                        >

                                            <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight">
                                                {event.name}
                                            </h3>
                                            <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                                                <span className="text-sm font-medium">View Gallery</span>
                                                <ChevronRight size={16} />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="gallery"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {selectedEvent.images.map((img, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.02 }}
                                            className="aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg relative group"
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <img 
                                                src={img} 
                                                alt={`Event image ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <ImageIcon className="text-white" size={32} />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className="h-12 md:h-20 bg-white"></div>
            <Footer />

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Full size event"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MediaPage;
