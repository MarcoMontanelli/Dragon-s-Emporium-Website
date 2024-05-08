import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.5 }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300 }
  }
};

const OurStory = () => {
  return (
    <motion.section
      class="relative mb-12 lg:mb-0 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div class="px-4 mx-auto max-w-screen-xl text-center">
        <motion.h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"
          variants={hoverVariants}
          whileHover="hover"
        >
          About us <br /><span class="text-[hsl(218,81%,75%)]">Our story</span>
        </motion.h1>
        <motion.p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-4 lg:px-8 dark:text-gray-400" variants={hoverVariants}
          whileHover="hover">
          We are a small business focused on making cosplay props and fursuits even if these two areas are our main core
          businesses, we also offer a 3d printing and laser cutting service. We started in 2023 even though our
          activities didn't start until early 2024, and we are just a group of two people.
          With time we hope to increase our offerings and grow our business. We are continuously learning and fixing our
          mistakes in order to always achieve great results and products. We are present on many social medias and we
          also operate an Etsy store.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default OurStory;
