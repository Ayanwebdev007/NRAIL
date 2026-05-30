import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import InvestorCard from '../components/Investors/InvestorCard';
import PDFPopup from '../components/Investors/PDFPopup';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';

// Dynamic asset loading using Vite's glob import
const pdfs = import.meta.glob('../assets/1.Shareholder Information/1.Shareholder Information/**/*.pdf', { eager: true, as: 'url' });
const excels = import.meta.glob('../assets/1.Shareholder Information/1.Shareholder Information/**/*.{xls,xlsx,xlsm}', { eager: true, as: 'url' });

const allFiles = { ...pdfs, ...excels };

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

// Categorize files
const shareholderInfoFiles = Object.keys(allFiles)
    .filter(path => path.includes('/Shareholder Information/'))
    .map(path => ({
        name: path.split('/').pop().replace(/\.[^/.]+$/, "").replace(/_/g, " "),
        url: allFiles[path],
        originalName: path.split('/').pop(),
        type: path.toLowerCase().endsWith('.pdf') ? 'pdf' : 'excel'
    }))
    .sort((a, b) => b.originalName.localeCompare(a.originalName, undefined, { numeric: true, sensitivity: 'base' }));

const shareholdingPatternYears = [...new Set(Object.keys(allFiles)
    .filter(path => path.includes('/Shareholding Pattern/'))
    .map(path => {
        const parts = path.split('/');
        const yearIdx = parts.indexOf('Shareholding Pattern') + 1;
        return parts[yearIdx];
    }))].sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

const getFilesForYear = (year) => {
    return Object.keys(allFiles)
        .filter(path => {
            const isCorrectYear = path.includes(`/Shareholding Pattern/${year}/`);
            // Task B: Hide 30.06.2025 from 2024-25 view (it belongs in 2025-26)
            if (year === '2024-25' && path.includes('Shareholding Pattern-30.06.2025.pdf')) {
                return false;
            }
            return isCorrectYear;
        })
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

const ShareholderInformationPage = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [view, setView] = useState('root'); // root, shareholder-info, shareholding-pattern, shareholding-year
    const [selectedYear, setSelectedYear] = useState(null);
    const [popupData, setPopupData] = useState(null);
    const [navigationHistory, setNavigationHistory] = useState(['root']);

    useEffect(() => {
        const viewParam = searchParams.get('view');
        const isNodalOfficer = 
            location.pathname === '/shareholder-information/nodal-officer' || 
            location.pathname === '/nodal-officer' || 
            viewParam === 'shareholder-info/nodal-officer' ||
            searchParams.get('popup') === 'nodal-officer';
        
        const isInvestorGrievances = 
            location.pathname === '/shareholder-information/investor-grievances';

        if (isNodalOfficer) {
            setView('shareholder-info');
            setNavigationHistory(['root', 'shareholder-info']);
            const nodalOfficerFile = shareholderInfoFiles.find(
                file => file.name.toLowerCase() === 'nodal officer'
            );
            if (nodalOfficerFile) {
                setPopupData({ url: nodalOfficerFile.url, title: nodalOfficerFile.name });
            }
        } else if (isInvestorGrievances) {
            setView('shareholder-info');
            setNavigationHistory(['root', 'shareholder-info']);
            const grievancesFile = shareholderInfoFiles.find(
                file => file.name.toLowerCase().includes('grievance')
            );
            if (grievancesFile) {
                setPopupData({ url: grievancesFile.url, title: grievancesFile.name });
            }
        } else {
            const allowedViews = ['shareholder-info', 'shareholding-pattern'];
            if (viewParam && allowedViews.includes(viewParam)) {
                setView(viewParam);
                setNavigationHistory(['root', viewParam]);
            } else {
                setView('root');
                setNavigationHistory(['root']);
            }
        }
    }, [searchParams, location.pathname, shareholderInfoFiles]);

    const handleNavigate = (newView, year = null) => {
        setNavigationHistory([...navigationHistory, newView]);
        setView(newView);
        if (year) setSelectedYear(year);
    };

    const handleBack = () => {
        if (navigationHistory.length > 1) {
            const newHistory = [...navigationHistory];
            newHistory.pop();
            setNavigationHistory(newHistory);
            setView(newHistory[newHistory.length - 1]);
        }
    };

    const handleClosePopup = () => {
        setPopupData(null);
        const viewParam = searchParams.get('view');
        if (
            location.pathname === '/shareholder-information/nodal-officer' ||
            location.pathname === '/nodal-officer' ||
            viewParam === 'shareholder-info/nodal-officer' ||
            searchParams.get('popup') === 'nodal-officer' ||
            location.pathname === '/shareholder-information/investor-grievances'
        ) {
            navigate('/shareholder-information?view=shareholder-info', { replace: true });
        }
    };

    const renderContent = () => {
        switch (view) {
            case 'root':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto py-20">
                        <InvestorCard 
                            title="Shareholder Information" 
                            number="01" 
                            onClick={() => handleNavigate('shareholder-info')} 
                        />
                        <InvestorCard 
                            title="Shareholding Pattern" 
                            number="02" 
                            onClick={() => handleNavigate('shareholding-pattern')} 
                        />
                    </div>
                );
            case 'shareholder-info':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                        {shareholderInfoFiles.map((file, index) => (
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
            case 'shareholding-pattern':
                return (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-12">
                        {shareholdingPatternYears.map((year, index) => (
                            <InvestorCard 
                                key={index}
                                title={year}
                                number={(index + 1).toString().padStart(2, '0')}
                                onClick={() => handleNavigate('shareholding-year', year)}
                            />
                        ))}
                    </div>
                );
            case 'shareholding-year':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
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
            default:
                return null;
        }
    };

    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            {/* Essential Spacer for fixed Navbar */}
            <div className="h-20 md:h-28 w-full bg-white"></div>

            <div className="pt-16 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b0000]/[0.02] to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-24 relative z-10">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap items-center gap-1.5 text-lg mb-16 font-normal">
                        <Link to="/" className="text-[#2d6ca2] hover:text-[#800000] transition-colors px-1">Home</Link>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span className="text-[#2d6ca2] px-1 pointer-events-none">Investors</span>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span 
                            className={`${view === 'root' ? 'text-[#800000] font-medium' : 'text-[#2d6ca2] hover:text-[#800000] cursor-pointer'} transition-colors px-1`}
                            onClick={() => view !== 'root' && setView('root')}
                        >
                            Shareholders Information
                        </span>
                        {view !== 'root' && (
                            <>
                                <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                                <span 
                                    className={`${!selectedYear ? 'text-[#800000] font-medium' : 'text-[#2d6ca2] hover:text-[#800000] cursor-pointer'} transition-colors px-1`}
                                    onClick={() => selectedYear && setView(navigationHistory[1])}
                                >
                                    {view === 'shareholder-info' ? 'Shareholder Information' : 'Shareholding Pattern'}
                                </span>
                            </>
                        )}
                        {view === 'shareholding-year' && selectedYear && (
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
                        className="text-[48px] font-extrabold mb-8 leading-[0.9] uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {view === 'root' ? (
                            <>
                                <span className="block text-black">Shareholders</span>
                                <span className="block text-[#8b0000]">Information</span>
                            </>
                        ) : view === 'shareholder-info' ? (
                            <>
                                <span className="block text-black">Shareholder</span>
                                <span className="block text-[#8b0000]">Information</span>
                            </>
                        ) : view === 'shareholding-pattern' ? (
                            <>
                                <span className="block text-black">Shareholding</span>
                                <span className="block text-[#8b0000]">Pattern</span>
                            </>
                        ) : (
                            <>
                                <span className="block text-black">Pattern</span>
                                <span className="block text-[#8b0000]">{selectedYear}</span>
                            </>
                        )}
                    </motion.h1>

                    <div className="h-8 md:h-12 w-full"></div>
                </div>
            </div>

            <div className="py-24 md:py-32 bg-[#fafafa]/50">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        key={view}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {renderContent()}
                    </motion.div>
                </div>
            </div>

            {/* Bottom Spacer before Footer */}
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

export default ShareholderInformationPage;
