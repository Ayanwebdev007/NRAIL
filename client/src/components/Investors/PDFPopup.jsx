import React, { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { X, Loader2, Download, ChevronLeft, ChevronRight } from 'lucide-react';

// Set worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const PDFPopup = ({ pdfUrl, title, onClose }) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const isPdf = pdfUrl?.toLowerCase().endsWith('.pdf');

  useEffect(() => {
    const loadPdf = async () => {
      if (!isPdf) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        setTotalPages(pdf.numPages);
        setLoading(false);
      } catch (error) {
        console.error('PDF loading failed:', error);
        setLoading(false);
      }
    };

    if (pdfUrl) loadPdf();
  }, [pdfUrl, isPdf]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    const fileName = pdfUrl.split('/').pop() || (isPdf ? 'document.pdf' : 'document.xlsx');
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-[99999] flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Header */}
      <div 
        className="w-full max-w-5xl flex justify-between items-center mb-6 text-white bg-white/10 px-16 md:px-20 py-6 rounded-xl border border-white/10 shadow-2xl"
        style={{ paddingLeft: '60px', paddingRight: '60px' }}
      >
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-sm md:text-xl font-bold tracking-wider uppercase text-[#b01e1e] truncate max-w-[200px] md:max-w-md">
            {title}
          </span>
          <span className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
            {isPdf ? 'PDF Document' : 'Spreadsheet File'}
          </span>
        </div>

        <div className="flex items-center gap-6">
          {isPdf && (
            <button
              onClick={handleDownload}
              className="flex items-center gap-3 bg-[#b01e1e] hover:bg-[#d42424] px-7 py-3 rounded-lg transition-all duration-300 text-xs md:text-sm font-bold uppercase tracking-[0.15em] shadow-lg hover:shadow-[#b01e1e]/20"
            >
              <Download size={18} />
              <span className="hidden sm:inline">Download</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="p-3 hover:bg-white/10 rounded-full transition-all duration-300"
          >
            <X size={28} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 w-full max-w-5xl bg-white rounded-xl overflow-auto relative shadow-2xl flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="animate-spin text-[#b01e1e]" size={48} />
            <p className="text-black/40 text-xs uppercase tracking-[0.2em]">Loading Document...</p>
          </div>
        ) : isPdf ? (
          <div className="w-full h-full flex flex-col items-center overflow-auto p-4 md:p-8">
             <iframe 
                src={pdfUrl} 
                className="w-full h-full min-h-[70vh] border-none rounded-lg"
                title={title}
             ></iframe>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 text-center max-w-md">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <Download className="text-green-600" size={40} />
            </div>
            <h3 className="text-2xl font-black text-[#1a1a1a] uppercase mb-4">
              Spreadsheet Ready
            </h3>
            <p className="text-black/60 mb-8 leading-relaxed">
              This document is a spreadsheet and cannot be viewed directly. Please download it to view the content on your device.
            </p>
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg hover:shadow-green-900/20"
            >
              <Download size={20} />
              Download Spreadsheet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFPopup;
