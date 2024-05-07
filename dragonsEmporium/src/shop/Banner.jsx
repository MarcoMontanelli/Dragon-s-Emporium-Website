
import React from 'react';

const Banner = ({text}) => {
    return (
        <>
            <div className="flex items-center justify-center">
            <div  tabindex="-1" class="fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2  rounded-lg shadow-lg shadow-purple-700/50 border max-w-7xl left-1/2 top-6 bg-gray-800 border-gray-600">
                <div class="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
                    <a href="https://flowbite.com/" class="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
                        <img src="../src/assets/LDE.png" class="h-6 me-2" alt="Dragon Logo"/>
                            <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Dragon's Emporium</span>
                    </a>
                    <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">{text}</p>
                </div>
                <div class="flex items-center flex-shrink-0">
                <button className="mr-4 shadow-xl shadow-indigo-700/50 relative inline-flex h-8 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" 
                       >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            
                            Products
                        </span>
                    </button>
                    
                    <button data-dismiss-target="#marketing-banner" type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close banner</span>
                    </button>
                </div>
            </div>
            </div>
            

        </>
    );
};

export default Banner;
