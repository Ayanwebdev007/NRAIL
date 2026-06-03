import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import InvestorCard from '../components/Investors/InvestorCard';
import PDFPopup from '../components/Investors/PDFPopup';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const InvestorInformationPage = () => {
    const [popupData, setPopupData] = useState(null);

    // Dynamic asset loading using Vite's glob import
    // Note: Path includes "8. Investor Information" twice due to nested structure in assets
    const pdfs = import.meta.glob('../assets/8. Investor Information/8. Investor Information/**/*.pdf', { eager: true, as: 'url' });
    const excels = import.meta.glob('../assets/8. Investor Information/8. Investor Information/**/*.{xls,xlsx,xlsm,csv}', { eager: true, as: 'url' });

    const allFilesMap = { ...pdfs, ...excels };

    // Format and sort files
    const allFiles = Object.keys(allFilesMap)
        .filter(path => !path.includes('/.DS_Store'))
        .map(path => {
            const fileName = path.split('/').pop();
            const extension = fileName.split('.').pop().toLowerCase();
            let type = 'file';
            if (extension === 'pdf') type = 'pdf';
            if (['xls', 'xlsx', 'xlsm', 'csv'].includes(extension)) type = 'excel';
            
            return {
                name: fileName.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
                url: allFilesMap[path],
                originalName: fileName,
                type: type
            };
        })
        .sort((a, b) => b.originalName.localeCompare(a.originalName, undefined, { numeric: true }));

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            <style>{`
                @media (max-width: 1023px) {
                    .investors-title-mobile { font-size: 36px !important; line-height: 1.1 !important; }
                    .investors-breadcrumb-mobile { margin-bottom: 24px !important; gap: 8px !important; font-size: 14px !important; }
                    .investors-content-mobile { padding-top: 40px !important; padding-bottom: 40px !important; }
                    .investors-card-grid-mobile { gap: 16px !important; padding-top: 24px !important; padding-bottom: 24px !important; }
                    .investors-spacer-mobile { height: 70px !important; }
                }
            `}</style>
            <div className="h-20 md:h-28 w-full bg-white investors-spacer-mobile"></div>

            <div className="pt-16 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b0000]/[0.02] to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-24 relative z-10">
                    <div className="flex flex-wrap items-center gap-1.5 text-lg mb-16 font-normal investors-breadcrumb-mobile">
                        <Link to="/" className="text-[#2d6ca2] hover:text-[#800000] transition-colors px-1">Home</Link>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span className="text-[#2d6ca2] px-1 pointer-events-none">Investors</span>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span className="text-[#800000] font-medium px-1">Investor Information</span>
                    </div>

                    <div className="h-6 md:h-8"></div>

                    <motion.h1
                        className="text-[48px] font-extrabold mb-8 leading-[0.9] uppercase investors-title-mobile"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="block text-black">Investor</span>
                        <span className="block text-[#8b0000]">Information</span>
                    </motion.h1>

                    <div className="h-8 md:h-12 w-full"></div>
                </div>
            </div>

            <div className="py-24 md:py-32 bg-[#fafafa]/50 investors-content-mobile">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 investors-card-grid-mobile"
                    >
                        {allFiles.map((file, index) => (
                            <InvestorCard 
                                key={index}
                                title={file.name}
                                number={(index + 1).toString().padStart(2, '0')}
                                type={file.type}
                                onClick={() => setPopupData({ url: file.url, title: file.name })}
                            />
                        ))}
                    </motion.div>

                    {allFiles.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-black/40 text-xl font-light italic">No statutory documents found in this section.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="h-20 md:h-32 bg-white"></div>

            <Footer />

            <AnimatePresence>
                {popupData && (
                    <PDFPopup 
                        pdfUrl={popupData.url} 
                        title={popupData.title} 
                        onClose={() => setPopupData(null)} 
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default InvestorInformationPage;
