import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../../assets/logo.webp';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        { label: 'Milestone', path: '/milestones' },
        { label: 'Leadership', path: '/leadership' },
        { label: 'Committees of Board', path: '/committees-of-board' }
      ]
    },
    {
      title: 'Manufacturing Excellence',
      links: [
        { label: 'The Manufacturing Edge', path: '/manufacturing-edge' },
        { label: 'Quality Assurance', path: '/quality-innovation' },
        { label: 'Innovation', path: '/quality-innovation' }
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
        { label: 'Disclosure under Regulations 46 and 62 of SEBI (LODR) Regulations', path: '/sebi-disclosure' }
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
    { title: 'Media', links: [] },
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
              <Link to={item.title === 'Our Story' ? '/our-story' : item.title === 'Contact Us' ? '/contact' : `/#${item.title.toLowerCase().replace(/ /g, '-')}`}>
                {item.title.toUpperCase()}
                {item.links.length > 0 && <ChevronDown size={16} className="dropdown-icon" />}
              </Link>
              {item.links.length > 0 && (
                <ul className="dropdown">
                  {item.links.map((link, subIndex) => (
                    <li key={subIndex}>
                      {/* Handle simple string links or object links */}
                      <Link to={link.path ? link.path : `/#${link.label ? link.label.toLowerCase().replace(/ /g, '-') : link.toLowerCase().replace(/ /g, '-')}`}>
                        {link.label || link}
                      </Link>
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
    </nav>
  );
};

export default Navbar;
