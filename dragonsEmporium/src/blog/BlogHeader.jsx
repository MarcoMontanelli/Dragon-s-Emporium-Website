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

const BlogTitle = () => {
  return (
    <motion.section
      class="relative mb-1 mt-2  "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div class="px-4 mx-auto max-w-screen-xl text-center">
        <motion.h1
          class=" text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"
          variants={hoverVariants}
          whileHover="hover"
        >
           Our blog<br /><span class="text-[hsl(218,81%,75%)]">Latest Articles</span>
        </motion.h1>
        
      </div>
    </motion.section>
  );
};

export default BlogTitle;
