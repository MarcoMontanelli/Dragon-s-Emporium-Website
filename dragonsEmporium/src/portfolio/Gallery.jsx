import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
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

const gridClasses = (widthRatio, heightRatio) => {
  return `col-span-${widthRatio} row-span-${heightRatio} relative overflow-hidden cursor-pointer`;
};

const MasonryGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = (img) => {
    setSelectedImg(img);
  };

  const handleClose = () => {
    setSelectedImg(null);
  };

  return (
    <div className="bg-dark min-h-screen p-5">
      <div className="grid grid-cols-12 gap-2">
        {images.map((image) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => handleOpen(image)}
            className={gridClasses(image.widthRatio, image.heightRatio)}
          >
            <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-white">
                <h3>{image.title}</h3>
                <p>{image.year}</p>
                <p>{image.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4"
          >
            <motion.img
              src={selectedImg.src}
              alt={selectedImg.title}
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              className="max-w-full max-h-full"
            />
            <button className="absolute top-5 right-5 p-3 bg-white rounded-full" onClick={handleClose}>
              <FontAwesomeIcon icon={faCompress} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryGallery;
