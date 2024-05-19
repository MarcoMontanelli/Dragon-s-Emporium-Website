import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCode, faMusic, faCamera, faPenNib, faVideo } from '@fortawesome/free-solid-svg-icons';
import OurStory from './Header';

const commissionTypes = [
  { title: 'Art Commissions', description: 'Custom digital or traditional art.', icon: faPaintBrush, image: 'https://source.unsplash.com/800x450/?art' },
  { title: 'Coding Commissions', description: 'Web development and software solutions.', icon: faCode, image: 'https://source.unsplash.com/800x450/?coding' },
  { title: 'Music Commissions', description: 'Original music compositions.', icon: faMusic, image: 'https://source.unsplash.com/800x450/?music' },
  { title: 'Photography Commissions', description: 'Professional photography services.', icon: faCamera, image: 'https://source.unsplash.com/800x450/?photography' },
  { title: 'Writing Commissions', description: 'Creative and professional writing.', icon: faPenNib, image: 'https://source.unsplash.com/800x450/?writing' },
  { title: 'Video Commissions', description: 'Video editing and production.', icon: faVideo, image: 'https://source.unsplash.com/800x450/?video' },
];

const CommissionsPage = ({ onSelect }) => {
  return (
    <>
      <OurStory />
      <div className="flex items-start justify-center min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {commissionTypes.map((commission, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer w-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => onSelect(commission)}
            >
              <div className="relative pt-[56.25%]">
                <img src={commission.image} alt={commission.title} className="absolute top-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center p-4">
                  <FontAwesomeIcon icon={commission.icon} className="text-white text-5xl mb-4" />
                  <h2 className="text-white text-3xl font-bold">{commission.title}</h2>
                  <p className="text-gray-300 text-center mt-2">{commission.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommissionsPage;
