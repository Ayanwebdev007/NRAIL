import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import OurStory from '../components/OurStory/OurStory';
import KeyHighlights from '../components/KeyHighlights/KeyHighlights';
import CMDDesk from '../components/CMDDesk/CMDDesk';
import VideoSection from '../components/VideoSection/VideoSection';
import ManufacturingExcellence from '../components/ManufacturingExcellence/ManufacturingExcellence';
import ProductQuickAccess from '../components/ProductQuickAccess/ProductQuickAccess';
import GlobalReliability from '../components/GlobalReliability/GlobalReliability';
import EnvironmentalImpact from '../components/EnvironmentalImpact/EnvironmentalImpact';
import EmployeeStories from '../components/EmployeeStories/EmployeeStories';
import OurLocation from '../components/OurLocation/OurLocation';
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';
import BookViewer from '../components/BookViewer/BookViewer';
import CoffeTableBook from '../assets/Coffe Table Book_NR Agarwal (1)_compressed.pdf';

const Home = () => {
    const [showBook, setShowBook] = useState(false);

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <OurStory onOpenBook={() => setShowBook(true)} />
                <KeyHighlights />
                <CMDDesk />
                <VideoSection />
                <ManufacturingExcellence />
                <ProductQuickAccess />
                <GlobalReliability />
                <EnvironmentalImpact />
                <EmployeeStories />
                <OurLocation />
                <Footer />
            </main>

            <AnimatePresence>
                {showBook && (
                    <motion.div
                        key="book-viewer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 99999 }}
                    >
                        <BookViewer
                            pdfUrl={CoffeTableBook}
                            onClose={() => setShowBook(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Home;
