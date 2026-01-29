import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Company",
            links: ["About Us", "Our Story", "Leadership", "Careers", "Newsroom"]
        },
        {
            title: "Sustainability",
            links: ["Environment", "Social Impact", "Governance", "Annual Reports", "Certifications"]
        },
        {
            title: "Products",
            links: ["Duplex Board", "Paper Solutions", "Packaging", "Innovation", "Global Reach"]
        },
        {
            title: "Support",
            links: ["Contact", "Inquiry", "Locations", "Privacy Policy", "Terms of Use"]
        }
    ];

    return (
        <footer className="bg-[#050505] text-white pt-64 pb-48 font-[Outfit] border-t border-white/5 relative overflow-hidden mt-40">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />

            <div className="container mx-auto px-10 md:px-24 lg:px-44 relative z-10">
                {/* Physical Top Spacer */}
                <div className="h-20 w-full" />
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-24">
                    <div className="lg:col-span-5 space-y-16">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-1.5 bg-red-600"></div>
                            <img src={logo} alt="NR AGARWAL Logo" className="h-10 w-auto" />
                        </div>

                        <div className="h-5" /> {/* Spacer between logo and description */}

                        <p className="text-white/50 text-base leading-relaxed max-w-md font-light">
                            Leading the transition towards a circular economy through regenerative paper manufacturing and responsible industrial practices.
                        </p>

                        <div className="h-5" /> {/* Spacer between description and social icons */}

                        <div className="flex items-center gap-6">
                            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group"
                                >
                                    <Icon className="w-4 h-4 text-white/60 group-hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-12">
                        {footerLinks.map((section, idx) => (
                            <div key={idx} className="space-y-10">
                                <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-red-600/80">
                                    {section.title}
                                </h4>
                                <ul className="space-y-6">
                                    {section.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <a
                                                href="#"
                                                className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                            >
                                                <span>{link}</span>
                                                <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Massive Spacer before Contact Section */}
                <div className="h-5 w-full" />

                {/* Contact Banner */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-24 py-20 border-y border-white/5 mb-40">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-1">Headquarters</p>
                            <p className="text-sm font-light">Vapi, Gujarat, India</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                            <Phone className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-1">Call Us</p>
                            <p className="text-sm font-light">+91 260 2433391</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                            <Mail className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-1">Email Us</p>
                            <p className="text-sm font-light">info@nrail.com</p>
                        </div>
                    </div>
                </div>

                {/* Massive Spacer before Bottom Section */}
                <div className="h-5 w-full" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <p className="text-white/20 text-[11px] font-medium tracking-wider">
                        © {currentYear} NR AGARWAL INDUSTRIES LTD. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-10 text-[11px] font-medium tracking-wider text-white/20">
                        <a href="#" className="hover:text-red-600 transition-colors">PRIVACY POLICY</a>
                        <a href="#" className="hover:text-red-600 transition-colors">TERMS & CONDITIONS</a>
                        <a href="#" className="hover:text-red-600 transition-colors">SITEMAP</a>
                    </div>
                </div>

                {/* Physical Bottom Spacer */}
                <div className="h-20 w-full" />
            </div>
        </footer>
    );
};

export default Footer;
