import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faTag, faFilter } from '@fortawesome/free-solid-svg-icons';

const Breadcrumbs = ({ categories, filters }) => {
  return (
    <div className="p-4 bg-gray-950 text-white">
      <div className="flex items-center space-x-2">
        {/* Home link with icon */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <FontAwesomeIcon icon={faHome} className="mr-1" />
          <motion.a href="/" className="hover:underline">Home</motion.a>
        </motion.div>

        {/* Dynamic category and filter links with icons */}
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 + 0.1 * index }}
            className="flex items-center"
          >
            <FontAwesomeIcon icon={faChevronRight} className="mx-2" />
            <FontAwesomeIcon icon={faTag} className="text-white mr-1" />
            <a href="#" className="hover:underline">{category}</a>
          </motion.div>
        ))}

        {filters.map((filter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 + 0.1 * index }}
            className="flex items-center"
          >
            <FontAwesomeIcon icon={faChevronRight} className="mx-2" />
            <FontAwesomeIcon icon={faFilter} className="text-white mr-1" />
            <span>{filter}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
