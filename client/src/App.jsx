import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OurStory from './components/OurStory/OurStory';
import KeyHighlights from './components/KeyHighlights/KeyHighlights';
import CMDDesk from './components/CMDDesk/CMDDesk';
import VideoSection from './components/VideoSection/VideoSection';
import ManufacturingExcellence from './components/ManufacturingExcellence/ManufacturingExcellence';
import ProductQuickAccess from './components/ProductQuickAccess/ProductQuickAccess';
import Loader from './components/Loader/Loader';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

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
            <OurStory />
            <KeyHighlights />
            <CMDDesk />
            <VideoSection />
            <ManufacturingExcellence />
            <ProductQuickAccess />
            {/* Other sections will be added here */}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
