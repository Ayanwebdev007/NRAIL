import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import InvestorCard from '../components/Investors/InvestorCard';
import PDFPopup from '../components/Investors/PDFPopup';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const parseDateFromFileName = (fileName) => {
    // 1. Try to find DD.MM.YYYY or DD-MM-YYYY format
    const ddMMyyyyMatch = fileName.match(/(\d{1,2})[.-](\d{1,2})[.-](\d{4})/);
    if (ddMMyyyyMatch) {
        const [_, day, month, year] = ddMMyyyyMatch;
        const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        if (!isNaN(date.getTime())) {
            return date.getTime();
        }
    }

    // 2. Try to find Month DD, YYYY format after "ended"
    const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
    const endedMatch = nameWithoutExt.match(/ended\s+(.+)$/i);
    if (endedMatch && endedMatch[1]) {
        const dateStr = endedMatch[1].trim();
        const parsed = Date.parse(dateStr);
        if (!isNaN(parsed)) {
            return parsed;
        }
    }

    // Fallback: try parsing the whole name without extension
    const parsedFallback = Date.parse(nameWithoutExt);
    if (!isNaN(parsedFallback)) {
        return parsedFallback;
    }

    return 0;
};

const FinancialReportsPage = () => {
    const [view, setView] = useState('root'); // root, year-details
    const [selectedYear, setSelectedYear] = useState(null);
    const [popupData, setPopupData] = useState(null);

    // Dynamic asset loading using Vite's glob import
    // Note: Path includes "2. Financial Report" twice due to nested structure in assets
    const pdfs = import.meta.glob('../assets/2. Financial Report/2. Financial Report/**/*.pdf', { eager: true, as: 'url' });
    const excels = import.meta.glob('../assets/2. Financial Report/2. Financial Report/**/*.{xls,xlsx,xlsm}', { eager: true, as: 'url' });

    const allFiles = { ...pdfs, ...excels };

    // Extract unique years from folder names
    const years = [...new Set(Object.keys(allFiles)
        .map(path => {
            const parts = path.split('/');
            // The structure is .../2. Financial Report/2. Financial Report/[Year]/[File]
            // We want the part after the second "2. Financial Report"
            const reportIdx = parts.lastIndexOf('2. Financial Report');
            return parts[reportIdx + 1];
        }))].sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

    const getFilesForYear = (year) => {
        return Object.keys(allFiles)
            .filter(path => path.includes(`/${year}/`))
            .map(path => ({
                name: path.split('/').pop().replace(/\.[^/.]+$/, "").replace(/_/g, " "),
                url: allFiles[path],
                originalName: path.split('/').pop(),
                type: path.toLowerCase().endsWith('.pdf') ? 'pdf' : 'excel'
            }))
            .sort((a, b) => {
                const dateA = parseDateFromFileName(a.originalName);
                const dateB = parseDateFromFileName(b.originalName);
                if (dateA !== 0 && dateB !== 0) {
                    return dateB - dateA;
                }
                if (dateA !== 0) return -1;
                if (dateB !== 0) return 1;
                return b.originalName.localeCompare(a.originalName, undefined, { numeric: true, sensitivity: 'base' });
            });
    };

    const handleNavigate = (year) => {
        setSelectedYear(year);
        setView('year-details');
    };

    const renderContent = () => {
        if (view === 'root') {
            return (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-12 finance-card-grid-mobile">
                    {years.map((year, index) => (
                        <InvestorCard 
                            key={index}
                            title={year}
                            number={(index + 1).toString().padStart(2, '0')}
                            onClick={() => handleNavigate(year)}
                        />
                    ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 finance-card-grid-mobile">
                {getFilesForYear(selectedYear).map((file, index) => (
                    <InvestorCard 
                        key={index}
                        title={file.name}
                        number={(index + 1).toString().padStart(2, '0')}
                        type={file.type}
                        onClick={() => setPopupData({ url: file.url, title: file.name })}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />
            <style>{`
                @media (max-width: 1023px) {
                    .finance-title-mobile { font-size: 36px !important; line-height: 1.1 !important; }
                    .finance-breadcrumb-mobile { margin-bottom: 24px !important; gap: 8px !important; font-size: 14px !important; }
                    .finance-content-mobile { padding-top: 40px !important; padding-bottom: 40px !important; }
                    .finance-card-grid-mobile { gap: 16px !important; padding-top: 24px !important; padding-bottom: 24px !important; }
                    .finance-spacer-mobile { height: 70px !important; }
                }
            `}</style>

            <div className="h-20 md:h-28 w-full bg-white finance-spacer-mobile"></div>

            <div className="pt-16 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b0000]/[0.02] to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-24 relative z-10">
                    <div className="flex flex-wrap items-center gap-1.5 text-lg mb-16 font-normal finance-breadcrumb-mobile">
                        <Link to="/" className="text-[#2d6ca2] hover:text-[#800000] transition-colors px-1">Home</Link>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span className="text-[#2d6ca2] px-1 pointer-events-none">Investors</span>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span 
                            className={`${view === 'root' ? 'text-[#800000] font-medium' : 'text-[#2d6ca2] hover:text-[#800000] cursor-pointer'} transition-colors px-1`}
                            onClick={() => setView('root')}
                        >
                            Financial Results
                        </span>
                        {view === 'year-details' && selectedYear && (
                            <>
                                <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                                <span className="text-[#800000] font-medium px-1 uppercase tracking-wider">
                                    {selectedYear}
                                </span>
                            </>
                        )}
                    </div>

                    <div className="h-6 md:h-8"></div>

                    <motion.h1
                        className="text-[48px] font-extrabold mb-8 leading-[0.9] uppercase finance-title-mobile"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {view === 'root' ? (
                            <>
                                <span className="block text-black">Financial</span>
                                <span className="block text-[#8b0000]">Results</span>
                            </>
                        ) : (
                            <>
                                <span className="block text-black">Financial Results</span>
                                <span className="block text-[#8b0000]">{selectedYear}</span>
                            </>
                        )}
                    </motion.h1>

                    <div className="h-8 md:h-12 w-full"></div>
                </div>
            </div>

            <div className="py-24 md:py-32 bg-[#fafafa]/50 finance-content-mobile">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        key={view + (selectedYear || '')}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {renderContent()}
                    </motion.div>
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

export default FinancialReportsPage;
