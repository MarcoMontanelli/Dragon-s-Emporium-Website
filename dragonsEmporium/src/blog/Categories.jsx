import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faGlobeAmericas, faCity, faFire, faSmileBeam, faEarthAmericas, faChalkboardTeacher, faImage } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const categories = [
  {
    id: 1,
    name: "Guides",
    description: "Discover new, interactive and engaging guides for free with videos and images.",
    image: 'https://via.placeholder.com/500x300.png?text=Nature%27s+Light',
    icon: faChalkboardTeacher,
    spots: 'Landscape'
  },
  {
    id: 2,
    name: "Videos",
    description: "Explore our vast selection of videos featuring easy to follow tutorials and video essays.",
    image: 'https://via.placeholder.com/500x300.png?text=Cultural',
    icon: faYoutube,
    spots: '257 Spots'
  },
  {
    id: 3,
    name: "Images",
    description: "Check out our portfolio gallery with previous creations and future projects.",
    image: 'https://via.placeholder.com/500x300.png?text=Modern+Life',
    icon: faImage,
    spots: '117 Spots'
  },
  {
    id: 4,
    name: "Popularity",
    description: "What's trending now? Explore the latest popular content from around the world.",
    image: 'https://via.placeholder.com/500x300.png?text=Popularity',
    icon: faFire,
    spots: '363 Spots'
  },
  {
    id: 5,
    name: "Good Vibes",
    description: "Feel the positive energy with stories that lift spirits and inspire.",
    image: 'https://via.placeholder.com/500x300.png?text=Good+Vibes',
    icon: faSmileBeam,
    spots: '215 Spots'
  },
  {
    id: 6,
    name: "Global Warming",
    description: "Understanding the impact of climate change and what it means for our planet.",
    image: 'https://via.placeholder.com/500x300.png?text=Global+Warming',
    icon: faEarthAmericas,
    spots: 'Climate'
  }
];

const CategoryCard = ({ category }) => {
  return (
    <motion.div className="bg-cover bg-center text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      style={{ backgroundImage: `url(${category.image})` }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-6 bg-black bg-opacity-50">
        <FontAwesomeIcon icon={category.icon} className="text-lg" />
        <h2 className="text-xl font-bold mt-2">{category.name}</h2>
        <p className="mt-1">{category.description}</p>
        <button className="mt-4 bg-purple-700 hover:bg-purple-800 rounded-full px-5 py-2 transition-colors duration-300">Read More</button>
      </div>
    </motion.div>
  );
};

const CategorySection = () => {
  return (
    <div className="container mx-auto px-4 py-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
