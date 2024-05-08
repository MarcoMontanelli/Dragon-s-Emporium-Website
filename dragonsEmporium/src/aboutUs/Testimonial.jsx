import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  { id: 1, quote: "Great service!", name: "John Doe", date: "2021-05-30", stars: 5, avatar: "https://via.placeholder.com/150" },
  { id: 2, quote: "Very satisfied.", name: "Jane Doe", date: "2021-06-15", stars: 4, avatar: "https://via.placeholder.com/150" },
  { id: 3, quote: "Outstanding quality.", name: "Alice Johnson", date: "2021-07-20", stars: 5, avatar: "https://via.placeholder.com/150" },
  { id: 4, quote: "Very impressed!", name: "Bob Smith", date: "2021-08-01", stars: 5, avatar: "https://via.placeholder.com/150" },
  { id: 5, quote: "Could be better.", name: "Eve Black", date: "2021-08-15", stars: 3, avatar: "https://via.placeholder.com/150" },
  { id: 6, quote: "I love it!", name: "Gary White", date: "2021-09-10", stars: 5, avatar: "https://via.placeholder.com/150" }
];

const TestimonialSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonialsPerPage = windowWidth < 640 ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextSlide = () => {
    if (currentIndex + testimonialsPerPage >= testimonials.length) return;
    setCurrentIndex(currentIndex + testimonialsPerPage);
  };

  const prevSlide = () => {
    if (currentIndex - testimonialsPerPage < 0) return;
    setCurrentIndex(currentIndex - testimonialsPerPage);
  };

  return (
    <div className=" mb-8 text-white p-4 md:px-12 relative">
        <div class=" text-center px-4">
        <h2
          class="text-3xl font-extrabold sm:text-4xl text-white">
          What Our Clients Say</h2>
        <p class="text-xl mt-1 text-gray-400">Real feedback from our valued customers</p>
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white z-10" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
      </button>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          className="flex overflow-hidden justify-center   items-center"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {testimonials.slice(currentIndex, currentIndex + testimonialsPerPage).map((testimonial) => (
            <div key={testimonial.id} className="w-full sm:w-1/3 p-4 flex-auto">
              <div className="bg-gray-900 text-white rounded-lg shadow-lg p-4 h-full shadow-purple-700/50 border border-gray-700">
                <img src={testimonial.avatar} alt="Avatar" className="w-14 h-14 rounded-full mx-auto" />
                <div className="text-center mt-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FontAwesomeIcon icon={faStar} key={i} className="text-gray-400" />
                  ))}
                </div>
                <p className="text-center mt-2 text-sm">{testimonial.quote}</p>
                <hr className="my-2 border-gray-700" />
                <p className="text-center text-xs">{testimonial.name} - {testimonial.date}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white z-10" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </button>
      <div className="absolute bottom-0 w-full flex justify-center p-4 sm:hidden">
        {Array.from({ length: totalSlides }, (_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 mx-2 rounded-full ${currentIndex === idx * testimonialsPerPage ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(idx * testimonialsPerPage)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSwiper;
