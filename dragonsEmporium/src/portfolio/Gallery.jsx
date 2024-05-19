import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';

const portfolioItems = [
  {
    type: 'image',
    src: 'https://via.placeholder.com/1280x720',
    title: 'Project Title 1',
    description: 'Description of Project 1',
    date: 'January 1, 2023',
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Project Title 2',
    description: 'Description of Project 2',
    date: 'February 15, 2023',
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/1280x720',
    title: 'Project Title 3',
    description: 'Description of Project 3',
    date: 'March 3, 2023',
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/1280x720',
    title: 'Project Title 4',
    description: 'Description of Project 4',
    date: 'April 20, 2023',
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/720x1280',
    title: 'Project Title 5',
    description: 'Description of Project 5',
    date: 'May 10, 2023',
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/1280x720',
    title: 'Project Title 6',
    description: 'Description of Project 6',
    date: 'June 30, 2023',
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/1280x720',
    title: 'Project Title 7',
    description: 'Description of Project 7',
    date: 'July 14, 2023',
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Project Title 8',
    description: 'Description of Project 8',
    date: 'August 25, 2023',
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/1280x720',
    title: 'Project Title 9',
    description: 'Description of Project 9',
    date: 'September 9, 2023',
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/1280x720',
    title: 'Project Title 10',
    description: 'Description of Project 10',
    date: 'October 11, 2023',
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Project Title 11',
    description: 'Description of Project 11',
    date: 'November 21, 2023',
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/1280x720',
    title: 'Project Title 12',
    description: 'Description of Project 12',
    date: 'December 31, 2023',
  },
];

const PortfolioGallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl text-white font-extrabold"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our Portfolio
        </motion.h1>
        <motion.h2
          className="text-2xl text-gray-300 mt-2 font-extrabold"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Our creations
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className={`relative rounded-lg overflow-hidden bg-gray-800 ${index === 4 ? 'row-span-2' : ''} ${index === 10 ? 'col-span-2' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedItem(item)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className={`aspect-w-16 ${index === 4 ? 'aspect-h-16' : 'aspect-h-9'}`}>
              {item.type === 'image' ? (
                <img src={item.src} alt={item.title} className="object-cover w-full h-full" />
              ) : (
                <video controls className="object-cover w-full h-full">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-70 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-white text-2xl font-extrabold mb-2">{item.title}</h3>
              <p className="text-gray-300 font-bold">{item.description}</p>
              <p className="text-gray-400 mt-2">{item.date}</p>
              <button className="mt-4 p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600">
                <FontAwesomeIcon icon={faExpand} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative bg-gray-900 p-4 rounded-lg max-w-5xl w-full m-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-2 right-2 p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600"
                onClick={() => setSelectedItem(null)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              {selectedItem.type === 'image' ? (
                <img src={selectedItem.src} alt={selectedItem.title} className="w-full h-auto rounded-lg" />
              ) : (
                <video controls autoPlay className="w-full h-auto rounded-lg">
                  <source src={selectedItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioGallery;
