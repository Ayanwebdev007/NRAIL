
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Factory, Lightbulb, HeartHandshake } from 'lucide-react';

const EnvironmentalImpact = () => {
    const steps = [
        {
            id: '01',
            title: 'Sustainable Sourcing',
            description: 'Ethical sourcing designed to conserve resources and strengthen sustainability.',
            icon: <Leaf className="w-10 h-10 text-white" />
        },
        {
            id: '02',
            title: 'State of the art Manufacturing',
            description: 'Modern manufacturing driven by efficiency and responsibility.',
            icon: <Factory className="w-10 h-10 text-white" />
        },
        {
            id: '03',
            title: 'Sustainable Solutions',
            description: 'We develop eco-conscious paper solutions crafted for consistent, everyday use.',
            icon: <Lightbulb className="w-10 h-10 text-white" />
        },
        {
            id: '04',
            title: 'Nature Friendly',
            description: 'All our products are biodegradable, designed to decompose naturally',
            icon: <HeartHandshake className="w-10 h-10 text-white" />
        }
    ];

    return (
        <section className="relative w-full bg-white text-gray-900 overflow-hidden font-[Outfit]" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
            <div className="container mx-auto px-6 text-center flex flex-col items-center" style={{ marginBottom: '4rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-light tracking-tight leading-tight text-green-950"
                    style={{ marginBottom: '0.5rem' }}
                >
                    Environmental <span className="font-serif italic text-emerald-800">Impact</span>
                </motion.h2>
                <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full opacity-60" style={{ marginBottom: '1rem' }}></div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-emerald-700 font-medium tracking-[0.2em] uppercase"
                >
                    Sustainability Anchors Our Way Forward
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex justify-center w-full"
            >
                <div className="w-[97%] h-[45vh] md:h-[65vh] overflow-hidden relative rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.1)] border border-black/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2641&auto=format&fit=crop"
                        alt="Sustainable Architecture"
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            <div className="container mx-auto px-6 mt-32 text-center max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <div className="flex flex-col items-center">
                        <span className="w-px h-16 bg-gradient-to-b from-transparent via-red-300 to-red-700 mb-6 opacity-30"></span>
                        <p className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 text-center max-w-4xl leading-relaxed" style={{ marginBottom: '4rem' }}>
                            With sustainability embedded into its corporate ethos, NRAIL is committed to catalysing responsible growth across the industry.
                        </p>
                    </div>

                    <h3 className="text-3xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight text-center" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                        <span className="font-light">Regenerative Thinking,</span> <span className="font-serif italic text-emerald-800 font-normal">Responsibly Applied</span>
                    </h3>

                    <p className="max-w-2xl text-base md:text-lg text-gray-500 font-light leading-loose text-center" style={{ marginTop: '1rem' }}>
                        From source to solution, responsibility defines our process—forming a regenerative loop that enriches ecosystems, supports communities, and creates value for generations ahead.
                    </p>
                </motion.div>
            </div>

            {/* Process Steps */}
            <div className="relative" style={{ marginTop: '140px', paddingBottom: '10rem' }}>
                {/* Full Width Zigzag Line */}
                <div className="hidden md:block absolute top-0 left-0 w-full h-[200px] z-0 opacity-40 overflow-hidden">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 200">
                        {/* Zigzag path: Start mid -> Peak -> Valley -> Peak -> Valley -> End mid */}
                        {/* Box centers approx at x=150, 450, 750, 1050. Y positions 40 (Up) and 136 (Down) */}
                        <path
                            d="M0,88 L150,40 L450,136 L750,40 L1050,136 L1200,88"
                            fill="none"
                            stroke="#064e3b"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`group relative flex flex-col items-center text-center cursor-pointer transition-all duration-300 overflow-hidden px-4 rounded-lg`}
                                style={{
                                    transform: index % 2 === 1 ? 'translateY(6rem)' : 'translateY(0)', // 6rem = 96px (matches SVG valley-peak diff)
                                    paddingBottom: '5rem',
                                    height: '18rem'
                                }}
                            >
                                {/* Hover Background Overlay */}
                                <div className="absolute inset-0 bg-black translate-y-[-101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

                                {/* Content Wrapper */}
                                <div className="relative z-10 flex flex-col items-center w-full h-full pt-8">
                                    {/* Red Box Container (Persistent) - Turns Green on Hover */}
                                    <div className="relative w-24 h-24 shrink-0 flex items-center justify-center bg-red-700 shadow-lg rounded-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-700" style={{ marginBottom: '1.5rem' }}>
                                        {/* Number (Default) */}
                                        <span className="absolute text-white text-3xl font-bold transition-all duration-300 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-50">
                                            {step.id}
                                        </span>

                                        {/* Icon (Hover) */}
                                        <span className="absolute flex items-center justify-center transition-all duration-300 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100">
                                            {step.icon}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h4
                                        className="text-xl font-medium text-black group-hover:text-white px-2 transition-colors duration-300"
                                        style={{ marginBottom: '1rem' }}
                                    >
                                        {step.title}
                                    </h4>

                                    {/* Description */}
                                    <div className="text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed max-w-[220px] mx-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {step.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default EnvironmentalImpact;
