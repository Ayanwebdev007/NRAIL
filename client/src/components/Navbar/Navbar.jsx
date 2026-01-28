import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        'NRAIL Legacy',
        'Vision & Mission',
        'Milestone',
        'Leadership'
      ]
    },
    {
      title: 'Manufacturing Excellence',
      links: [
        'The Manufacturing Edge',
        'Process Excellence',
        'Quality Assurance',
        'Innovation'
      ]
    },
    {
      title: 'Products',
      links: [
        'Premium Board Grades',
        'Duplex Boards',
        'Writing & Printing',
        'Copier Paper'
      ]
    },
    {
      title: 'Investors',
      links: [
        'Board of Directors',
        'Financial Performance',
        'Shareholding Pattern',
        'Shareholder Information',
        'Codes and Policies',
        'Corporate Governance',
        'Investor Presentations',
        'AGM',
        'Annual Report'
      ]
    },
    {
      title: 'Life, Made Better',
      links: [
        'Environmental Impact',
        'Commitments',
        'Community Champions'
      ]
    },
    { title: 'Media', links: [] },
    { title: 'Contact Us', links: [] },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="NRAIL Logo" className="navbar-logo" />
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navData.map((item, index) => (
            <li key={index} className={item.links.length > 0 ? 'has-dropdown' : ''}>
              <a href={`#${item.title.toLowerCase().replace(/ /g, '-')}`}>
                {item.title.toUpperCase()}
                {item.links.length > 0 && <ChevronDown size={16} className="dropdown-icon" />}
              </a>
              {item.links.length > 0 && (
                <ul className="dropdown">
                  {item.links.map((link, subIndex) => (
                    <li key={subIndex}>
                      <a href={`#${link.toLowerCase().replace(/ /g, '-')}`}>{link}</a>
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
