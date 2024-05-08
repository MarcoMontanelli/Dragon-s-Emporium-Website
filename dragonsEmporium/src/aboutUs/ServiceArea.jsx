import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ title, description, image, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative shadow-lg transition hover:z-20 hover:shadow-2xl hover:shadow-gray-600/50 p-8 rounded-3xl"
    >
      <div className="space-y-8">
        <div className="w-full h-56 overflow-hidden rounded z-10">
          <img className="absolute top-0 left-0 w-full h-full object-cover " src={image} alt={title} />
        </div>
        <div className="space-y-2 z-20">
          <h5 className="text-2xl font-bold text-white transition group-hover:text-secondary text-center">{title}</h5>
          <p className="text-gray-300">{description}</p>
          {icon && <FontAwesomeIcon icon={icon} className="text-2xl text-white mx-auto" />}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
