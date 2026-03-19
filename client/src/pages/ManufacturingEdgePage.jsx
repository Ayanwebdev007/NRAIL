import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import heroImg from '../assets/Unit V PM2.webp';
import unit1 from '../assets/unit_1.png';
import unit1TabImg1 from '../assets/unit 1 tab img 1.jpg';
import unit1TabImg2 from '../assets/unit 1 tab img 2.jpg';
import unitVPm1_1 from '../assets/ME UNIT V PM1 1.JPG';
import unitVPm1_2 from '../assets/ME UNIT V PM1 2.JPG';
import unitVPm1_3 from '../assets/ME UNIT V PM1 3.JPG';
import unitVPm2 from '../assets/unit_v_pm2.png';
import unitVPm2Img1 from '../assets/Unit V PM2 (Manufacturing Edge) 1.jpg';
import unitVPm2Img2 from '../assets/Unit V PM2 (Manufacturing Edge) 2.jpg';
import unitVPm2Img3 from '../assets/Unit V PM2 (Manufacturing Edge) 3.jpg';
import unitVi from '../assets/ME UNIT VI.JPG';
import mainEdgeImg from '../assets/Manufacturing Edge first img.jpg';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Framework images
import techImg from '../assets/framework_tech.png';
import capacityImg from '../assets/framework_capacity.png';
import qualityImg from '../assets/framework_quality.png';
import sustainabilityImg from '../assets/framework_sustainability.png';
import innovationImg from '../assets/framework_innovation_v2.png';
import efficiencyImg from '../assets/framework_efficiency.png';
import talentImg from '../assets/framework_talent.png';
import techJpg from '../assets/Advanced Process Technology.jpg';
import capacityJpg from '../assets/Capacity & Scale Leadership.JPG';
import qualityJpg from '../assets/Quality Assurance & Testing Rigor..jpg';
import sustainabilityJpg from '../assets/Sustainability & Circular Manufacturing.jpg';
import innovationJpg from '../assets/Research & Product Innovation.jpg';
import efficiencyJpg from '../assets/Operational Discipline & Efficiency.JPG';
import learningJpg from '../assets/Learning & Talent Development.jpg';
import blueGrid from '../assets/blue_grid.png';
import greenPowerJpg1 from '../assets/green power 1.jpg';
import greenPowerJpg2 from '../assets/green power 2.jpeg';
import greenPowerJpg3 from '../assets/green power 3.JPG';

const frameworkData = [
    {
        title: "Advanced Process Technology",
        description: "Integration of high-speed machinery, automation systems, and precision controls ensuring consistent output and superior quality.",
        image: techJpg
    },
    {
        title: "Capacity & Scale Leadership",
        description: "Robust production infrastructure exceeding half a million tonnes annually, enabling dependable large-scale supply.",
        image: capacityJpg
    },
    {
        title: "Quality Assurance & Testing Rigor",
        description: "Comprehensive testing protocols, international compliance standards, and continuous monitoring to ensure product reliability.",
        image: qualityJpg
    },
    {
        title: "Sustainability & Circular Manufacturing",
        description: "Recycling-led operations, energy optimization, water stewardship, and environmentally responsible processes.",
        image: sustainabilityJpg
    },
    {
        title: "Research & Product Innovation",
        description: "Dedicated R&D capabilities focused on performance enhancement, coating technologies, fibre optimization, and market-responsive development.",
        image: innovationJpg
    },
    {
        title: "Operational Discipline & Efficiency",
        description: "Structured planning, cost optimization, lean execution, and asset utilization excellence driving productivity and profitability.",
        image: efficiencyJpg
    },
    {
        title: "Learning & Talent Development",
        description: "Continuous skill enhancement, technical training, leadership development, and knowledge-driven growth empowering high-performance teams.",
        image: learningJpg
    }
];

const unitsData = [
    {
        id: 'unit-1',
        label: 'Unit I',
        location: 'Vapi',
        descTitle: 'Established Legacy & Quality Excellence',
        description: 'Unit I in Vapi started its operations in April 1995 with a duplex board production capacity of 15,000 TPA. It is equipped with a cutting-edge duplex board manufacturing machine. The produced boards are ideally suited for offset printing, embossing, and foil stamping. Endorsed by the Central Food Technology Research Institute of India, these products are celebrated for their superior performance in post-print applications.',
        stats: [
            { title: '1,20,000 TPA', value: 'Duplex Board production capacity' },
            { title: '32,428 sq mt', value: 'Wide Spread Base' },
            { title: '200-500 GSM', value: 'Versatile Board Range' },
        ],
        images: [unit1TabImg1, unit1TabImg2],
    },
    {
        id: 'unit-v-pm1',
        label: 'Unit V - PM1',
        location: 'Sarigam & Angam',
        descTitle: 'Writing & Printing Excellence',
        description: 'Established in 2014, Unit V, the Writing and Printing Unit in Sarigam, produces Writing & Printing Paper known for its brightness, shade stability, and smoothness across different GSM thicknesses. These qualities ensure excellent tensile strength and surface characteristics suitable for high-speed multicolor gravure printing. Furthermore, NR Copier products, made from high-brightness chemical deinked pulp, offer high tensile strength, jam-free performance, a flawless finish, and compatibility with laser printers, inkjet printers, copier machines, and fax machines.',
        stats: [
            { title: '1,08,000 TPA', value: 'Writing & Printing production capacity' },
            { title: '3,37,599 sq mt', value: 'Wide Spread Base' },
            { title: '70, 75, 80 GSM', value: 'NR Copier product range' },
        ],
        images: [unitVPm1_1, unitVPm1_2, unitVPm1_3],
    },
    {
        id: 'unit-v-pm2',
        label: 'Unit V – PM 2',
        location: 'Sarigam & Angam',
        descTitle: 'Eco-Friendly Innovation',
        description: 'Situated within a sprawling 100-acre industrial complex in Sarigam, we adhere to a Go-Green philosophy by exclusively using 100% recycled raw materials. Our recent INR 1000 crore expansion includes a 2,40,000 TPA packaging board plant. This makes Unit V PM II India\'s largest standalone packaging board facility with a 1000 TPD machine capacity.',
        stats: [
            { title: '2,40,000 TPA', value: 'Packaging board plant capacity' },
            { title: '1,000 TPD', value: 'Machine capacity' },
            { title: '3,37,599 sq mt', value: 'Wide Spread Base' },
        ],
        images: [unitVPm2Img1, unitVPm2Img2, unitVPm2Img3],
    },
    {
        id: 'unit-vi',
        label: 'Unit VI',
        location: 'Dahej',
        descTitle: 'Growth & Expansion Journey',
        description: 'Spread across a 135-acre site in Dahej, Gujarat, NRAIL is developing a next-generation manufacturing complex with a capacity of 1,500 TPD—marking a significant milestone in its growth and expansion journey.',
        stats: [
            { title: '1,500 TPD', value: 'Production capacity' },
            { title: '135-Acre', value: 'Expansion site' },
        ],
        image: unitVi,
    },
];

const UnitsSection = () => {
    const [activeUnit, setActiveUnit] = useState(0);
    const unit = unitsData[activeUnit];

    return (
        <div style={{ background: '#ffffff', padding: '100px 0 0 0' }}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                    style={{ marginBottom: '64px' }}
                >
                    <h2 className="font-['Outfit']" style={{ fontSize: '36px', fontWeight: 300, color: '#111', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        <span style={{ color: '#8b0000', fontWeight: 700 }}>India's Largest</span> Green Packaging Plant
                    </h2>
                </motion.div>

                {/* Unit Tabs - JK Paper Style Blocks */}
                <div className="flex justify-center" style={{ marginBottom: '64px' }}>
                    <div className="inline-flex overflow-hidden" style={{ border: '1px solid #e0e0e0', borderRadius: '0px' }}>
                        {unitsData.map((u, idx) => (
                            <button
                                key={u.id}
                                onClick={() => setActiveUnit(idx)}
                                className="transition-all duration-300 font-['Outfit'] flex flex-col items-center justify-center text-center"
                                style={{
                                    padding: '16px 32px',
                                    background: activeUnit === idx ? '#8b0000' : '#ffffff',
                                    color: activeUnit === idx ? '#ffffff' : '#000000',
                                    cursor: 'pointer',
                                    border: 'none',
                                    borderRight: idx < unitsData.length - 1 ? '1px solid #e0e0e0' : 'none',
                                    minWidth: '180px',
                                    outline: 'none',
                                }}
                            >
                                <span style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.2 }}>
                                    {u.label}
                                </span>
                                <span style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.2, marginTop: '2px' }}>
                                    {u.location.split(',')[0]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Unit Content */}
                <motion.div
                    key={unit.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {unit.stats && unit.stats.length > 0 ? (
                        <>
                            {/* Stats Grid - Premium Elevation */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl mx-auto" style={{ marginBottom: '80px', textAlign: 'center' }}>
                                {unit.stats.map((stat, sIdx) => (
                                    <motion.div
                                        key={sIdx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: sIdx * 0.1 }}
                                        className="relative group border-l border-gray-100 first:border-none pl-4 md:pl-0"
                                    >
                                        <div style={{
                                            fontSize: '36px',
                                            fontWeight: 700,
                                            color: '#8b0000',
                                            lineHeight: 1,
                                            marginBottom: '8px',
                                            whiteSpace: 'nowrap',
                                            letterSpacing: '-0.02em'
                                        }}>
                                            {stat.title}
                                        </div>
                                        <p style={{
                                            fontSize: '18px',
                                            color: '#222',
                                            fontWeight: 600,
                                            lineHeight: '1.4',
                                            margin: 0,
                                            whiteSpace: 'nowrap',
                                            letterSpacing: '0.01em'
                                        }}>
                                            {stat.value}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Description Paragraph */}
                            <div className="w-full max-w-3xl mx-auto text-center">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    style={{ fontSize: '24px', fontWeight: 700, color: '#8b0000', lineHeight: 1.2, marginBottom: '20px', letterSpacing: '0.02em' }}
                                >
                                    {unit.descTitle}
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    style={{ fontSize: '17px', lineHeight: '1.9', color: '#555', textAlign: 'justify', margin: 0, fontWeight: 300 }}
                                >
                                    {unit.description}
                                </motion.p>
                            </div>
                        </>
                    ) : (
                        <div className="py-20 text-center w-full">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                style={{ fontSize: '32px', fontWeight: 300, color: '#111', textTransform: 'uppercase', letterSpacing: '0.2em' }}
                            >
                                Operational Expansion in Progress
                            </motion.h3>
                            <p className="text-gray-400 mt-4 italic mb-12">Details for Unit VI will be updated soon.</p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Wider Image Container outside the main container - Center aligned */}
            <div className="w-full flex justify-center" style={{ padding: '0 24px' }}>
                <div style={{ width: '100%', maxWidth: '1400px' }}>
                    <motion.div
                        key={`${unit.id}-image`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-full"
                        style={{ marginTop: '80px' }}
                    >
                        <div className="relative w-full aspect-[28/9] overflow-hidden rounded-none">
                            {unit.images ? (
                                <Swiper
                                    modules={[Autoplay, Pagination, EffectFade]}
                                    effect="fade"
                                    loop={true}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#8b0000]',
                                    }}
                                    className="w-full h-full"
                                >
                                    {unit.images.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <img
                                                src={img}
                                                alt={`${unit.label} - ${i + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <img
                                    src={unit.image}
                                    alt={unit.label}
                                    className="w-full h-full object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-[5] pointer-events-none"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

const GreenPowerSection = () => {
    const [swiper, setSwiper] = useState(null);

    return (
        <section className="relative w-full h-[650px] flex items-center overflow-hidden group">
            <style>
                {`
                .green-power-nav-btn {
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
                .group:hover .green-power-nav-btn {
                    opacity: 1;
                }
                .green-power-nav-btn:hover {
                    background: rgba(139, 0, 0, 0.8);
                    color: white !important;
                    transform: scale(1.1);
                }
                .green-power-nav-btn svg {
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
                            className="w-full h-full bg-cover bg-center" 
                            style={{ backgroundImage: `url(${greenPowerJpg1})` }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                            className="w-full h-full bg-cover bg-center" 
                            style={{ backgroundImage: `url(${greenPowerJpg2})` }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                            className="w-full h-full bg-cover bg-center" 
                            style={{ backgroundImage: `url(${greenPowerJpg3})` }}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Custom Navigation Arrows */}
            <button 
                onClick={() => swiper?.slidePrev()}
                className="green-power-prev green-power-nav-btn absolute left-8 top-1/2 -translate-y-1/2"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={() => swiper?.slideNext()}
                className="green-power-next green-power-nav-btn absolute right-8 top-1/2 -translate-y-1/2"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dark Overlay for better text legibility */}
            <div className="absolute inset-0 bg-black/40 z-[1]"></div>

            {/* Content Overlay */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full flex items-center justify-start relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-lg rounded-none"
                    style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(8px)',
                        padding: '24px 32px',
                        width: '100%'
                    }}
                >
                    <h2 className="font-['Outfit'] font-thin text-white tracking-wide" style={{ fontSize: '32px', margin: 0, padding: 0, lineHeight: '1.2', color: 'white', fontWeight: 100 }}>
                        Green Power
                    </h2>
                    <div className="space-y-1" style={{ marginTop: '8px' }}>
                        <p className="font-['Outfit'] text-white/90 leading-relaxed font-light text-justify" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                            NRAIL is deeply committed to environmentally responsible manufacturing, integrating green production, resource conservation, and structured waste management into its core operations.
                        </p>
                        <p className="font-['Outfit'] text-white/80 leading-relaxed font-light text-justify" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                            The Company adopts best-in-class process technologies designed to minimize environmental impact, reduce pollution load, and optimize resource utilization across the value chain.
                        </p>
                        <p className="font-['Outfit'] text-white/80 leading-relaxed font-light text-justify" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                            Consistent performance across these dimensions reflects NRAIL’s strong environmental compliance framework and its disciplined approach toward sustainable industrial growth.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FrameworkSection = () => {
    return (
        <section className="pb-24 bg-white overflow-hidden" style={{ marginTop: '60px' }}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24" style={{ marginBottom: '40px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="font-['Outfit']" style={{ fontSize: '32px', fontWeight: 300, color: '#111', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '32px', whiteSpace: 'nowrap' }}>
                        The <span style={{ color: '#8b0000', fontWeight: 700 }}>Framework</span> Supporting Our Manufacturing Mastery
                    </h2>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-center relative">
                {/* Arrow Wrapper - Positioned relative to the 1000px container */}
                <div style={{ width: '100%', maxWidth: '1000px', position: 'relative' }}>
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={30} // Increased for better separation with effects
                        slidesPerView={1}
                        loop={true} // Enable infinite looping
                        speed={600} // Faster duration for a snappier feel
                        parallax={true}
                        grabCursor={true}
                        touchRatio={1.2} // More sensitive to swipes
                        resistance={true}
                        resistanceRatio={0.85}
                        navigation={{
                            nextEl: '.framework-next',
                            prevEl: '.framework-prev',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1.2, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 25 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        autoplay={{ 
                            delay: 5000, 
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true 
                        }}
                        style={{
                            paddingBottom: '40px', // Reduced padding since dots are gone
                        }}
                    >
                        {frameworkData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col h-full group"
                                    style={{ height: '480px' }}
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
                                                marginBottom: '20px',
                                                minHeight: '52px',
                                                display: 'flex',
                                                alignItems: 'center',
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
                                                textAlign: 'left',
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
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Arrows outside the Swiper container */}
                    <button className="framework-prev absolute top-1/2 -left-16 transform -translate-y-1/2 z-10 hidden xl:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-all duration-300">
                        <ChevronRight className="w-6 h-6 rotate-180" />
                    </button>
                    <button className="framework-next absolute top-1/2 -right-16 transform -translate-y-1/2 z-10 hidden xl:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-all duration-300">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Pagination and Custom Styles */}
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
    );
};

const ManufacturingEdgePage = () => {
    const location = useLocation();
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            {/* Hero Section - 95vh height */}
            <div className="relative w-full h-[95vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${heroImg}")` }}
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
                        The <span className="text-white">Manufacturing Edge</span>
                    </motion.h1>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div className="container mx-auto px-6" style={{ marginTop: '5px', marginBottom: '50px' }}>
                <div className="flex items-center text-lg text-gray-500 font-normal">
                    <Link to="/" className="hover:text-[#8b0000] transition-colors hover:bg-gray-50 px-2 py-1 rounded-md">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                    <span className="text-gray-500 px-2 py-1">Manufacturing Excellence</span>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                    <span className="text-[#8b0000] font-medium px-2 py-1">The Manufacturing Edge</span>
                </div>
            </div>

            {/* Main Content - Two Column Layout */}
            <div className="bg-white py-16 md:py-24 relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Left Column - Image (Sticky) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-80px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative"
                            style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}
                        >
                            <img
                                src={mainEdgeImg}
                                alt="NRAIL Manufacturing Facility"
                                className="w-full object-cover rounded-lg"
                                style={{ minHeight: '560px', height: '100%' }}
                            />
                        </motion.div>

                        {/* Right Column - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        >
                            <h2
                                className="font-['Outfit']"
                                style={{
                                    fontSize: '30px',
                                    fontWeight: 400,
                                    lineHeight: 1.25,
                                    color: '#8b0000',
                                    marginBottom: '28px',
                                }}
                            >
                                For decades, NRAIL has remained at the forefront of India's paper and packaging industry, driven by innovation, disciplined execution, and a clear long-term vision.
                            </h2>

                            <div className="flex flex-col" style={{ gap: '18px' }}>
                                <p className="text-gray-600" style={{ fontSize: '15px', lineHeight: '1.75', textAlign: 'justify' }}>
                                    Through sustained investments in state-of-the-art infrastructure, advanced process technologies, and quality-centric systems, the Company has built robust manufacturing capabilities that consistently deliver reliable, high-performance paper and board solutions across domestic and global markets.
                                </p>

                                <p className="text-gray-600" style={{ fontSize: '15px', lineHeight: '1.75', textAlign: 'justify' }}>
                                    Operational excellence at NRAIL is reinforced by structured planning, asset optimization, and continuous process enhancement. The Company's integrated manufacturing ecosystem ensures precision in GSM control, surface uniformity, fibre optimization, and production consistency—enabling scalable growth while maintaining uncompromising standards of quality.
                                </p>

                                <AnimatePresence>
                                    {showMore && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="flex flex-col"
                                            style={{ gap: '18px', overflow: 'hidden' }}
                                        >
                                            <p className="text-gray-600" style={{ fontSize: '15px', lineHeight: '1.75', textAlign: 'justify' }}>
                                                Sustainability is embedded into every operational process. Responsible fibre procurement, circular production practices, advanced effluent treatment facilities, energy-efficient technologies, and structured waste reduction initiatives collectively minimize environmental impact. Through recycling-led manufacturing, NRAIL conserves natural resources while producing high-performance paper and board solutions that meet international standards.
                                            </p>

                                            <p className="text-gray-600" style={{ fontSize: '15px', lineHeight: '1.75', textAlign: 'justify' }}>
                                                Technology has consistently supported this evolution. In 2006, NRAIL became one of the first companies in the paper sector to implement SAP, establishing a fully integrated enterprise platform that enhanced transparency, production planning, financial control, and cross-functional coordination. This early digital adoption laid the foundation for robust governance and operational visibility.
                                            </p>

                                            <p className="text-gray-600" style={{ fontSize: '15px', lineHeight: '1.75', textAlign: 'justify' }}>
                                                Strengthening its digital transformation journey, NRAIL further embraced AWS cloud infrastructure to modernize IT systems, improve scalability, streamline infrastructure management, and reduce its environmental footprint. Cloud migration supports optimized energy consumption, enhanced data efficiency, and improved agility—aligning digital advancement with sustainability goals.
                                            </p>

                                            <p className="text-gray-600" style={{ fontSize: '15px', lineHeight: '1.75', textAlign: 'justify' }}>
                                                Through responsible leadership, structured governance, and forward-looking investments in both manufacturing and technology, NRAIL continues to balance industrial scale with environmental stewardship—creating long-term value for customers, communities, and stakeholders.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    onClick={() => setShowMore(!showMore)}
                                    className="text-[#8b0000] font-bold text-sm uppercase tracking-widest mt-4 flex items-center hover:opacity-70 transition-opacity"
                                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                                >
                                    {showMore ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Manufacturing Units Section */}
            <UnitsSection />

            {/* Framework Section */}
            <FrameworkSection />

            {/* Green Power Section */}
            <GreenPowerSection />

            {/* Bottom Spacer */}
            <div className="h-20 md:h-32 bg-white"></div>

            <Footer />
        </div>
    );
};

export default ManufacturingEdgePage;
