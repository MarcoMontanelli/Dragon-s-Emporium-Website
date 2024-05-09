import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const MiniArticle = ({ category, title, date, description, imageUrl }) => {
  const articleVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
    whileHover: { scale: 1.05 }
  };

  return (
    <motion.div 
      className="bg-gray-800 text-white p-2 rounded-lg my-2 transition duration-300"
      variants={articleVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="whileHover"
    >
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">{category}</span>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
      <h4 className="text-md font-bold">{title}</h4>
      <img src={imageUrl} alt="Article" className="w-full rounded-md mt-2"/>
      <p className="text-xs text-gray-300">{description}</p>
      <div className="flex justify-between items-center mt-2">
        <FontAwesomeIcon icon={faHeart} className="text-red-500 cursor-pointer hover:text-red-700" />
        <FontAwesomeIcon icon={faComment} className="text-blue-500 cursor-pointer hover:text-blue-700" />
      </div>
    </motion.div>
  );
};

const Sidebar = () => {
  const articles = [
    {
      category: "Tech",
      title: "Innovations in AI",
      date: "May 10, 2024",
      description: "Discover the latest breakthroughs in artificial intelligence and machine learning.",
      imageUrl: "https://via.placeholder.com/100x60.png?text=AI+Tech"
    },
    {
      category: "Health",
      title: "Advances in Healthcare",
      date: "May 11, 2024",
      description: "Explore how technology is transforming healthcare with new treatment options.",
      imageUrl: "https://via.placeholder.com/100x60.png?text=Healthcare"
    },
    {
      category: "Environment",
      title: "Climate Change Challenges",
      date: "May 12, 2024",
      description: "Understanding the impact of climate change and what it means for our planet.",
      imageUrl: "https://via.placeholder.com/100x60.png?text=Climate"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-gray-700 p-4 rounded-xl">
        <h3 className="text-white text-lg font-bold">Related Articles</h3>
        {articles.map((article, index) => (
          <MiniArticle key={index} {...article} />
        ))}
      </div>
      <div className="bg-gray-700 p-4 rounded-xl">
        <h3 className="text-white text-lg font-bold">Advertisement</h3>
        <div className="h-40 bg-white rounded-lg"></div>
      </div>
    </div>
  );
}

export default Sidebar;
