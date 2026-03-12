import React, { useState, useEffect, useRef, forwardRef } from 'react';
import HTMLPageFlip from 'react-pageflip';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { ChevronLeft, ChevronRight, X, Loader2, Download } from 'lucide-react';

// Set worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const Page = forwardRef((props, ref) => {
    return (
        <div className="bg-[#fdfdfd] overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.05)] border-l border-black/5" ref={ref} data-density="soft">
            <div className="w-full h-full flex items-center justify-center p-2 relative">
                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-r from-black/20 to-transparent"></div>
                {props.children}
            </div>
        </div>
    );
});

const BookViewer = ({ pdfUrl, onClose }) => {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [renderProgress, setRenderProgress] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const book = useRef();

    useEffect(() => {
        const loadPdf = async () => {
            try {
                console.log('Loading PDF with optimized rendering:', pdfUrl);
                setLoading(true);
                setRenderProgress(0);

                const loadingTask = pdfjsLib.getDocument(pdfUrl);
                const pdf = await loadingTask.promise;
                const totalPages = pdf.numPages;
                const pagesArray = new Array(totalPages);

                // Parallel batch rendering for better performance
                const BATCH_SIZE = 4; // Process 4 pages at once
                const renderPage = async (pageNum) => {
                    const page = await pdf.getPage(pageNum);
                    const viewport = page.getViewport({ scale: 1.5 }); // Reduced from 2.0 for faster rendering
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d', { alpha: false }); // Disable alpha for better performance

                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    await page.render({
                        canvasContext: context,
                        viewport,
                        intent: 'display'
                    }).promise;

                    return canvas.toDataURL('image/jpeg', 0.65); // Reduced quality from 0.8 to 0.65 for faster conversion
                };

                // Process pages in batches
                for (let i = 0; i < totalPages; i += BATCH_SIZE) {
                    const batch = [];
                    for (let j = i; j < Math.min(i + BATCH_SIZE, totalPages); j++) {
                        batch.push(renderPage(j + 1).then(dataUrl => {
                            pagesArray[j] = dataUrl;
                        }));
                    }
                    await Promise.all(batch);
                    setRenderProgress(Math.round(((i + BATCH_SIZE) / totalPages) * 100));
                }

                // Set all pages at once after loading completes
                setPages(pagesArray);
                setLoading(false);
            } catch (error) {
                console.error('Stable PDF loading failed:', error);
                setLoading(false);
            }
        };

        if (pdfUrl) {
            loadPdf();
        }
    }, [pdfUrl]);

    const onNext = () => {
        if (book.current) {
            book.current.pageFlip().flipNext();
        }
    };

    const onPrev = () => {
        if (book.current) {
            book.current.pageFlip().flipPrev();
        }
    };

    const onFlip = (e) => {
        setCurrentPage(e.data);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'NRAIL_Legacy_Book.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') onNext();
            else if (event.key === 'ArrowLeft') onPrev();
            else if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-[#050505]/98 z-[99999] flex flex-col items-center justify-between py-8 px-10 text-white backdrop-blur-3xl overflow-hidden animate-in fade-in duration-500">
            {/* Header */}
            <div className="w-full flex justify-between items-center z-[10001] mb-6">
                <div className="flex flex-col">
                    <span className="text-2xl font-black tracking-[0.2em] text-[#b01e1e]">NRAIL LEGACY</span>
                    <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase">View Book</span>
                </div>

                <div
                    className="bg-white/5 rounded-full border border-white/10 backdrop-blur-md text-sm tracking-[0.2em] font-light"
                    style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}
                >
                    PAGE <span className="font-bold text-[#b01e1e]">{currentPage + 1}</span> / {pages.length}
                </div>

                <div className="flex items-center gap-8">
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-4 bg-[#b01e1e] hover:bg-[#d42424] rounded-lg transition-all duration-300 active:scale-95 shadow-xl group"
                        style={{ paddingLeft: '1.3rem', paddingRight: '1.3rem', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Download PDF</span>
                        <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                    </button>

                    <button
                        className="p-3 hover:bg-white/10 rounded-full transition-all duration-300"
                        onClick={onClose}
                    >
                        <X size={36} />
                    </button>
                </div>
            </div>

            {loading && pages.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-12">
                    <div className="relative w-32 h-32">
                        <Loader2 className="animate-spin text-[#b01e1e]" size={128} />
                        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                            {renderProgress}%
                        </div>
                    </div>
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl tracking-[0.5em] font-light uppercase">Restoring Legacy</h2>
                        <p className="text-xs text-white/30 tracking-[0.8em] uppercase">Opening Coffee Table Book...</p>
                    </div>
                </div>
            ) : (
                <div className="flex-1 w-full flex items-center justify-center relative gap-12 lg:gap-24 overflow-hidden">
                    <button
                        className="hidden xl:flex bg-white/5 hover:bg-white/15 border border-white/5 text-white w-24 h-24 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-0 z-[10000]"
                        onClick={onPrev}
                        disabled={currentPage === 0}
                    >
                        <ChevronLeft size={60} />
                    </button>

                    <HTMLPageFlip
                        width={550}
                        height={733}
                        size="stretch"
                        minWidth={315}
                        maxWidth={1200}
                        minHeight={400}
                        maxHeight={1600}
                        maxShadowOpacity={0.6}
                        showCover={true}
                        mobileScrollSupport={true}
                        onFlip={onFlip}
                        className="shadow-2xl"
                        ref={book}
                    >
                        {pages.map((image, index) => (
                            <Page key={index}>
                                <img
                                    src={image}
                                    alt={`Page ${index + 1}`}
                                    className="w-full h-full object-contain select-none"
                                    draggable="false"
                                />
                            </Page>
                        ))}
                    </HTMLPageFlip>

                    <button
                        className="hidden xl:flex bg-white/5 hover:bg-white/15 border border-white/5 text-white w-24 h-24 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-0 z-[10000]"
                        onClick={onNext}
                        disabled={currentPage >= pages.length - 1}
                    >
                        <ChevronRight size={60} />
                    </button>
                </div>
            )}

            <div className="pb-4 opacity-20 text-[10px] tracking-[0.4em] uppercase font-light">
                Use arrows or click to turn pages
            </div>
        </div>
    );
};

export default BookViewer;
