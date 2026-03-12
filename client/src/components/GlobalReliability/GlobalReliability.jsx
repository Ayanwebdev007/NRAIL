import React from 'react';

const GlobalReliability = () => {
    return (
        <section className="w-full flex justify-center items-center bg-black overflow-hidden relative">
            <img
                src="/NRAIL MAP.png"
                alt="Global Reliability - Wraps the world"
                className="w-full h-auto block"
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    imageRendering: '-webkit-optimize-contrast',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                }}
            />
        </section>
    );
};

export default GlobalReliability;
