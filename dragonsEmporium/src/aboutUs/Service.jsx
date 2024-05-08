import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const ServiceCards = ({ image, title, description }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      whileHover={{ scale: 1.1 }}
      className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <img src={image} alt={title} className="w-40 h-40 mb-4 rounded-full object-cover" />
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p>{description}</p>
        <FontAwesomeIcon icon={faCircleInfo} className="mt-4 text-xl" />
      </div>
    </motion.div>
  );
};

export default ServiceCards;
