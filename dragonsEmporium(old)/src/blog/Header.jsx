import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchAndActions from './SearchAndActions';

// Sample images for the carousel
const images = [
  '../src/assets/img1.JPG',
  '../src/assets/img2.JPG',
  '../src/assets/img4.JPG', // Add the paths to your images
];

const carouselVariants = {
    enter: {
        x: 1000,
        opacity: 0
      },
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1
      },
      exit: {
        zIndex: 0,
        x: -1000,
        opacity: 0
      },
    };
    const Header = () => {
        const [[page, direction], setPage] = useState([0, 0]);
      
        // Handle cycling through images
        useEffect(() => {
          const cycleImages = () => {
            setPage((prevState) => [(prevState[0] + 1) % images.length, 1]);
          };
          const timer = setInterval(cycleImages, 3000); // Change image every 3 seconds
          return () => clearInterval(timer);
        }, []);
      
        // Maintain a 16:5 aspect ratio for the header
        const headerHeight = (2 / 16) * 100; // This will give us the percentage based on the width of the viewport
      
        return (
          <div className="relative text-white p-5 overflow-hidden bg-slate-950" style={{ height: `calc(${headerHeight}vw)` }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={images[page]}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 w-full p-3 rounded-lg  h-full object-cover"
              />
              <div className="absolute inset-0 bg-black  opacity-55 z-10"></div>
            </AnimatePresence>
      
            {/* Overlay content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center">
            <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">The Dragon's Emporium Blog</h1>
            <p class="mb-6 text-center text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 ">Read the latest news and updates and follow our free guides to bring your projects to the next level.</p>
             
              <SearchAndActions />
            </div>
          </div>
  );
}

export default Header;