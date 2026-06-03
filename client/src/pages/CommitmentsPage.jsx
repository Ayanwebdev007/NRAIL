import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Asset imports
import commitmentHero from '../assets/commitment header.webp';
import excellenceImg from '../assets/Together, We Drive Excellence.webp';
import TrustCareImage from '../assets/Strengthening Lives Through Trust and Care.webp';
import foundation1 from '../assets/The Foundation of Our Growth Story.webp';
import foundation2 from '../assets/The Foundation of Our Growth Story 2.webp';
import greenPowerJpg1 from '../assets/green power 1.webp';
import greenPowerJpg2 from '../assets/green power 2.webp';
import greenPowerJpg3 from '../assets/green power 3.webp';

const TeamExcellenceSection = () => {
    const [swiper, setSwiper] = useState(null);

    return (
        <section className="relative w-full h-[600px] flex items-center overflow-hidden group commit-slider-mobile">
            <style>
                {`
                .team-excellence-nav-btn {
                    color: rgba(255, 255, 255, 0.9) !important;
                    background: rgba(0, 0, 0, 0.2);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border: none;
                    outline: none;
                    opacity: 0;
                    z-index: 60;
                }
                .group:hover .team-excellence-nav-btn {
                    opacity: 1;
                }
                .team-excellence-nav-btn:hover {
                    background: rgba(139, 0, 0, 0.8);
                    color: white !important;
                    transform: scale(1.1);
                }
                .team-excellence-nav-btn svg {
                    width: 20px;
                    height: 20px;
                }
                `}
            </style>
            {/* Background Slider */}
            <div className="absolute inset-0 commit-slider-bg-mobile">
                <Swiper
                    modules={[Autoplay, EffectFade, Navigation]}
                    onSwiper={setSwiper}
                    effect="fade"
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="h-full w-full"
                >
                    <SwiperSlide>
                        <div 
                            className="w-full h-full bg-cover" 
                            style={{ backgroundImage: `url("${foundation1}")`, backgroundPosition: '50% 25%' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                            className="w-full h-full bg-cover" 
                            style={{ backgroundImage: `url("${foundation2}")`, backgroundPosition: '50% 25%' }}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Blurry Gradient Overlay at Bottom - Increased Height */}
            <div className="absolute inset-x-0 bottom-0 h-[75%] z-[1] pointer-events-none commit-slider-overlay-mobile" style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 85%, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 85%, black 100%)' }}></div>
            {/* Dark tint at bottom for text legibility - Increased Height */}
            <div className="absolute inset-x-0 bottom-0 h-[65%] z-[2] pointer-events-none commit-slider-overlay-mobile" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 50%, transparent 100%)' }}></div>

            {/* Content at Bottom - Focused on the text provided by user */}
            <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none commit-slider-content-mobile" style={{ padding: '0 60px 40px 60px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full pointer-events-auto"
                >
                    <h2 className="font-['Outfit'] font-thin tracking-wide commit-slider-title-mobile" style={{ fontSize: '28px', margin: 0, padding: 0, lineHeight: '1.2', fontWeight: 100, color: '#ffffff', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                        The Foundation of Our Growth Story
                    </h2>
                    <p className="font-['Outfit'] font-light commit-slider-text-mobile" style={{ fontSize: '16px', lineHeight: '1.7', marginTop: '12px', color: 'rgba(255,255,255,0.95)', textShadow: '0 1px 4px rgba(0,0,0,0.4)', maxWidth: '1200px' }}>
                        NRAIL’s evolving work culture acts as a catalyst for operational excellence and long-term success. At NRAIL, our culture brings together passion, innovation, and a shared purpose. It empowers our teams to grow, adapt, and explore new possibilities. Together, it fuels our progress and strengthens our ability to deliver meaningful outcomes.
                    </p>
                </motion.div>
            </div>

            {/* Custom Navigation Arrows */}
            <button 
                onClick={() => swiper?.slidePrev()}
                className="team-excellence-prev team-excellence-nav-btn absolute left-8 top-1/2 -translate-y-1/2 z-[60] commit-slider-arrow-mobile"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={() => swiper?.slideNext()}
                className="team-excellence-next team-excellence-nav-btn absolute right-8 top-1/2 -translate-y-1/2 z-[60] commit-slider-arrow-mobile"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </section>
    );
};

const CommitmentsPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            <style>{`
                @media (max-width: 1023px) {
                    .commit-hero-mobile { height: 40vh !important; }
                    .commit-hero-text-mobile { font-size: 32px !important; bottom: 16px !important; }
                    .commit-breadcrumb-mobile { font-size: 14px !important; margin-bottom: 24px !important; }
                    .commit-section-mobile { padding-top: 64px !important; padding-bottom: 64px !important; min-height: auto !important; }
                    .commit-title-mobile { font-size: 24px !important; text-align: center; }
                    .commit-text-mobile { font-size: 15px !important; text-align: justify !important; padding: 0 16px !important; }
                    .commit-main-para-mobile { font-size: 15px !important; text-align: justify !important; padding: 0 24px !important; }
                    .commit-line-mobile { margin-left: auto !important; margin-right: auto !important; }
                    
                    /* Foundation / Slider specific */
                    .commit-slider-mobile { height: auto !important; flex-direction: column !important; padding-bottom: 32px !important; }
                    .commit-slider-bg-mobile { position: relative !important; height: 60vw !important; max-height: 300px !important; width: 100% !important; background-color: #ffffff; }
                    .commit-slider-bg-mobile .swiper-slide { background-color: #ffffff !important; }
                    .commit-slider-bg-mobile .swiper-slide div { background-size: contain !important; background-repeat: no-repeat !important; background-position: center center !important; background-color: #ffffff !important; }
                    .commit-slider-overlay-mobile { display: none !important; }
                    .commit-slider-content-mobile { 
                        position: relative !important; 
                        padding: 32px 16px 20px 16px !important; 
                        background: #ffffff !important; 
                    }
                    .commit-slider-title-mobile { 
                        font-size: 22px !important; 
                        color: #1a1a1a !important; 
                        text-shadow: none !important; 
                        text-align: center !important;
                    }
                    .commit-slider-text-mobile { 
                        font-size: 15px !important; 
                        color: #4b5563 !important; 
                        text-shadow: none !important; 
                        text-align: justify !important; 
                        padding: 0 24px !important;
                        margin-top: 16px !important;
                    }
                    .commit-slider-arrow-mobile { display: none !important; }
                }
            `}</style>
            {/* Hero Section - 95vh height */}
            <div className="relative w-full h-[95vh] overflow-hidden commit-hero-mobile">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${commitmentHero}")` }}
                >
                    {/* Overlay gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Hero Text */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center w-full px-4 commit-hero-text-mobile">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="font-[Outfit] commit-hero-text-mobile"
                        style={{
                            fontSize: '48px',
                            fontWeight: 300,
                            lineHeight: 1.1,
                            letterSpacing: '0.02em',
                            color: '#ffffffff'
                        }}
                    >
                        People. <span className="text-white">Teamwork.</span> Progress.
                    </motion.h1>
                </div>
            </div>

            {/* Breadcrumbs Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 commit-breadcrumb-mobile" style={{ marginTop: '5px', marginBottom: '50px' }}>
                <div className="flex flex-wrap items-center text-lg text-gray-500 font-normal font-['Outfit'] commit-breadcrumb-mobile">
                    <Link to="/" className="hover:text-[#8b0000] transition-colors hover:bg-gray-50 px-2 py-1 rounded-md">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400 shrink-0" />
                    <Link to="/our-story" className="hover:text-[#8b0000] transition-colors hover:bg-gray-50 px-2 py-1 rounded-md">Our Story</Link>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400 shrink-0" />
                    <span className="text-[#8b0000] font-medium px-2 py-1">Commitments</span>
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
                            Safety is a <span className="text-[#8b0000] font-light">non-negotiable priority</span> across all operations and environments
                        </motion.h2>
                        
                        <div className="flex flex-col">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify font-light !mt-4 commit-main-para-mobile"
                            >
                                At NRAIL, we manufacture with purpose—driving progress toward a sustainable future. Excellence at NRAIL is more than a pursuit—it is embedded in every action we take. With a clear focus on creating lasting value for society, it remains the principle that drives our journey forward.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-8 md:h-12 bg-white w-full"></div> {/* Refined Structural Spacer */}

            {/* Strengthening Lives Section - Redesigned to match Mission/Vision aesthetic (Increased Height) */}
            <section className="bg-[#8b0000] py-64 lg:py-80 relative overflow-hidden flex items-center commit-section-mobile" style={{ minHeight: '85vh' }}>
                {/* Decorative Floral Background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg
                        viewBox="0 0 400 400"
                        className="absolute -top-20 -right-20 w-[400px] h-[400px] rotate-[15deg] fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M100,200 C100,100 200,50 300,100 C250,150 200,250 100,200 Z" />
                        <path d="M50,150 C50,80 120,40 180,80 C150,120 120,180 50,150 Z" />
                        <path d="M150,250 C150,180 220,140 280,180 C250,220 220,280 150,250 Z" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
                        
                        {/* Left Column - Text Block */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-white space-y-6"
                            >
                                <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight commit-title-mobile">
                                    <span className="whitespace-nowrap">Strengthening Lives</span> <br className="hidden lg:block text-[#fecacacc]" /> <span className="text-[#fecaca] whitespace-nowrap">Through Trust and Care</span>
                                </h3>
                                <div className="w-12 h-[2px] bg-white opacity-40 commit-line-mobile"></div>
                                <p className="text-base lg:text-lg leading-relaxed text-gray-100 font-light text-justify max-w-xl commit-text-mobile">
                                    At NRAIL, trust, safety, and commitment form the foundation of our organizational ethos and guide every aspect of our operations. We build trust through transparency, ethical governance, and consistent delivery, fostering strong relationships with employees, customers, and stakeholders. Safety remains a top priority, supported by structured systems, rigorous training, and strict adherence to regulatory standards to ensure a secure and healthy workplace. Our commitment extends beyond the factory floor to the communities we serve—through initiatives in education, healthcare, and social development, including women empowerment and local engagement. By aligning responsible practices with long-term vision, NRAIL continues to create a safe, inclusive, and trustworthy ecosystem for both people and society.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Column - Organic Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-20 overflow-hidden rounded-2xl aspect-[3/2] border-2 border-white/90"
                                style={{
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                }}>
                                <img
                                    src={TrustCareImage}
                                    alt="Strengthening Lives"
                                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <div className="h-12 md:h-20 bg-white w-full"></div> {/* Structural Spacer */}

            {/* Together, We Drive Excellence Section - Redesigned to match aesthetic (Flipped Layout) */}
            <section className="bg-[#8b0000] py-48 lg:py-64 relative overflow-hidden flex items-center commit-section-mobile" style={{ minHeight: '80vh' }}>
                {/* Decorative Floral Background (Bottom Left for flipped effect) */}
                <div className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg
                        viewBox="0 0 400 400"
                        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rotate-[-45deg] fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M100,200 C100,100 200,50 300,100 C250,150 200,250 100,200 Z" />
                        <path d="M50,150 C50,80 120,40 180,80 C150,120 120,180 50,150 Z" />
                        <path d="M150,250 C150,180 220,140 280,180 C250,220 220,280 150,250 Z" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        
                        {/* Left Column - Organic Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-20 overflow-hidden rounded-2xl aspect-[3/2] border-2 border-white/90"
                                style={{
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                }}>
                                <img
                                    src={excellenceImg}
                                    alt="Together, We Drive Excellence"
                                    className="w-full h-full object-cover object-bottom"
                                />
                            </div>
                        </motion.div>

                        {/* Right Column - Text Block */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-white space-y-6"
                            >
                                <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight commit-title-mobile">
                                    <span className="whitespace-nowrap">Together, We</span> <br className="hidden lg:block text-[#fecacacc]" /> <span className="text-[#fecaca] whitespace-nowrap">Drive Excellence</span>
                                </h3>
                                <div className="w-12 h-[2px] bg-white opacity-40 commit-line-mobile"></div>
                                <p className="text-base lg:text-lg leading-relaxed text-gray-100 font-light text-justify max-w-xl commit-text-mobile">
                                    At NRAIL, we believe that strong teams build strong organizations. Our approach to team building focuses on creating a culture of trust, collaboration, and shared responsibility. By encouraging cross-functional synergy, continuous skill enhancement, and leadership engagement, we ensure that every individual plays a meaningful role in our growth journey. This cohesive and performance-driven culture allows us to achieve operational excellence and sustained progress.
                                </p>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="h-12 md:h-20 bg-white w-full"></div> {/* Structural Spacer */}

            <TeamExcellenceSection />

            <Footer />
        </div>
    );
};

export default CommitmentsPage;
