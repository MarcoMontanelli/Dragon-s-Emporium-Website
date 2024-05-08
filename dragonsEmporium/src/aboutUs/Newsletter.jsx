import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



const Subscribe = () => {
  

  return (
    <section
      class="relative bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8 mx-4 mb-4 lg:mx-8 rounded-xl shadow-lg">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-700 rounded-xl opacity-75"></div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2
            class="text-3xl tracking-tight font-extrabold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-300 to-pink-400 py-2">
            Stay Updated
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
            Sign up for our newsletter to receive the latest news and updates.
          </p>
          <button type="button" class=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2">Suscribe</button>
        </div>
        
      </div>
    </section>
  );
};

export default Subscribe;
