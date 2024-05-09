import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const Article = ({ category, title, date, description, imageUrl }) => {
  const articleVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    whileHover: { scale: 1.05 }
  };

  return (
    <motion.div className="bg-gray-900 border border-gray-700 text-white p-6 rounded-xl mx-auto max-w-7xl w-full my-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                variants={articleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="whileHover"
                layout>
      <div className="flex flex-col lg:flex-row justify-between">
        <img src={imageUrl} alt={title} className="w-full lg:w-1/2 rounded-lg mb-4 lg:mb-0 lg:mr-4"/>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2"> {/* Changed items-center to items-start to adjust vertical alignment */}
            <span className="text-gray-400 text-sm">{category}</span>
            <span className="text-gray-400 text-sm">{date}</span>
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <hr className="my-2" />
          <p className="text-gray-300">{description}</p>
          <div className="flex justify-between items-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Open
            </button>
            <div className="space-x-4">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 hover:text-red-700 cursor-pointer" />
              <FontAwesomeIcon icon={faComment} className="text-blue-500 hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Article;
