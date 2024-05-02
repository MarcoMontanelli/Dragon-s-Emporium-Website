import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    { src: '../src/assets/img1.JPG', title: 'Title 1', description: 'Description of image 1' },
    { src: '../src/assets/img2.JPG', title: 'Title 2', description: 'Description of image 2' },
    { src: '../src/assets/img4.JPG', title: 'Title 3', description: 'Description of image 3' },
    { src: '../src/assets/img1.JPG', title: 'Title 1', description: 'Description of image 1' },
    { src: '../src/assets/img2.JPG', title: 'Title 2', description: 'Description of image 2' },
    { src: '../src/assets/img4.JPG', title: 'Title 3', description: 'Description of image 3' },
    // Add more images as needed
];

const ImageGallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const openFullscreen = (image) => {
        setSelectedImg(image);
    };

    const closeFullscreen = () => {
        setSelectedImg(null);
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <motion.div 
                            key={index}
                            className="w-full overflow-hidden relative cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={image.src} alt={image.title} className="w-full h-auto transition-transform duration-300 ease-in-out rounded-lg" />
                            <motion.div 
                                className="absolute inset-0 bg-black bg-opacity-50 opacity-0"
                                whileHover={{ opacity: 1 }}
                            >
                                <div className="absolute bottom-0 left-0 w-full p-8">
                                    <p className="text-white text-xl font-bold">{image.title}</p>
                                    <p className="text-white text-lg">{image.description}</p>
                                </div>
                            </motion.div>
                            <button
                                onClick={() => openFullscreen(image)}
                                className="absolute bottom-2 right-2 opacity-50 hover:opacity-95 text-white bg-purple-500 hover:bg-purple-700 p-2 rounded-full"
                                aria-label="View image in fullscreen"
                            >
                                <svg class="w-6 h-6 fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">


                                    <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"></path>

                                </svg>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImg && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0  bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                        onClick={closeFullscreen}
                    >
                        <motion.div className="relative max-w-full max-h-full">
                            <motion.img 
                                src={selectedImg.src}
                                alt={selectedImg.title}
                                initial={{ y: "-100vh" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100vh" }}
                                className="rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                                <p className="text-xl font-bold">{selectedImg.title}</p>
                                <p className="text-lg">{selectedImg.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ImageGallery;
