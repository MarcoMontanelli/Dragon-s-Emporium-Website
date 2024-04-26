import React, { useState, useEffect, useRef } from 'react';
import SwiperSlide from './SwiperSlide';
import '../css/cardSwiper.css';
function SwiperComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchMove, setTouchMove] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const swiperRef = useRef(null);

    const slides = [
        { title: "Slide 1", description: "Description here.", imageUrl: "https://via.placeholder.com/300" },
        { title: "Slide 2", description: "Description here.", imageUrl: "https://via.placeholder.com/300" },
        { title: "Slide 3", description: "Description here.", imageUrl: "https://via.placeholder.com/300" },
        { title: "Slide 4", description: "Description here.", imageUrl: "https://via.placeholder.com/300" },
        { title: "Slide 5", description: "Description here.", imageUrl: "https://via.placeholder.com/300" },
        { title: "Slide 6", description: "Description here.", imageUrl: "https://via.placeholder.com/300" },
    ];

    const slidesPerPage = windowWidth < 640 ? 1 : 3;
    const numPages = Math.ceil(slides.length / slidesPerPage);

    useEffect(() => {
        const resizeListener = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', resizeListener);
        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchMove(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchMove) return;
        const threshold = 50;
        const direction = touchStart - touchMove > threshold ? 'left' :
                         touchStart - touchMove < -threshold ? 'right' : null;

        if (direction === 'left' && currentIndex < numPages - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (direction === 'right' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }

        setTouchStart(null);
        setTouchMove(null);
    };

    return (
        <>
         <h1 className="mb-2 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white text-center">
         We also take commissions, have a look!
            </h1>
        <div className="swiper-container" ref={swiperRef}
             onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div className="swiper-wrapper flex transition-transform duration-300 ease-out"
                 style={{ transform: `translateX(-${currentIndex * 100}%`, padding: `0 1rem` }}>
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} slide={slide} width={100 / slidesPerPage - (windowWidth < 640 ? 20 : 0) / slidesPerPage} />
                ))}
            </div>
            <div className="flex justify-center p-4">
                {Array.from({ length: numPages }, (_, idx) => (
                    <button key={idx}
                            className={`h-2 w-2 mx-1 rounded-full ${currentIndex === idx ? 'bg-blue-500' : 'bg-gray-300'}`}
                            onClick={() => setCurrentIndex(idx)}>
                    </button>
                ))}
            </div>
        </div>
        </>
    );
}

export default SwiperComponent;
