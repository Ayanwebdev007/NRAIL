import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import InvestorCard from '../components/Investors/InvestorCard';
import PDFPopup from '../components/Investors/PDFPopup';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';

const PoliciesPage = () => {
    const [searchParams] = useSearchParams();
    const [view, setView] = useState('root'); // root, sub-category, files
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [popupData, setPopupData] = useState(null);

    // Dynamic asset loading using Vite's glob import
    const pdfs = import.meta.glob('../assets/10. Policies at NRAIL/10. Policies at NRAIL/**/*.pdf', { eager: true, as: 'url' });
    const excels = import.meta.glob('../assets/10. Policies at NRAIL/10. Policies at NRAIL/**/*.{xls,xlsx,xlsm,csv}', { eager: true, as: 'url' });

    const allFilesMap = { ...pdfs, ...excels };

    // Structure: .../10. Policies at NRAIL/10. Policies at NRAIL/[Category]/[SubCategory?]/[File]
    const categories = [...new Set(Object.keys(allFilesMap).map(path => {
        const parts = path.split('/');
        const idx = parts.lastIndexOf('10. Policies at NRAIL');
        return parts[idx + 1];
    }))].sort();

    useEffect(() => {
        const catParam = searchParams.get('category');
        if (catParam && categories.includes(catParam)) {
            handleNavigateCategory(catParam);
        }
    }, [searchParams, categories.length]);

    const getSubCategories = (category) => {
        if (category !== 'Other Policies') return [];
        return [...new Set(Object.keys(allFilesMap)
            .filter(path => path.includes(`/${category}/`))
            .map(path => {
                const parts = path.split('/');
                const catIdx = parts.lastIndexOf(category);
                const subPart = parts[catIdx + 1];
                // If it's a file (ends in extension), it's not a subcategory
                if (subPart.includes('.')) return null;
                return subPart;
            })
            .filter(Boolean))].sort();
    };

    const getFiles = (category, subCategory = null) => {
        return Object.keys(allFilesMap)
            .filter(path => {
                const inCategory = path.includes(`/${category}/`);
                if (subCategory) {
                    return inCategory && path.includes(`/${subCategory}/`);
                }
                // If no subcategory requested, ensure the file is directly in the category
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

                return {
                    name: fileName.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
                    url: allFilesMap[path],
                    originalName: fileName,
                    type: type
                };
            })
            .sort((a, b) => b.originalName.localeCompare(a.originalName, undefined, { numeric: true }));
    };

    const handleNavigateCategory = (category) => {
        setSelectedCategory(category);
        const subs = getSubCategories(category);
        if (subs.length > 0) {
            setView('sub-category');
        } else {
            setView('files');
        }
    };

    const handleNavigateSubCategory = (sub) => {
        setSelectedSubCategory(sub);
        setView('files');
    };

    const goBackToRoot = () => {
        setView('root');
        setSelectedCategory(null);
        setSelectedSubCategory(null);
    };

    const goBackToSub = () => {
        if (selectedCategory === 'Other Policies') {
            setView('sub-category');
            setSelectedSubCategory(null);
        } else {
            goBackToRoot();
        }
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

        if (view === 'sub-category') {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                    {getSubCategories(selectedCategory).map((sub, index) => (
                        <InvestorCard 
                            key={index}
                            title={sub}
                            number={(index + 1).toString().padStart(2, '0')}
                            onClick={() => handleNavigateSubCategory(sub)}
                        />
                    ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                {getFiles(selectedCategory, selectedSubCategory).map((file, index) => (
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
                            onClick={goBackToRoot}
                        >
                            Policies
                        </span>
                        {selectedCategory && (
                            <>
                                <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                                <span 
                                    className={`${!selectedSubCategory && view === 'files' ? 'text-[#800000] font-medium' : 'text-[#2d6ca2] hover:text-[#800000] cursor-pointer'} transition-colors px-1`}
                                    onClick={goBackToSub}
                                >
                                    {selectedCategory}
                                </span>
                            </>
                        )}
                        {selectedSubCategory && (
                            <>
                                <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                                <span className="text-[#800000] font-medium px-1 uppercase tracking-wider">
                                    {selectedSubCategory}
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
                                <span className="block text-black">Policies at</span>
                                <span className="block text-[#8b0000]">NRAIL</span>
                            </>
                        ) : view === 'sub-category' ? (
                            <>
                                <span className="block text-black">{selectedCategory}</span>
                                <span className="block text-[#8b0000]">Categories</span>
                            </>
                        ) : (
                            <>
                                <span className="block text-black uppercase tracking-tight">
                                    {(selectedSubCategory || selectedCategory || '').replace(/\s*documents\s*$/i, '').replace(/\s*policies\s*$/i, '').replace(/\s*policy\s*$/i, '')}
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
                        key={view + (selectedCategory || '') + (selectedSubCategory || '')}
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

export default PoliciesPage;
