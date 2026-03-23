import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import InvestorCard from '../components/Investors/InvestorCard';
import PDFPopup from '../components/Investors/PDFPopup';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CorporateGovernancePage = () => {
    const [view, setView] = useState('root'); // root, category-details
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [popupData, setPopupData] = useState(null);

    // Dynamic asset loading using Vite's glob import
    // Note: Path includes "5. Corporate Governance" twice due to nested structure in assets
    const pdfs = import.meta.glob('../assets/5. Corporate Governance/5. Corporate Governance/**/*.pdf', { eager: true, as: 'url' });
    const excels = import.meta.glob('../assets/5. Corporate Governance/5. Corporate Governance/**/*.{xls,xlsx,xlsm}', { eager: true, as: 'url' });

    const allFiles = { ...pdfs, ...excels };

    // Extract unique categories (folders) from the paths
    const categories = [...new Set(Object.keys(allFiles)
        .map(path => {
            const parts = path.split('/');
            // Structure: .../5. Corporate Governance/5. Corporate Governance/[Category]/[File]
            const cgIdx = parts.lastIndexOf('5. Corporate Governance');
            return parts[cgIdx + 1];
        }))].sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

    const getFilesForCategory = (categoryName) => {
        return Object.keys(allFiles)
            .filter(path => path.includes(`/${categoryName}/`))
            .map(path => ({
                name: path.split('/').pop().replace(/\.[^/.]+$/, "").replace(/_/g, " "),
                url: allFiles[path],
                originalName: path.split('/').pop(),
                type: path.toLowerCase().endsWith('.pdf') ? 'pdf' : 'excel'
            }))
            .sort((a, b) => b.originalName.localeCompare(a.originalName, undefined, { numeric: true, sensitivity: 'base' }));
    };

    const formatCategoryName = (name) => {
        // Remove leading numbers (e.g., "1. Policies" -> "Policies")
        return name.replace(/^\d+\.\s*/, "").replace(/_/g, " ");
    };

    const handleNavigate = (categoryName) => {
        setSelectedCategory(categoryName);
        setView('category-details');
    };

    const renderContent = () => {
        if (view === 'root') {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                    {categories.map((cat, index) => (
                        <InvestorCard 
                            key={index}
                            title={formatCategoryName(cat)}
                            number={(index + 1).toString().padStart(2, '0')}
                            onClick={() => handleNavigate(cat)}
                        />
                    ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                {getFilesForCategory(selectedCategory).map((file, index) => (
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

            <div className="h-20 md:h-28 w-full bg-white"></div>

            <div className="pt-16 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b0000]/[0.02] to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-24 relative z-10">
                    <div className="flex flex-wrap items-center gap-1.5 text-lg mb-16 font-normal">
                        <Link to="/" className="text-[#2d6ca2] hover:text-[#800000] transition-colors px-1">Home</Link>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span className="text-[#2d6ca2] px-1 pointer-events-none">Investors</span>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span 
                            className={`${view === 'root' ? 'text-[#800000] font-medium' : 'text-[#2d6ca2] hover:text-[#800000] cursor-pointer'} transition-colors px-1`}
                            onClick={() => setView('root')}
                        >
                            Corporate Governance
                        </span>
                        {view === 'category-details' && selectedCategory && (
                            <>
                                <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                                <span className="text-[#800000] font-medium px-1 uppercase tracking-wider">
                                    {formatCategoryName(selectedCategory)}
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
                                <span className="block text-black">Corporate</span>
                                <span className="block text-[#8b0000]">Governance</span>
                            </>
                        ) : (
                            <>
                                <span className="block text-black">Governance</span>
                                <span className="block text-[#8b0000]">{formatCategoryName(selectedCategory)}</span>
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
                        onClose={() => setPopupData(null)} 
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default CorporateGovernancePage;
