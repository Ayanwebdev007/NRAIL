import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ChevronRight, Recycle, Droplets, Zap } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// Asset imports
import forestVideo from '../assets/forest_loop.mp4';
import SustainabilityHero from '../assets/Sustainability & Circular Manufacturing.webp';

const EnvironmentalImpactPage = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('recycle');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            {/* Hero Section - 95vh height to match Legacy page */}
            <div className="relative w-full h-[95vh] overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={forestVideo} type="video/mp4" />
                </video>
                
                {/* Overlay gradient to match Legacy page */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Hero Text - Positioned at bottom-16 to match Legacy page */}
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
                        We choose <span className="text-white">Green</span>
                    </motion.h1>
                </div>
            </div>

            {/* Breadcrumbs Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24" style={{ marginTop: '5px', marginBottom: '50px' }}>
                <div className="flex flex-wrap items-center text-lg text-gray-500 font-normal font-['Outfit']">
                    <Link to="/" className="hover:text-[#8b0000] transition-colors hover:bg-gray-50 px-2 py-1 rounded-md">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400 shrink-0" />
                    <span className="text-gray-500 px-2 py-1">Life, Made Better</span>
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400 shrink-0" />
                    <span className="text-[#8b0000] font-medium px-2 py-1">Environmental Impact</span>
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
                            <span className="text-[#8b0000] font-light">Driven by Responsibility,</span> Defined by Environmental Stewardship
                        </motion.h2>
                        
                        <div className="flex flex-col">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify font-light !mt-4"
                            >
                                At NR Paper, environmental responsibility is embedded within our operational framework and governance practices. We follow a structured approach to sustainability, emphasising regulatory compliance, resource efficiency, and continuous environmental performance improvement. Our initiatives span certified raw material sourcing, energy optimisation, water stewardship, and emission reduction. These efforts are aligned with national environmental standards and support long-term ecological balance while ensuring operational reliability.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* "We believe in" Section */}
            <section 
                className="bg-[#f7faf7] relative overflow-hidden border-t border-gray-100"
                style={{ marginTop: '40px', paddingTop: '40px', paddingBottom: '80px' }}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-4 w-full" style={{ marginBottom: '40px' }}>
                        <span className="h-[5px] w-16 md:w-32 bg-[#8b0000]"></span>
                        <h4 className="font-['Outfit'] text-black font-extrabold tracking-tight uppercase leading-none" style={{ fontSize: '26px' }}>WE BELIEVE IN</h4>
                        <span className="h-[5px] w-16 md:w-32 bg-[#8b0000]"></span>
                    </div>

                    <div className="w-full">
                        {/* Premium Tabs Navigation */}
                        <div className="flex flex-wrap justify-center gap-12 lg:gap-24 mb-48 px-4">
                            {[
                                { id: 'recycle', label: 'Recycle & Reuse', icon: <Recycle className="w-6 h-6" /> },
                                { id: 'water', label: 'Responsible Water Use', icon: <Droplets className="w-6 h-6" /> },
                                { id: 'power', label: 'Integrated Power Management', icon: <Zap className="w-6 h-6" /> }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className="group relative flex flex-col items-center gap-4 py-2"
                                >
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                                        activeTab === tab.id 
                                        ? 'bg-[#8b0000] text-white shadow-2xl shadow-[#8b0000]/30 scale-110' 
                                        : 'bg-white text-gray-400 group-hover:text-[#8b0000] shadow-sm border border-gray-100 group-hover:border-[#8b0000]/20'
                                    }`}>
                                        {tab.icon}
                                    </div>
                                    <span className={`font-['Outfit'] text-[15px] font-bold uppercase tracking-[0.2em] transition-all duration-300 text-center whitespace-nowrap ${
                                        activeTab === tab.id ? 'text-black' : 'text-black/50 group-hover:text-black'
                                    }`}>
                                        {tab.label}
                                    </span>
                                    {activeTab === tab.id && (
                                        <motion.div 
                                            layoutId="activeTabUnderline" 
                                            className="absolute -bottom-4 w-12 h-1 bg-[#8b0000] rounded-full" 
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        {activeTab === 'recycle' && (
                            <div 
                                className="flex flex-col items-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700"
                                style={{ paddingTop: '80px' }}
                            >
                                {/* Intro Paragraph */}
                                <div className="max-w-4xl w-full text-center" style={{ marginBottom: '40px' }}>
                                    <p className="text-xl md:text-2xl text-black font-light leading-relaxed text-justify">
                                        At NR Paper, sustainability drives every aspect of our operations, enabling responsible and future-focused growth. At NRAIL, waste is not discarded—it is managed with intent. Guided by the 3R philosophy, we reduce, reuse, and recycle through disciplined tracking and clear segregation, steadily advancing toward our vision of zero-waste manufacturing.
                                    </p>
                                </div>

                                {/* Process Steps Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                    {[
                                        {
                                            title: "Paper Recycling at NRAIL",
                                            desc: "At NRAIL, paper recycling is not just a process—it is the foundation of our manufacturing philosophy. Built on a circular economy model, our operations transform large volumes of recovered paper into high-quality paper and board products, reducing dependence on virgin resources while delivering consistent performance."
                                        },
                                        {
                                            title: "Sourcing & Segregation of Waste Paper",
                                            desc: "The recycling journey begins with the procurement of recovered paper from domestic and international sources. This includes post-consumer and post-industrial waste, which is carefully sorted and classified to ensure quality consistency. Advanced segregation processes help remove contaminants and prepare the material for efficient processing."
                                        },
                                        {
                                            title: "Pulping & Fibre Recovery",
                                            desc: "The sorted waste paper undergoes pulping, where it is mixed with water to break it down into fibres. Through mechanical and chemical treatments, fibres are separated, cleaned, and refined. NRAIL utilizes advanced deinking and screening technologies to remove inks, adhesives, and impurities, ensuring high-quality fibre recovery."
                                        },
                                        {
                                            title: "Cleaning, Screening & Deinking",
                                            desc: "Multiple stages of cleaning and screening eliminate contaminants such as plastics, metals, and unwanted particles. Deinking processes further enhance fibre brightness and purity, making the recycled pulp suitable for high-performance paper and board applications."
                                        },
                                        {
                                            title: "Fibre Refinement & Stock Preparation",
                                            desc: "Recovered fibres are optimized through controlled refining processes to achieve desired strength, bonding, and surface characteristics. This stage ensures that the final product meets stringent requirements for stiffness, smoothness, and printability."
                                        },
                                        {
                                            title: "Paper & Board Formation",
                                            desc: "The refined pulp is then fed into high-speed paper machines where it is formed into sheets or boards. Precision control systems ensure uniform GSM, consistent formation, and superior surface quality. Coating and finishing processes further enhance print performance and durability."
                                        }
                                    ].map((step, idx) => (
                                        <div key={idx} className="space-y-4">
                                            <h3 className="font-['Outfit'] text-[#8b0000] font-bold uppercase tracking-tight leading-none" style={{ fontSize: '22px' }}>
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 font-light leading-relaxed text-lg text-justify">
                                                {step.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Explicit Vertical Spacer */}
                                <div style={{ height: '100px' }}></div>

                                {/* Closing Statement */}
                                <div className="mt-20 pt-20 border-t border-gray-100 text-center w-full">
                                    <p className="font-['Outfit'] text-black font-bold uppercase tracking-[0.2em] text-sm">
                                        At NRAIL, every sheet produced represents a step toward responsible manufacturing.
                                    </p>
                                </div>
                            </div>
                        )}
                        {/* Responsible Water Use Content */}
                        {activeTab === 'water' && (
                            <div 
                                className="flex flex-col items-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700"
                                style={{ paddingTop: '80px' }}
                            >
                                {/* Intro Paragraph */}
                                <div className="max-w-4xl w-full text-center" style={{ marginBottom: '40px' }}>
                                    <p className="text-xl md:text-2xl text-black font-light leading-relaxed text-justify">
                                        At NRAIL, water stewardship is a critical component of sustainable manufacturing. Recognizing water as a valuable and finite resource, the Company has implemented structured systems and advanced technologies to ensure efficient usage, recycling, and responsible discharge across all operations.
                                    </p>
                                </div>

                                {/* Process Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                    {[
                                        {
                                            title: "Optimized Water Consumption",
                                            desc: "NRAIL continuously works to reduce fresh water intake through process optimization and closed-loop systems. Advanced paper machines and stock preparation technologies are designed to maximize water efficiency while maintaining consistent product quality."
                                        },
                                        {
                                            title: "Water Recycling & Reuse",
                                            desc: "A significant portion of process water is recovered, treated, and reused within the manufacturing cycle. Through multi-stage filtration and recovery systems, NRAIL minimizes water wastage and enhances reuse efficiency across various production stages."
                                        },
                                        {
                                            title: "Advanced Effluent Treatment Systems (ETP)",
                                            desc: "All wastewater generated during manufacturing is treated through state-of-the-art Effluent Treatment Plants. These systems ensure that discharged water meets or exceeds regulatory standards, significantly reducing environmental impact. Treated water is also reused wherever feasible, supporting a circular water management approach."
                                        },
                                        {
                                            title: "Zero Liquid Discharge (ZLD) Approach",
                                            desc: "NRAIL is progressively strengthening its water management practices by adopting zero or minimal discharge systems, ensuring that water is conserved and reused to the maximum extent possible."
                                        },
                                        {
                                            title: "Continuous Monitoring & Compliance",
                                            desc: "Water usage, treatment, and discharge are closely monitored through automated systems and regular audits. This ensures strict adherence to environmental regulations and internal sustainability benchmarks."
                                        },
                                        {
                                            title: "Process Integration & Innovation",
                                            desc: "By integrating water management with production systems, NRAIL enhances efficiency without compromising performance. Continuous investments in technology and process improvement further strengthen water conservation outcomes."
                                        }
                                    ].map((step, idx) => (
                                        <div key={idx} className="space-y-4">
                                            <h3 className="font-['Outfit'] text-[#8b0000] font-bold uppercase tracking-tight leading-none" style={{ fontSize: '22px' }}>
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 font-light leading-relaxed text-lg text-justify">
                                                {step.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Explicit Vertical Spacer */}
                                <div style={{ height: '100px' }}></div>

                                {/* Closing Statement */}
                                <div className="mt-20 pt-20 border-t border-gray-100 text-center w-full">
                                    <p className="font-['Outfit'] text-black font-bold uppercase tracking-[0.2em] text-sm">
                                        At NRAIL, responsible water use goes beyond compliance—it is a commitment to preserving resources for future generations.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Integrated Power Management Content */}
                        {activeTab === 'power' && (
                            <div 
                                className="flex flex-col items-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700"
                                style={{ paddingTop: '80px' }}
                            >
                                {/* Intro Paragraph */}
                                <div className="max-w-4xl w-full text-center" style={{ marginBottom: '40px' }}>
                                    <p className="text-xl md:text-2xl text-black font-light leading-relaxed text-justify">
                                        At NRAIL, energy efficiency and resource optimization are central to sustainable manufacturing. The Company has developed an integrated power management framework that combines captive power generation, energy recovery, and process optimization to ensure reliable, efficient, and environmentally responsible operations.
                                    </p>
                                </div>

                                {/* Process Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                    {[
                                        {
                                            title: "Captive Power Generation",
                                            desc: "NRAIL operates in-house power generation systems to ensure uninterrupted energy supply across its manufacturing units. A key component is the plastic-fired boiler, which enables the generation of approximately 7.5 MW of electricity, utilizing non-recyclable waste as a fuel source. This supports energy independence while contributing to responsible waste utilization."
                                        },
                                        {
                                            title: "Energy Recovery & Optimization",
                                            desc: "Energy generated within the system is efficiently distributed and utilized across various production processes. Heat recovery mechanisms and optimized steam usage enhance overall energy efficiency, reducing dependency on external power sources and minimizing energy losses."
                                        },
                                        {
                                            title: "Sustainable Fuel Utilization",
                                            desc: "By incorporating alternative fuels such as processed waste materials, NRAIL reduces reliance on conventional fossil fuels. This approach supports circular economy principles while lowering the environmental impact of energy consumption."
                                        },
                                        {
                                            title: "Process Integration & Efficiency",
                                            desc: "Power management is closely integrated with manufacturing operations. Advanced control systems and automation ensure optimal load distribution, improved machine efficiency, and reduced energy intensity per tonne of production."
                                        },
                                        {
                                            title: "Monitoring & Control Systems",
                                            desc: "Real-time monitoring and data-driven energy management systems enable continuous tracking of power consumption, performance, and efficiency. This allows for proactive optimization and adherence to internal energy benchmarks."
                                        },
                                        {
                                            title: "Environmental Responsibility",
                                            desc: "NRAIL's integrated approach reduces carbon footprint, enhances energy efficiency, and supports compliance with environmental standards. By aligning energy use with sustainability goals, the Company ensures responsible industrial growth."
                                        }
                                    ].map((step, idx) => (
                                        <div key={idx} className="space-y-4">
                                            <h3 className="font-['Outfit'] text-[#8b0000] font-bold uppercase tracking-tight leading-none" style={{ fontSize: '22px' }}>
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 font-light leading-relaxed text-lg text-justify">
                                                {step.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Explicit Vertical Spacer */}
                                <div style={{ height: '100px' }}></div>

                                {/* Closing Statement */}
                                <div className="mt-20 pt-20 border-t border-gray-100 text-center w-full">
                                    <p className="font-['Outfit'] text-black font-bold uppercase tracking-[0.2em] text-sm">
                                        At NRAIL, energy is managed with precision and purpose—delivering operational reliability while advancing environmental responsibility.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Bottom Hero Image Section */}
            <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-gray-900">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={SustainabilityHero}
                        alt="Sustainability and Circular Manufacturing"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default EnvironmentalImpactPage;
