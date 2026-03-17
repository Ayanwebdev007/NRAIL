import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurStoryPage from './pages/OurStoryPage';
import LeadershipPage from './pages/LeadershipPage';
import CommitteesPage from './pages/CommitteesPage';
import ManufacturingEdgePage from './pages/ManufacturingEdgePage';
import MilestonesPage from './pages/MilestonesPage';
import QualityInnovationPage from './pages/QualityInnovationPage';
import PremiumBoardPage from './pages/PremiumBoardPage';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/committees-of-board" element={<CommitteesPage />} />
          <Route path="/manufacturing-edge" element={<ManufacturingEdgePage />} />
          <Route path="/milestones" element={<MilestonesPage />} />
          <Route path="/quality-innovation" element={<QualityInnovationPage />} />
          <Route path="/premium-board-grades" element={<PremiumBoardPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
