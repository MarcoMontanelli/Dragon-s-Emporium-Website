import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, type: 'spring', stiffness: 120 }
  }
};

const iconVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: index => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 + index * 0.1, type: 'spring', stiffness: 120 }
  })
};

const SocialMediaBar = () => {
  const icons = [faFacebook, faTwitter, faGoogle, faInstagram];

  return (
    <div className=" py-4 px-10">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-2xl text-white font-bold mb-4"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2 }}
        >
          Stay Updated on our Social Media accounts
        </motion.h2>
        <div className="flex justify-center gap-8">
          {icons.map((icon, index) => (
            <motion.a
              key={icon.iconName} // FontAwesome icon names are unique
              href="#"
              className="text-white text-lg hover:text-blue-300"
              variants={iconVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
            >
              <FontAwesomeIcon icon={icon} size="2x" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBar;
