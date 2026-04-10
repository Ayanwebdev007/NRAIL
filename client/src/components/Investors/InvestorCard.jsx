import { ChevronRight, FileText, FileSpreadsheet, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const InvestorCard = ({ title, number, type, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
      className="bg-[#f9f9f9] p-8 md:p-12 rounded-xl relative overflow-hidden cursor-pointer group flex flex-col justify-center min-h-[150px] md:min-h-[180px] border border-black/5"
      onClick={onClick}
    >
      {/* Background Number */}
      <span className="absolute -top-4 -left-2 text-[100px] md:text-[140px] font-bold text-black/[0.03] select-none leading-none group-hover:text-red-600/[0.08] transition-colors duration-500">
        {number}
      </span>

      {/* Document Type Icon */}
      {type && (
        <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-40 group-hover:opacity-100 transition-opacity">
          {type === 'pdf' ? (
            <FileText size={24} className="text-[#b01e1e]" />
          ) : type === 'video' ? (
            <Video size={24} className="text-[#2d6ca2]" />
          ) : (
            <FileSpreadsheet size={24} className="text-green-600" />
          )}
        </div>
      )}

      {/* Title */}
      <h3 
        className="relative z-10 text-left text-sm md:text-base font-bold tracking-[0.2em] text-[#1a1a1a] uppercase leading-relaxed pl-10"
        style={{ paddingLeft: '40px' }}
      >
        {title}
      </h3>

      {/* Arrow Button */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-black/5 group-hover:bg-[#b01e1e] group-hover:border-[#b01e1e] transition-colors duration-300">
        <ChevronRight size={20} className="text-[#b01e1e] group-hover:text-white transition-colors duration-300" />
      </div>
    </motion.div>
  );
};

export default InvestorCard;
