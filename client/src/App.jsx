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
import DuplexBoardPage from './pages/DuplexBoardPage';
import WritingPrintingPage from './pages/WritingPrintingPage';
import CopierPaperPage from './pages/CopierPaperPage';
import EnvironmentalImpactPage from './pages/EnvironmentalImpactPage';
import CommitmentsPage from './pages/CommitmentsPage';
import CommunityChampsPage from './pages/CommunityChampsPage';
import ShareholderInformationPage from './pages/ShareholderInformationPage';
import FinancialReportsPage from './pages/FinancialReportsPage';
import NrailAnnualReportsPage from './pages/NrailAnnualReportsPage';
import AgmPage from './pages/AgmPage';
import CorporateGovernancePage from './pages/CorporateGovernancePage';
import ShareTransferAgentsPage from './pages/ShareTransferAgentsPage';
import NewsroomPage from './pages/NewsroomPage';
import InvestorInformationPage from './pages/InvestorInformationPage';
import IndependentDirectorsPage from './pages/IndependentDirectorsPage';
import PoliciesPage from './pages/PoliciesPage';
import OtherCompliancesPage from './pages/OtherCompliancesPage';
import SebiDisclosurePage from './pages/SebiDisclosurePage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop';
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

    // Make lenis accessible globally for ScrollToTop
    window.lenis = lenis;

    // Initial Loading Timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      lenis.destroy();
      window.lenis = null;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
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
          <Route path="/duplex-board-grades" element={<DuplexBoardPage />} />
          <Route path="/writing-printing-grades" element={<WritingPrintingPage />} />
          <Route path="/copier-paper-grades" element={<CopierPaperPage />} />
          <Route path="/environmental-impact" element={<EnvironmentalImpactPage />} />
          <Route path="/commitments" element={<CommitmentsPage />} />
          <Route path="/community-champions" element={<CommunityChampsPage />} />
          <Route path="/shareholder-information" element={<ShareholderInformationPage />} />
          <Route path="/financial-reports" element={<FinancialReportsPage />} />
          <Route path="/nrail-annual-reports" element={<NrailAnnualReportsPage />} />
          <Route path="/agm" element={<AgmPage />} />
          <Route path="/corporate-governance" element={<CorporateGovernancePage />} />
          <Route path="/share-transfer-agents" element={<ShareTransferAgentsPage />} />
          <Route path="/newsroom" element={<NewsroomPage />} />
          <Route path="/investor-information" element={<InvestorInformationPage />} />
          <Route path="/independent-directors" element={<IndependentDirectorsPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/other-compliances" element={<OtherCompliancesPage />} />
          <Route path="/sebi-disclosure" element={<SebiDisclosurePage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
