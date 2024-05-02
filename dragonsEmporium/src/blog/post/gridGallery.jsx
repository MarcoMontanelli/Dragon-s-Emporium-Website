import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    image: 'https://via.placeholder.com/320x180',
    category: 'Technology',
    date: 'April 28, 2024',
    title: 'Exploring the Future of Tech Innovations',
    description: 'A deep dive into upcoming technological innovations that could shape the future.',
    commentsCount: 12,
  },
  // Add more articles as needed
];

const RelatedArticles = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * article.id }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img className="w-full h-44 object-cover object-center" src={article.image} alt={article.title} />
            <div className="p-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-indigo-600">{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="mt-2 font-bold">{article.title}</h3>
              <p className="mt-2 text-gray-600">{article.description}</p>
              <div className="flex justify-between items-center mt-4">
                <button className="text-blue-600 hover:text-blue-800 transition duration-300">Open Article</button>
                <div>
                  <button className="text-gray-600 hover:text-gray-800 transition duration-300 mr-2">
                    Share
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition duration-300">
                    {article.commentsCount} Comments
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
