import React from 'react';
import { motion } from 'framer-motion';

const Breadcrumbs = ({ directories }) => {
  return (
    <nav className="flex mb-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {directories.map((directory, index) => (
          <motion.li
            key={directory.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center"
          >
            {index !== 0 && (
              <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
            )}
            <a
              href={directory.url}
              className={`inline-flex items-center text-sm font-medium ${directory.current ? 'text-gray-500' : 'text-gray-700 hover:text-blue-600'} md:ms-2 dark:text-gray-400 dark:hover:text-white`}
            >
              {directory.icon && (
                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d={directory.icon} />
                </svg>
              )}
              {directory.name}
            </a>
          </motion.li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
