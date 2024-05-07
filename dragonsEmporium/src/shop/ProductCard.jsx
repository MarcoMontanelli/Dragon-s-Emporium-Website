import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faInfoCircle, faStar, faChevronLeft, faChevronRight, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const ProductCard = ({ product }) => {
    const { images, category, date, title, description, rating, sold, remaining, price, discount } = product;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Button hover effect
    const buttonVariants = {
        hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
        tap: { scale: 0.9 }
    };

    // Card hover effect
    const cardVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.2 } }
    };

    // Carousel image transition effects
    const imageVariants = {
        enter: { opacity: 0, x: 50, scale: 0.8 },
        center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: -50, scale: 0.8 }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const hoverScale = {
        hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } }
    };

    const hoverEffect = {
        hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } }
    };

    return (
        <motion.div
            className="bg-gray-900 text-white p-6 rounded-xl shadow-lg max-w-none w-full shadow-purple-700/50 border border-gray-700"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
        >
            <div className="relative aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt={`${title} ${currentImageIndex + 1}`}
                        className="object-cover w-full h-full"
                        variants={imageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    />
                </AnimatePresence>
                <motion.button
                    onClick={prevImage}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:bg-black hover:opacity-70"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </motion.button>
                <motion.button
                    onClick={nextImage}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </motion.button>
            </div>
            <div className="flex justify-between items-center my-3">
                
                <motion.span
                    className="bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 border border-blue-500 text-xs font-semibold mr-2 px-3 py-1 rounded-full"
                    variants={{ ...fadeInUp, ...hoverScale }}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                >
                    {category}
                </motion.span>
                <span className="text-gray-400 text-xs">{date}</span>
            </div>
            <hr className="my-2 border-gray-700" />
            <h5 className="text-xl font-bold">{title}</h5>
            <p className="text-sm text-gray-400 mb-3">{description}</p>
            {discount && <p className="text-sm text-red-500">Save {discount}%</p>}
            <p className="text-lg font-semibold">${price}</p>
            
            <div className="flex items-center mb-3">
            
                {[...Array(5)].map((_, i) => (
                    <motion.span
                        key={i}
                        variants={{ ...fadeInUp, ...hoverScale }}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                    >
                        <FontAwesomeIcon
                            icon={faStar}
                            className={`${i < rating ? 'text-gray-400' : 'text-gray-800'} mr-1`}
                        />
                    </motion.span>
                ))}
            </div>
            <hr className="my-2 border-gray-700" />
            <div className="flex justify-between items-center">
                <div className="text-xs">
                    <span>Sold: {sold}</span> | <span>Remaining: {remaining}</span>
                </div>
                <div>
                    <motion.button className="mr-4 shadow-xl shadow-indigo-700/50 relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Add
                        </span>
                    </motion.button>
                    <motion.button
                        className="text-white bg-gray-600 hover:bg-gray-700 font-bold py-2 px-4  rounded-lg"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> Details
                    </motion.button>
                </div>

            </div>
            <div className="flex justify-between items-center my-2">
                <motion.i onClick={() => setIsFavorite(!isFavorite)}
                    className={`cursor-pointer ${isFavorite ? 'text-red-500' : 'text-gray-300'}`}
                    variants={buttonVariants} whileHover="hover">
                    <FontAwesomeIcon icon={faHeart} />
                </motion.i>
                
                <motion.i className="cursor-pointer"
                    variants={buttonVariants} whileHover="hover">
                    <FontAwesomeIcon icon={faShareAlt} />
                </motion.i>
            </div>
        </motion.div>
    );
};

export default ProductCard;
