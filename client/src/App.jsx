import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OurStory from './components/OurStory/OurStory';
import KeyHighlights from './components/KeyHighlights/KeyHighlights';
import CMDDesk from './components/CMDDesk/CMDDesk';
import VideoSection from './components/VideoSection/VideoSection';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './App.css';

function App() {
  useEffect(() => {
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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <KeyHighlights />
        <CMDDesk />
        <VideoSection />
        {/* Other sections will be added here */}
      </main>
    </div>
  );
}

export default App;
