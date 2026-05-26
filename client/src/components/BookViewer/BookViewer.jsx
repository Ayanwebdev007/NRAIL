import React, { useState, useEffect, useRef, forwardRef } from 'react';
import HTMLPageFlip from 'react-pageflip';
import { ChevronLeft, ChevronRight, X, Download } from 'lucide-react';

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
    const [currentPage, setCurrentPage] = useState(0);
    const book = useRef();

    // 24 pre-rendered pages stored in the public directory
    const pages = Array.from({ length: 24 }, (_, i) => `/coffe-table-book/page-${i + 1}.webp?v=3`);

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

            <div className="pb-4 opacity-20 text-[10px] tracking-[0.4em] uppercase font-light">
                Use arrows or click to turn pages
            </div>
        </div>
    );
};

export default BookViewer;
