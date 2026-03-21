import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// Asset imports
import CommunityHero from '../assets/Header.jpg';
import EducationImg from '../assets/C0009.MP4.00_01_40_24.Still001.jpg';
import HealthcareImg from '../assets/C0055.MP4.00_16_41_12.Still001.jpg';
import EmpowermentImg from '../assets/C0050.MP4.00_15_41_10.Still001.jpg';
import AnimalWelfareImg from '../assets/C0106.MP4.00_27_18_17.Still001.jpg';

const socialData = [
    {
        title: "Education",
        description: "NRAIL supports education by enhancing school infrastructure, providing learning resources, and promoting access to quality education in surrounding communities.",
        image: EducationImg
    },
    {
        title: "Healthcare",
        description: "NRAIL strengthens community well-being through healthcare initiatives, including medical camps, improved facilities, and awareness programs on health and hygiene.",
        image: HealthcareImg
    },
    {
        title: "Women Empowerment",
        description: "NRAIL promotes inclusive growth by empowering women and enabling skill development initiatives that create livelihood opportunities and self-reliance.",
        image: EmpowermentImg
    },
    {
        title: "Animal Welfare Initiatives",
        description: "At NRAIL, animal welfare is an integral part of our social responsibility. Our gaushala initiatives provide safe shelter and essential care for cattle, reflecting our dedication to compassion and community support.",
        image: AnimalWelfareImg
    }
];

const CommunityChampsPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            {/* Hero Section - 95vh height */}
            <div className="relative w-full h-[95vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${CommunityHero}")` }}
                >
                    {/* Overlay gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Hero Text */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="font-[Outfit]"
                        style={{
                            fontSize: '48px',
                            fontWeight: 300,
                            lineHeight: 1.1,
                            letterSpacing: '0.02em',
                            color: '#ffffffff'
                        }}
                    >
                        Creating Impact <span className="text-white">Beyond Business</span>
                    </motion.h1>
                </div>
            </div>

            {/* Breadcrumbs Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24" style={{ marginTop: '5px', marginBottom: '50px' }}>
                <div className="flex flex-wrap items-center text-lg text-gray-500 font-normal font-['Outfit']">
                    <Link to="/" className="hover:text-[#8b0000] transition-colors hover:bg-gray-50 px-2 py-1 rounded-md">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400 shrink-0" />
                    <Link to="/our-story" className="hover:text-[#8b0000] transition-colors hover:bg-gray-50 px-2 py-1 rounded-md">Our Story</Link>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400 shrink-0" />
                    <span className="text-[#8b0000] font-medium px-2 py-1">Community Champions</span>
                </div>
            </div>

            {/* Descriptive Section */}
            <section className="pb-32 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="max-w-6xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-['Outfit'] !mb-0 leading-tight"
                            style={{ 
                                fontSize: 'clamp(26px, 3.2vw, 34px)', 
                                fontWeight: 300,
                                color: '#1a1a1a'
                            }}
                        >
                            Building Resilience, <span className="text-[#8b0000] font-light">Empowering Lives</span>
                        </motion.h2>
                        
                        <div className="flex flex-col">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify font-light !mt-4"
                            >
                                At NRAIL, CSR is driven by a commitment to meaningful community impact and inclusive development. Our initiatives focus on strengthening education infrastructure, improving healthcare access, promoting women empowerment, and supporting rural upliftment around our operational areas. Alongside these efforts, we conduct awareness programs on health, hygiene, environmental conservation, and safety—enabling communities to make informed, sustainable choices and build a better future.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Initiatives Section (Static 4-Card Grid) */}
            <section className="pb-24 bg-white overflow-hidden" style={{ marginTop: '60px' }}>
                <div className="container mx-auto px-6 md:px-12 lg:px-24" style={{ marginBottom: '40px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="font-['Outfit']" style={{ fontSize: '32px', fontWeight: 300, color: '#111', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '32px' }}>
                            Our <span style={{ color: '#8b0000', fontWeight: 700 }}>Social</span> Initiatives
                        </h2>
                    </motion.div>
                </div>

                <div className="w-full px-6 md:px-12 flex justify-center relative">
                    <div style={{ width: '100%', maxWidth: '1342px', display: 'flex', flexWrap: 'nowrap', gap: '30px', justifyContent: 'center' }}>
                        {socialData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col group"
                                style={{ height: '480px', width: '313px', flexShrink: 0 }}
                            >
                                {/* Image part */}
                                <div className="relative overflow-hidden" style={{ height: '220px' }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                {/* Content part */}
                                <div
                                    className="flex flex-col relative framework-card-bg overflow-hidden"
                                    style={{
                                        flexGrow: 1,
                                        padding: '36px', 
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    {/* Subtle Texture Overlay */}
                                    <div className="texture-overlay"></div>

                                    <h3
                                        className="text-white font-['Outfit'] relative z-10"
                                        style={{
                                            fontSize: '20px', 
                                            fontWeight: 600,
                                            lineHeight: 1.3,
                                            marginBottom: '8px',
                                            textAlign: 'left'
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-gray-100 font-['Outfit'] relative z-10"
                                        style={{
                                            fontSize: '14px',
                                            lineHeight: '1.6',
                                            fontWeight: 300,
                                            textAlign: 'justify',
                                            margin: 0
                                        }}
                                    >
                                        {item.description}
                                    </p>

                                    {/* Yellow Accent line at bottom left */}
                                    <div
                                        className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400 z-10"
                                        style={{ marginLeft: '1px' }}
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mesh Gradient and Texture Styles — same as Manufacturing Edge Framework */}
                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes meshGradient {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }

                    .framework-card-bg {
                        background-color: #8b0000;
                        background-image: 
                            radial-gradient(at 0% 0%, #b22222 0px, transparent 50%),
                            radial-gradient(at 100% 0%, #5a0000 0px, transparent 50%),
                            radial-gradient(at 100% 100%, #b22222 0px, transparent 50%),
                            radial-gradient(at 0% 100%, #5a0000 0px, transparent 50%),
                            radial-gradient(at 50% 50%, #8b0000 0px, transparent 50%);
                        background-size: 150% 150%;
                        animation: meshGradient 10s ease infinite;
                    }

                    .texture-overlay {
                        position: absolute;
                        inset: 0;
                        background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png");
                        opacity: 0.15;
                        pointer-events: none;
                        mix-blend-mode: overlay;
                    }
                ` }} />
            </section>

            {/* Bottom Spacer */}
            <div className="h-20 md:h-32 bg-white"></div>

            <Footer />
        </div>
    );
};

export default CommunityChampsPage;
