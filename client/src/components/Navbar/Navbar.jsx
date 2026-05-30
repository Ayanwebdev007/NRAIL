import React, { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import logo from '../../assets/logo.webp';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navData = [
    {
      title: 'Our Story',
      links: [
        { label: 'NRAIL Legacy', path: '/our-story' },
        { label: 'Vision & Mission', path: '/our-story#vision-mission' },
        { label: 'Corporate Presentation', action: 'video' },
        { label: 'Milestone', path: '/milestones' },
        { label: 'Leadership', path: '/leadership' },
        { label: 'Committees of Board', path: '/committees-of-board' }
      ]
    },
    {
      title: 'Manufacturing Excellence',
      links: [
        { label: 'The Manufacturing Edge', path: '/manufacturing-edge' },
        { label: 'Quality Assurance', path: '/quality-innovation#quality-assurance' },
        { label: 'Innovation', path: '/quality-innovation#innovation' }
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'Premium Board Grades', path: '/premium-board-grades' },
        { label: 'Duplex Board Grades', path: '/duplex-board-grades' },
        { label: 'Writing & Printing', path: '/writing-printing-grades' },
        { label: 'Copier Paper', path: '/copier-paper-grades' }
      ]
    },
    {
      title: 'Investors',
      links: [
        { label: 'Shareholder Information', path: '/shareholder-information' },
        { label: 'Financial Report', path: '/financial-reports' },
        { label: 'NRAIL Annual Report', path: '/nrail-annual-reports' },
        { label: 'AGM', path: '/agm' },
        { label: 'Corporate Governance', path: '/corporate-governance' },
        { label: 'Share Transfer Agents', path: '/share-transfer-agents' },
        { label: 'Newsroom', path: '/newsroom' },
        { label: 'Investor Information', path: '/investor-information' },
        { label: 'Independent Directors', path: '/independent-directors' },
        { label: 'Policies at NRAIL', path: '/policies' },
        { label: 'Other Compliances', path: '/other-compliances' },
        { label: 'Disclosure under Reg 42 of SEBI (LODR) Regulations', path: '/sebi-disclosure' }
      ]
    },
    {
      title: 'Life, Made Better',
      links: [
        { label: 'Environmental Impact', path: '/environmental-impact' },
        { label: 'Commitments', path: '/commitments' },
        { label: 'Community Champions', path: '/community-champions' }
      ]
    },
    { title: 'Media', links: [], path: '/media' },
    { title: 'Contact Us', links: [] },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="NRAIL Logo" className="navbar-logo" />
          </Link>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navData.map((item, index) => (
            <li key={index} className={item.links.length > 0 ? 'has-dropdown' : ''}>
              {item.links.length > 0 ? (
                <div className="nav-link-trigger">
                  {item.title.toUpperCase()}
                  <ChevronDown size={16} className="dropdown-icon" />
                </div>
              ) : (
                <Link to={item.path ? item.path : item.title === 'Contact Us' ? '/contact' : '#'}>
                  {item.title.toUpperCase()}
                </Link>
              )}
              {item.links.length > 0 && (
                <ul className="dropdown">
                  {item.links.map((link, subIndex) => (
                    <li key={subIndex}>
                      {/* Handle simple string links or object links */}
                      {link.action === 'video' ? (
                        <button
                          onClick={() => {
                            setVideoOpen(true);
                            setMobileMenuOpen(false);
                          }}
                          className="text-left w-full"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link to={link.path ? link.path : `/#${link.label ? link.label.toLowerCase().replace(/ /g, '-') : link.toLowerCase().replace(/ /g, '-')}`}>
                          {link.label || link}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={mobileMenuOpen ? 'bar open' : 'bar'}></div>
          <div className={mobileMenuOpen ? 'bar open' : 'bar'}></div>
          <div className={mobileMenuOpen ? 'bar open' : 'bar'}></div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 p-4 md:p-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-6 right-6 lg:top-12 lg:right-12 text-white/70 hover:text-white transition-colors z-[1100]"
            >
              <X size={44} />
            </button>

            {/* Video Container */}
            <motion.div
              className="w-full max-w-5xl aspect-video bg-black shadow-2xl relative rounded-xl overflow-hidden border border-white/10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/380DF2yadDk?autoplay=1"
                title="NRAIL Corporate Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
