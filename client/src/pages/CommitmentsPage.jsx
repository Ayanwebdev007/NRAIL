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
import commitmentHero from '../assets/commitment header.jpg';
import excellenceImg from '../assets/Together, We Drive Excellence.JPG';
import TrustCareImage from '../assets/Strengthening Lives Through Trust and Care.png';
import foundation1 from '../assets/The Foundation of Our Growth Story.jpg';
import foundation2 from '../assets/The Foundation of Our Growth Story 2.png';
import greenPowerJpg1 from '../assets/green power 1.webp';
import greenPowerJpg2 from '../assets/green power 2.webp';
import greenPowerJpg3 from '../assets/green power 3.webp';

const TeamExcellenceSection = () => {
    const [swiper, setSwiper] = useState(null);

    return (
        <section className="relative w-full h-[600px] flex items-center overflow-hidden group">
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
            <div className="absolute inset-0">
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
            <div className="absolute inset-x-0 bottom-0 h-[75%] z-[1] pointer-events-none" style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 85%, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 85%, black 100%)' }}></div>
            {/* Dark tint at bottom for text legibility - Increased Height */}
            <div className="absolute inset-x-0 bottom-0 h-[65%] z-[2] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 50%, transparent 100%)' }}></div>

            {/* Content at Bottom - Focused on the text provided by user */}
            <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ padding: '0 60px 40px 60px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full pointer-events-auto"
                >
                    <h2 className="font-['Outfit'] font-thin tracking-wide" style={{ fontSize: '28px', margin: 0, padding: 0, lineHeight: '1.2', fontWeight: 100, color: '#ffffff', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                        The Foundation of Our Growth Story
                    </h2>
                    <p className="font-['Outfit'] font-light" style={{ fontSize: '16px', lineHeight: '1.7', marginTop: '12px', color: 'rgba(255,255,255,0.95)', textShadow: '0 1px 4px rgba(0,0,0,0.4)', maxWidth: '1200px' }}>
                        NRAIL’s evolving work culture acts as a catalyst for operational excellence and long-term success. At NRAIL, our culture brings together passion, innovation, and a shared purpose. It empowers our teams to grow, adapt, and explore new possibilities. Together, it fuels our progress and strengthens our ability to deliver meaningful outcomes.
                    </p>
                </motion.div>
            </div>

            {/* Custom Navigation Arrows */}
            <button 
                onClick={() => swiper?.slidePrev()}
                className="team-excellence-prev team-excellence-nav-btn absolute left-8 top-1/2 -translate-y-1/2 z-[60]"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={() => swiper?.slideNext()}
                className="team-excellence-next team-excellence-nav-btn absolute right-8 top-1/2 -translate-y-1/2 z-[60]"
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

            {/* Hero Section - 95vh height */}
            <div className="relative w-full h-[95vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${commitmentHero}")` }}
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
                        People. <span className="text-white">Teamwork.</span> Progress.
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
                                className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify font-light !mt-4"
                            >
                                At NRAIL, we manufacture with purpose—driving progress toward a sustainable future. Excellence at NRAIL is more than a pursuit—it is embedded in every action we take. With a clear focus on creating lasting value for society, it remains the principle that drives our journey forward.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-8 md:h-12 bg-white w-full"></div> {/* Refined Structural Spacer */}

            {/* Strengthening Lives Section (Now Light Red Theme / Dark Text) */}
            <section className="pb-32 bg-white w-full text-black font-['Outfit'] grid grid-cols-[1fr_min(1440px,90%)_1fr]">
                <div className="col-start-2 bg-[#fecaca] border border-red-100 rounded-sm grid grid-cols-1 lg:grid-cols-[80px_1fr_80px_1.2fr] min-h-[450px] lg:min-h-[550px] overflow-hidden shadow-sm">
                    {/* Left Empty Column (The Left Gap) - 80px on desktop */}
                    <div className="hidden lg:block"></div>

                    {/* Middle: Text Content (High Contrast Dark on Light Red) */}
                    <div className="flex flex-col justify-center px-8 py-12 lg:px-0 lg:py-20 text-black text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-start"
                        >
                            <h3 className="font-['Outfit'] leading-tight text-[#1a1a1a]" style={{ 
                                fontSize: 'clamp(26px, 3.2vw, 34px)', 
                                fontWeight: 300,
                                textAlign: 'left'
                            }}>
                                <span className="font-light text-[#8b0000]">Strengthening</span> Lives Through <br className="hidden lg:block" /> Trust and Care
                            </h3>
                            <div className="h-4 md:h-6"></div> {/* Refined Spacer for Moderate Gap */}
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify font-light">
                                At NRAIL, trust, safety, and commitment form the foundation of our organizational ethos and guide every aspect of our operations. We build trust through transparency, ethical governance, and consistent delivery, fostering strong relationships with employees, customers, and stakeholders. Safety remains a top priority, supported by structured systems, rigorous training, and strict adherence to regulatory standards to ensure a secure and healthy workplace. Our commitment extends beyond the factory floor to the communities we serve—through initiatives in education, healthcare, and social development, including women empowerment and local engagement. By aligning responsible practices with long-term vision, NRAIL continues to create a safe, inclusive, and trustworthy ecosystem for both people and society.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Empty Column (The Right Gap) - 80px on desktop */}
                    <div className="hidden lg:block"></div>
                    
                    {/* Right: Image Container */}
                    <div className="relative min-h-[350px] lg:min-h-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img 
                                src={TrustCareImage} 
                                alt="Strengthening Lives" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="h-12 md:h-20 bg-white w-full"></div> {/* Structural Spacer */}

            {/* Foundation of Our Growth Story Section (Now also Light Red Theme / Dark Text) */}
            <section className="pb-32 bg-white w-full text-black font-['Outfit'] grid grid-cols-[1fr_min(1440px,90%)_1fr]">
                <div className="col-start-2 grid grid-cols-1 lg:grid-cols-[1.2fr_80px_1fr_80px] min-h-[450px] lg:min-h-[550px] overflow-hidden bg-[#fecaca] border border-red-100 shadow-sm rounded-sm">
                    {/* Left: Asset (Image on Left in this section) */}
                    <div className="relative h-full min-h-[300px] lg:min-h-full overflow-hidden order-2 lg:order-1">
                        <motion.img
                            initial={{ scale: 1.1, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            src={excellenceImg}
                            alt="Together, We Drive Excellence"
                            className="absolute inset-0 w-full h-full object-cover object-bottom"
                        />
                        <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500"></div>
                    </div>

                    {/* Spacer Column - 80px on desktop */}
                    <div className="hidden lg:block order-2"></div>

                    {/* Right: Text Content (High Contrast Dark on Light Red) */}
                    <div className="flex flex-col justify-center px-8 py-12 lg:px-0 lg:py-20 order-1 lg:order-3 text-black">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-start"
                        >
                            <h3 className="font-['Outfit'] leading-tight text-[#1a1a1a]" style={{ 
                                fontSize: 'clamp(26px, 3.2vw, 34px)', 
                                fontWeight: 300,
                                textAlign: 'left'
                            }}>
                                Together, We <br className="hidden lg:block" /> <span className="text-[#8b0000] font-light">Drive Excellence</span>
                            </h3>
                            <div className="h-4 md:h-6"></div> {/* Refined Spacer for Moderate Gap */}
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify font-light">
                                At NRAIL, we believe that strong teams build strong organizations. Our approach to team building focuses on creating a culture of trust, collaboration, and shared responsibility. By encouraging cross-functional synergy, continuous skill enhancement, and leadership engagement, we ensure that every individual plays a meaningful role in our growth journey. This cohesive and performance-driven culture allows us to achieve operational excellence and sustained progress.
                            </p>
                        </motion.div>
                    </div>

                    {/* Far Right Padding Column - 80px on desktop */}
                    <div className="hidden lg:block order-4"></div>
                </div>
            </section>

            <div className="h-12 md:h-20 bg-white w-full"></div> {/* Structural Spacer */}

            <TeamExcellenceSection />

            <Footer />
        </div>
    );
};

export default CommitmentsPage;
