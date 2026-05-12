import React from 'react';
import { Linkedin, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { Icon: Linkedin, href: "https://www.linkedin.com/in/n-r-agarwal-industries-ltd/", label: "LinkedIn" },
        { Icon: Youtube, href: "https://www.youtube.com/@NRAgarwalIndustriesLtd/", label: "YouTube" }
    ];

    const footerLinks = [
        {
            title: "Company",
            links: [
                { label: "About Us", path: "/our-story" },
                { label: "Our Story", path: "/our-story" },
                { label: "Leadership", path: "/leadership" },
                { label: "Careers", path: "/newsroom" },
                { label: "Newsroom", path: "/newsroom" }
            ]
        },
        {
            title: "Sustainability",
            links: [
                { label: "Environment", path: "/environmental-impact" },
                { label: "Social Impact", path: "/community-champions" },
                { label: "Governance", path: "/corporate-governance" },
                { label: "Annual Reports", path: "/nrail-annual-reports" },
                { label: "Certifications", path: "/our-story#certifications" }
            ]
        },
        {
            title: "Products",
            links: [
                { label: "Duplex Board", path: "/duplex-board-grades" },
                { label: "Paper Solutions", path: "/writing-printing-grades" },
                { label: "Packaging", path: "/premium-board-grades" },
                { label: "Innovation", path: "/quality-innovation" },
                { label: "Global Reach", path: "/manufacturing-edge" }
            ]
        },
        {
            title: "Support",
            links: [
                { label: "Contact", path: "/contact" },
                { label: "Inquiry", path: "/contact" },
                { label: "Privacy Policy", path: "/privacy-policy" },
                { label: "Terms of Use", path: "/terms-and-conditions" }
            ]
        }
    ];

    return (
        <footer className="bg-[#050505] text-white pt-20 pb-16 md:pt-40 md:pb-32 2xl:pt-80 2xl:pb-60 font-[Outfit] border-t border-white/5 relative overflow-hidden mt-20 md:mt-40 flex flex-col items-center">
            {/* Background Accent - Scaled */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] 2xl:w-[800px] 2xl:h-[800px] bg-red-600/5 rounded-full blur-[80px] md:blur-[120px] -mr-32 -mt-32 md:-mr-64 md:-mt-64 pointer-events-none" />

            <div className="w-[90%] md:w-[90%] 2xl:w-[92%] max-w-[2500px] mx-auto relative z-10">
                {/* Physical Top Spacer */}
                <div className="h-10 md:h-20 w-full" />

                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 2xl:gap-32 mb-16 md:mb-24 2xl:mb-40">
                    <div className="lg:col-span-4 space-y-10 md:space-y-16 2xl:space-y-24">
                        <div className="flex items-center gap-4 2xl:gap-8">
                            <div className="h-10 w-1 md:h-12 md:w-1.5 2xl:h-20 2xl:w-2 bg-red-600"></div>
                            <img src={logo} alt="NR AGARWAL Logo" className="h-8 md:h-10 2xl:h-16 w-auto" />
                        </div>

                        <div className="h-2 md:h-5" />

                        <p className="text-white/50 text-sm md:text-base 2xl:text-2xl leading-relaxed max-w-md 2xl:max-w-2xl font-light">
                            Leading the transition towards a circular economy through regenerative paper manufacturing and responsible industrial practices.
                        </p>

                        <div className="h-2 md:h-5" />

                        <div className="flex items-center gap-4 md:gap-6 2xl:gap-10">
                            {socialLinks.map(({ Icon, href, label }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target={href !== "#" ? "_blank" : undefined}
                                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                                    aria-label={label}
                                    className="w-8 h-8 md:w-9 md:h-9 2xl:w-14 2xl:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group"
                                >
                                    <Icon className="w-4 h-4 2xl:w-6 2xl:h-6 text-white/60 group-hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-2 2xl:grid-cols-4 gap-10 md:gap-12 2xl:gap-12">
                        {footerLinks.map((section, idx) => (
                            <div key={idx} className="space-y-6 md:space-y-10 2xl:space-y-16">
                                <h4 className="text-xs md:text-xs 2xl:text-base font-bold tracking-[0.3em] uppercase text-red-600/80">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4 md:space-y-6 2xl:space-y-10">
                                    {section.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <Link
                                                to={link.path || "#"}
                                                className="text-white/40 hover:text-white text-sm 2xl:text-xl transition-colors duration-200 flex items-center group"
                                            >
                                                <span>{link.label || link}</span>
                                                <ArrowUpRight className="w-3 h-3 2xl:w-5 2xl:h-5 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Spacer */}
                <div className="h-5 w-full" />

                {/* Contact Banner */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-24 2xl:gap-40 py-12 md:py-20 2xl:py-32 border-y border-white/5 mb-16 md:mb-40 2xl:mb-60">
                    <div className="flex items-center gap-6 2xl:gap-10">
                        <div className="w-10 h-10 md:w-12 md:h-12 2xl:w-20 2xl:h-20 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                            <MapPin className="w-4 h-4 md:w-5 md:h-5 2xl:w-8 2xl:h-8 text-red-600" />
                        </div>
                        <div>
                            <p className="text-[10px] 2xl:text-sm font-bold tracking-widest text-white/30 uppercase mb-1">Headquarters</p>
                            <p className="text-sm md:text-sm 2xl:text-xl font-light">Mumbai, Maharashtra, India</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 2xl:gap-10">
                        <div className="w-10 h-10 md:w-12 md:h-12 2xl:w-20 2xl:h-20 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                            <Phone className="w-4 h-4 md:w-5 md:h-5 2xl:w-8 2xl:h-8 text-red-600" />
                        </div>
                        <div>
                            <p className="text-[10px] 2xl:text-sm font-bold tracking-widest text-white/30 uppercase mb-1">Call Us</p>
                            <p className="text-sm md:text-sm 2xl:text-xl font-light">+91 (22) 67317500</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 2xl:gap-10">
                        <div className="w-10 h-10 md:w-12 md:h-12 2xl:w-20 2xl:h-20 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4 md:w-5 md:h-5 2xl:w-8 2xl:h-8 text-red-600" />
                        </div>
                        <div>
                            <p className="text-[10px] 2xl:text-sm font-bold tracking-widest text-white/30 uppercase mb-1">Email Us</p>
                            <p className="text-sm md:text-sm 2xl:text-xl font-light">info@nrail.com</p>
                        </div>
                    </div>
                </div>

                {/* Spacer */}
                <div className="h-5 w-full" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
                    <p className="text-white/20 text-[10px] md:text-[11px] 2xl:text-base font-medium tracking-wider text-center md:text-left">
                        © {currentYear} NR AGARWAL INDUSTRIES LTD. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 2xl:gap-16 text-[10px] md:text-[11px] 2xl:text-base font-medium tracking-wider text-white/20">
                        <Link to="/privacy-policy" className="hover:text-red-600 transition-colors">PRIVACY POLICY</Link>
                        <Link to="/terms-and-conditions" className="hover:text-red-600 transition-colors">TERMS & CONDITIONS</Link>
                        <Link to="/contact#locations" className="hover:text-red-600 transition-colors uppercase">LOCATIONS</Link>
                    </div>
                </div>

                {/* Physical Bottom Spacer */}
                <div className="h-10 md:h-20 w-full" />
            </div>
        </footer>
    );
};

export default Footer;
