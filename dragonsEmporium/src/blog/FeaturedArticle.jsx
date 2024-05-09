import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Preload images component
const PreloadedImage = ({ src, alt }) => {
    const [loadedSrc, setLoadedSrc] = useState(null);
    useEffect(() => {
        const img = new Image();
        img.onload = () => setLoadedSrc(src);
        img.src = src;
    }, [src]);

    if (loadedSrc === src) {
        return (
            <motion.img
                src={loadedSrc}
                alt={alt}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{
                    x: { type: "spring", stiffness: 200, damping: 30 },
                    opacity: { duration: 0.2 }
                }}
                className=" w-full h-full object-cover rounded-lg shadow-xl shadow-indigo-700/50"
            />
        );
    }
    return null; // or a placeholder if you have one
};

const FeaturedArticle = ({ category, date, title, description, content, images }) => {
    const [current, setCurrent] = useState(0);

    // Auto-scroll feature
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current => (current + 1) % images.length);
        }, 3000); // Auto-scroll every 3 seconds
        return () => clearInterval(interval);
    }, [current, images.length]);

    const nextImage = () => {
        setCurrent(current => (current + 1) % images.length);
    };

    const prevImage = () => {
        setCurrent(current => (current - 1 + images.length) % images.length);
    };

    return (
        <>
            <section className="pt-2  p-4 md:px-16  bg-black  hover:bg-black hover:bg-opacity-35   md:m-4 m-2 ">
                <h1 className="mb-4 mt-2 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Today's featured article</h1>
                <p className="mb-4 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Check out what we have in store for you today.</p>
                <div className="md:gap-16 items-center mx-auto max-w-screen-3xl lg:grid lg:grid-cols-2 lg:py-1">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <span className="inline-block px-2 py-1 bg-purple-600 text-white rounded-full text-sm font-medium tracking-wide shadow-xl shadow-indigo-700/50">{category}</span>
                        <span className="text-gray-400 text-xs float-right">{date}</span>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
                        <p className="mb-4">{content}</p>
                        <hr className="border-gray-500 mb-2"></hr>
                        <p className="mb-2">{description}.</p>




                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 md:w-6 md:h-6 mr-1" stroke="white" stroke-width="2" fill="white" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 448 512">
                                <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"></path>
                            </svg>
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 md:w-6 md:h-6 mr-1" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>


                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 md:w-6 md:h-6 ml-1 mr-1" stroke="white" stroke-width="2" fill="white" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 512 512">
                                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
                            </svg>7
                        </span>
                        <button className="shadow-xl shadow-indigo-700/50 relative inline-flex h-8 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-6 float-right">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                Read
                            </span>
                        </button>
                    </div>
                    {/* Carousel for images */}
                    <div className="relative flex flex-col space-y-4 items-center justify-center mt-4 md:mt-0">
                        <div className="w-full">
                            <AnimatePresence initial={false} mode='wait'>
                                <PreloadedImage
                                    key={current}
                                    src={images[current]}
                                    alt={`Featured content ${current + 1}`}
                                />
                            </AnimatePresence>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-between">
                            <button onClick={prevImage} className="bg-gray-900 bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full">
                                &#10094; {/* Left arrow */}
                            </button>
                            <button onClick={nextImage} className="bg-gray-900 bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full">
                                &#10095; {/* Right arrow */}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedArticle;



