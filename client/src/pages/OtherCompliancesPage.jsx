import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import InvestorCard from '../components/Investors/InvestorCard';
import PDFPopup from '../components/Investors/PDFPopup';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';

const OtherCompliancesPage = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [view, setView] = useState('root'); // root, files
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [popupData, setPopupData] = useState(null);

    // Dynamic asset loading using Vite's glob import for the new directory
    const pdfs = import.meta.glob('../assets/11. Other Compliances/**/*.pdf', { eager: true, as: 'url' });
    const excels = import.meta.glob('../assets/11. Other Compliances/**/*.{xls,xlsx,xlsm,csv}', { eager: true, as: 'url' });

    const allFilesMap = { ...pdfs, ...excels };

    // Structure: .../11. Other Compliances/[Category]/[File]
    const categories = [...new Set(Object.keys(allFilesMap).map(path => {
        const parts = path.split('/');
        const idx = parts.lastIndexOf('11. Other Compliances');
        return parts[idx + 1];
    }))].sort();

    // Import familiarization PDF
    const familiarizationPdfs = import.meta.glob('../assets/9. Independent Directors/9. Independent Directors/Familiarization Programme for Independent Directors.pdf', { eager: true, as: 'url' });

    useEffect(() => {
        if (location.pathname === '/other-compliances/moa-and-aoa') {
            setSelectedCategory('MOA and AOA');
            setView('files');
            const files = getFiles('MOA and AOA');
            const moaFile = files.find(f => f.originalName === 'MOA & AOA.pdf' || f.name.toLowerCase().includes('moa & aoa'));
            if (moaFile) {
                setPopupData({ url: moaFile.url, title: moaFile.name });
            }
        } else if (location.pathname === '/other-compliances/familiarization-programme') {
            const pdfPaths = Object.keys(familiarizationPdfs);
            if (pdfPaths.length > 0) {
                const url = familiarizationPdfs[pdfPaths[0]];
                setPopupData({ url, title: "Familiarization Programme for Independent Directors" });
            }
        } else {
            const catParam = searchParams.get('category');
            if (catParam && categories.includes(catParam)) {
                handleNavigateCategory(catParam);
            }
        }
    }, [searchParams, categories.length, location.pathname]);

    const getFiles = (category) => {
        return Object.keys(allFilesMap)
            .filter(path => {
                const inCategory = path.includes(`/${category}/`);
                const parts = path.split('/');
                const catIdx = parts.lastIndexOf(category);
                return inCategory && parts[catIdx + 1].includes('.');
            })
            .map(path => {
                const fileName = path.split('/').pop();
                const extension = fileName.split('.').pop().toLowerCase();
                let type = 'file';
                if (extension === 'pdf') type = 'pdf';
                if (['xls', 'xlsx', 'xlsm', 'csv'].includes(extension)) type = 'excel';

                // Extract date for sorting (handles DD.MM.YYYY)
                let sortRatio = 0;
                const dateMatch = fileName.match(/(\d{2})\.(\d{2})\.(\d{4})/);
                if (dateMatch) {
                    const [_, day, month, year] = dateMatch;
                    sortRatio = parseInt(`${year}${month}${day}`);
                }

                return {
                    name: fileName.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
                    url: allFilesMap[path],
                    originalName: fileName,
                    type: type,
                    sortDate: sortRatio
                };
            })
            .sort((a, b) => {
                if (a.sortDate && b.sortDate) {
                    return b.sortDate - a.sortDate; // Latest year first
                }
                return b.originalName.localeCompare(a.originalName, undefined, { numeric: true });
            });
    };

    const handleNavigateCategory = (category) => {
        setSelectedCategory(category);
        setView('files');
    };

    const goBackToRoot = () => {
        setView('root');
        setSelectedCategory(null);
    };

    const renderContent = () => {
        if (view === 'root') {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                    {categories.map((cat, index) => (
                        <InvestorCard 
                            key={index}
                            title={cat}
                            number={(index + 1).toString().padStart(2, '0')}
                            onClick={() => handleNavigateCategory(cat)}
                        />
                    ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                {getFiles(selectedCategory).map((file, index) => (
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

    const handleClosePopup = () => {
        setPopupData(null);
        if (location.pathname === '/other-compliances/moa-and-aoa') {
            navigate('/other-compliances?category=MOA and AOA', { replace: true });
        } else if (location.pathname === '/other-compliances/familiarization-programme') {
            navigate('/other-compliances', { replace: true });
        }
    };

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            <div className="h-20 md:h-28 w-full bg-white"></div>

            <div className="pt-16 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b0000]/[0.02] to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-24 relative z-10">
                    <div className="flex flex-wrap items-center gap-1.5 text-lg mb-16 font-normal">
                        <Link to="/" className="text-[#2d6ca2] hover:text-[#800000] transition-colors px-1">Home</Link>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <Link to="/investor-information" className="text-[#2d6ca2] hover:text-[#800000] transition-colors px-1">Investors</Link>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span 
                            className={`${view === 'root' ? 'text-[#800000] font-medium' : 'text-[#2d6ca2] hover:text-[#800000] cursor-pointer'} transition-colors px-1 uppercase tracking-tight`}
                            onClick={goBackToRoot}
                        >
                            Other Compliances
                        </span>
                        {selectedCategory && (
                            <>
                                <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                                <span className="text-[#800000] font-medium px-1 uppercase tracking-wider">
                                    {selectedCategory}
                                </span>
                            </>
                        )}
                    </div>

                    <div className="h-6 md:h-8"></div>

                    <motion.h1
                        className="text-[48px] font-extrabold mb-8 leading-[0.9] uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {view === 'root' ? (
                            <>
                                <span className="block text-black">Other</span>
                                <span className="block text-[#8b0000]">Compliances</span>
                            </>
                        ) : (
                            <>
                                <span className="block text-black uppercase tracking-tight">
                                    {selectedCategory}
                                </span>
                                <span className="block text-[#8b0000]">Documents</span>
                            </>
                        )}
                    </motion.h1>

                    <div className="h-8 md:h-12 w-full"></div>
                </div>
            </div>

            <div className="py-24 md:py-32 bg-[#fafafa]/50">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        key={view + (selectedCategory || '')}
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
                        onClose={handleClosePopup} 
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default OtherCompliancesPage;
