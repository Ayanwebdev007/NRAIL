import React from 'react';

const ManufacturingExcellence = () => {
    // Placeholder images
    const images = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Modern Building
            title: "Commercial Spaces"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", // Interior Office
            title: "Interior Design"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop", // Retail/Shopping
            title: "Retails & Shopping"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", // Meeting/Business
            title: "Strategic Business"
        }
    ];

    return (
        <section
            className="relative bg-black text-center text-white overflow-hidden"
            style={{ padding: '140px 20px 100px 20px' }} // Reduced top padding (was 200px) but kept enough for watermark
        >

            {/* Background Faint Text "OUR EXCELLENCE" - Positioned from Left Side */}
            <div
                className="absolute left-0 w-full pointer-events-none select-none overflow-hidden text-left"
                style={{
                    top: '55px', // Moved UP to reduce overlap (was 75px)
                    zIndex: 0
                }}
            >
                <span
                    className="whitespace-nowrap font-bold"
                    style={{
                        fontSize: '85px', // Increased size (was 75px)
                        color: '#ffffff',
                        opacity: 0.08,
                        marginLeft: '15%',
                        display: 'inline-block',
                        transform: 'scaleY(1.3)', // Kept the vertical stretch
                        transformOrigin: 'left center'
                    }}
                >
                    OUR EXCELLENCE
                </span>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center">

                    {/* Main Title - Matching Key Highlights: 48px, font-weight 300 (Light) */}
                    {/* Base color Red (#8b0000), "Excellence" White (#ffffff) */}
                    <div className="relative inline-block">
                        <h2
                            className="font-[Outfit]"
                            style={{
                                fontSize: '48px',
                                fontWeight: 300,
                                color: '#8b0000', // Red Base
                                lineHeight: 1.1,
                                marginBottom: '20px', // Balanced gap
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            Manufacturing <span style={{ color: '#ffffff' }}>Excellence</span>
                        </h2>
                    </div>

                    {/* Red Line Separator */}
                    <div className="w-24 h-[2px] bg-red-600" style={{ marginBottom: '30px' }}></div>

                    {/* Description with BALANCED Gap from Bottom */}
                    <p
                        className="max-w-3xl mx-auto text-base lg:text-lg text-gray-300 font-light leading-relaxed"
                        style={{ marginBottom: '100px' }} // Balanced gap (was 160px, too huge)
                    >
                        The floors are meticulously designed to offer you a world-class experience in shopping and food
                        with brands from around India making their presence felt in this iconic marketplace.
                    </p>
                </div>
            </div>

            {/* Gallery Strip */}
            <div className="flex w-full h-[600px] gap-0 overflow-hidden flex-col md:flex-row group/gallery">
                {images.map((img) => (
                    <div
                        key={img.id}
                        className="
              relative flex-1 bg-cover bg-center bg-no-repeat cursor-pointer overflow-hidden group
              /* Animation: Slow (1.2s) and smooth */
              transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]
              
              /* Interaction */
              hover:flex-[3.5] 
              
              /* Dimming Logic */
              brightness-100 
              group-hover/gallery:brightness-[0.4]
              hover:!brightness-100
            "
                        style={{ backgroundImage: `url(${img.src})` }}
                    >
                        {/* Elegant Gradient Overlay - Enhanced for Text Visibility */}
                        {/* 1. Base Darkening */}
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-[1200ms]"></div>

                        {/* 2. Strong Bottom Gradient specifically for text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-[1200ms]"></div>

                        {/* Content - Always Visible */}
                        <div className="absolute bottom-10 left-0 w-full text-center md:text-left md:left-10 z-10 opacity-100 transition-all duration-[1000ms]">
                            <div className="inline-block text-left">
                                <h3 className="text-xl md:text-2xl font-medium text-white uppercase tracking-widest drop-shadow-xl mb-2">
                                    {img.title}
                                </h3>
                                <div className="h-0.5 w-12 bg-white/80 group-hover:bg-red-600 rounded-full md:ml-1 opacity-100 transition-colors duration-300"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ManufacturingExcellence;
