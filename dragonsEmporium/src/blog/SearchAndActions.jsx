import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SearchAndActions = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the dropdown and stop event propagation to avoid immediate close
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    // Close the dropdown by clicking anywhere on the page
    React.useEffect(() => {
        const closeDropdown = () => setIsOpen(false);
        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    return (
        <div className="w-full md:max-w-4xl px-4 py-2 bg-gray-800 text-gray-50 rounded-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-1 items-center space-x-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 p-2 bg-gray-700 rounded-md text-white placeholder-gray-300"
                />
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] shadow-xl shadow-indigo-700/50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8 a7 7 0 0 1 14 0Z" />
                        </svg>
                    </span>
                </motion.div>
            </div>
            
            
        </div>
    );
};

export default SearchAndActions;
