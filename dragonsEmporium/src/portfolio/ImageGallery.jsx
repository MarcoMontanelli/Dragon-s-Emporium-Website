import React from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

const images = [
    { id: 1, title: 'Forest Morning', description: 'Early morning fog among the trees.', year: '2022', src: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80' },
    { id: 2, title: 'Cityscape', description: 'The bustling city life captured at dusk.', year: '2021', src: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=320&h=240&fit=crop' },
    { id: 3, title: 'Beach Sunset', description: 'Sunset over the ocean with a calming breeze.', year: '2023', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=210&h=300&fit=crop' },
    { id: 4, title: 'Mountain Hike', description: 'A breathtaking view from the mountain peak.', year: '2019', src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop' },
    { id: 5, title: 'Night Sky', description: 'The stars illuminate the night sky above the desert.', year: '2022', src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop' },
    { id: 6, title: 'Autumn Leaves', description: 'The warm colors of autumn leaves in the park.', year: '2021', src: 'https://images.unsplash.com/photo-1509955252650-8f558c2b8735?w=250&h=350&fit=crop' },
    { id: 7, title: 'Autumn Leaves', description: 'The warm colors of autumn leaves in the park.', year: '2021', src: '../src/assets/img4.JPG'  },
    { id: 8, title: 'Autumn Leaves', description: 'The warm colors of autumn leaves in the park.', year: '2021', src: '../src/assets/img2.JPG'  },
  ];
  

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  
  const MasonryGallery = () => {
    const [selectedImg, setSelectedImg] = React.useState(null);
  
    const handleExpand = (img) => {
      setSelectedImg(img);
    };
  
    return (
      <div className="px-4 py-2">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid space-y-4"
          columnClassName="my-masonry-grid_column">
          {images.map((img) => (
            <motion.div key={img.id}
              whileHover={{ scale: 1.03 }}
              className="relative cursor-pointer mb-4 overflow-hidden rounded-lg"
              onClick={() => handleExpand(img)}
            >
              <img src={img.src} alt={img.title} className="w-full object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 p-4 rounded-b-lg">
                <h4 className="text-white text-lg">{img.title}</h4>
                <p className="text-white text-sm">{img.description}</p>
                <span className="text-white text-xs">{img.year}</span>
              </div>
              <button className="absolute right-2 top-2 p-2 text-white bg-black bg-opacity-50 rounded-full">
                <FontAwesomeIcon icon={faExpand} />
              </button>
            </motion.div>
          ))}
        </Masonry>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img src={selectedImg.src} alt={selectedImg.title}
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              className="max-w-full max-h-full p-4 rounded-lg"
            />
          </motion.div>
        )}
      </div>
    );
  };
  
  export default MasonryGallery;