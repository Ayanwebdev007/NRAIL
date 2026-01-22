import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OurStory from './components/OurStory/OurStory';
import KeyHighlights from './components/KeyHighlights/KeyHighlights';
import CMDDesk from './components/CMDDesk/CMDDesk';
import VideoSection from './components/VideoSection/VideoSection';
import ManufacturingExcellence from './components/ManufacturingExcellence/ManufacturingExcellence';
import ProductQuickAccess from './components/ProductQuickAccess/ProductQuickAccess';
import Loader from './components/Loader/Loader';
import BookViewer from './components/BookViewer/BookViewer';
import CoffeTableBook from './assets/Coffe Table Book_NR Agarwal (1)_compressed.pdf';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showBook, setShowBook] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initial Loading Timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
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
            {/* Other sections will be added here */}
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
      )}
    </div>
  );
}

export default App;
