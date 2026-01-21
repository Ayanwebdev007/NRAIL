import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.jpg';

const Loader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 1.5
                }}
            >
                <img
                    src={logo}
                    alt="Logo"
                    className="w-32 h-32 lg:w-48 lg:h-48 object-contain"
                />
            </motion.div>
        </motion.div>
    );
};

export default Loader;
