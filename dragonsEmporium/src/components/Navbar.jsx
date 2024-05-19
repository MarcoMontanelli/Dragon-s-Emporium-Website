import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Flag from 'react-world-flags';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export function DragonLogo() {
  return (
    <a href="/" className="flex items-center space-x-2">
      <img
        src="../src/assets/LDE.png"
        className="h-11"
        alt="Dragon's Emporium Logo"
      />
      <span className="text-white self-center text-2xl font-bold whitespace-nowrap">
        Dragon's Emporium
      </span>
    </a>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLangToggle = () => {
    setIsLangOpen(!isLangOpen);
  };

  const handleBlogToggle = () => {
    setIsBlogOpen(!isBlogOpen);
  };

  const handleShopToggle = () => {
    setIsShopOpen(!isShopOpen);
  };

  return (
    <motion.nav
      className="bg-slate-950 opacity-90 text-white p-4 w-full z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <DragonLogo />
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <div className="relative">
            <button className="font-extrabold text-lg flex items-center" onClick={handleBlogToggle}>
              Blog <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            <AnimatePresence>
              {isBlogOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-black text-white p-4 mt-2 rounded"
                >
                  <a href="/blog.html" className="block py-1">Homepage</a>
                  <a href="/post.html" className="block py-1">Latest post</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <button className="font-extrabold text-lg flex items-center" onClick={handleShopToggle}>
              Shop <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            <AnimatePresence>
              {isShopOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-black text-white p-4 mt-2 rounded"
                >
                  <a href="/shop.html" className="block py-1">Homepage</a>
                  <a href="#product2" className="block py-1">Latest product</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="/about.html" className="font-extrabold text-lg">About us</a>
          <a href="/portfolio.html" className="font-extrabold text-lg">Portfolio</a>
          <a href="/commissions.html" className="font-extrabold text-lg">Commissions</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button onClick={handleProfileToggle} className="flex items-center">
              <img src="../src/assets/LD.png" alt="Profile" className="h-8 w-8 rounded-full mr-2" />
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-black text-white p-4 mt-2 rounded"
                >
                  <div className="flex items-center py-1">
                    <img src="path/to/profile-image.jpg" alt="Profile" className="h-8 w-8 rounded-full mr-2" />
                    <div>
                      <p>Bonnie Green</p>
                      <p className="text-gray-400">name@flowbite.com</p>
                    </div>
                  </div>
                  <a href="#dashboard" className="block py-1">Dashboard</a>
                  <a href="#settings" className="block py-1">Settings</a>
                  <a href="#earnings" className="block py-1">Earnings</a>
                  <a href="#signout" className="block py-1">Sign out</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <button onClick={handleLangToggle} className="flex items-center">
              <FontAwesomeIcon icon={faGlobe} size="lg" />
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-black text-white p-4 mt-2 rounded"
                >
                  <div className="flex items-center py-1">
                    <Flag code="US" className="h-5 w-5 rounded-full mr-2" />
                    <p>English (US)</p>
                  </div>
                  <div className="flex items-center py-1">
                    <Flag code="DE" className="h-5 w-5 rounded-full mr-2" />
                    <p>Deutsch</p>
                  </div>
                  <div className="flex items-center py-1">
                    <Flag code="IT" className="h-5 w-5 rounded-full mr-2" />
                    <p>Italiano</p>
                  </div>
                  
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <button className="block py-2 text-lg font-extrabold flex items-center" onClick={handleBlogToggle}>
                Blog <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </button>
              <AnimatePresence>
                {isBlogOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black text-white p-4 rounded mt-2"
                  >
                    <a href="#sub1" className="block py-1">Sub Link 1</a>
                    <a href="#sub2" className="block py-1">Sub Link 2</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <button className="block py-2 text-lg font-extrabold flex items-center" onClick={handleShopToggle}>
                Shop <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </button>
              <AnimatePresence>
                {isShopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black text-white p-4 rounded mt-2"
                  >
                    <a href="#product1" className="block py-1">Product 1</a>
                    <a href="#product2" className="block py-1">Product 2</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#about" className="block py-2 text-lg font-extrabold">About us</a>
            <a href="#portfolio" className="block py-2 text-lg font-extrabold">Portfolio</a>
            <a href="#commissions" className="block py-2 text-lg font-extrabold">Commissions</a>
            <div className="mt-4">
              <button onClick={handleProfileToggle} className="flex items-center py-2">
                <FontAwesomeIcon icon={faUser} size="lg" className="mr-2" /> Profile
              </button>
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black text-white p-4 rounded"
                  >
                    <div className="flex items-center py-1">
                      <img src="path/to/profile-image.jpg" alt="Profile" className="h-8 w-8 rounded-full mr-2" />
                      <div>
                        <p>Bonnie Green</p>
                        <p className="text-gray-400">name@flowbite.com</p>
                      </div>
                    </div>
                    <a href="#dashboard" className="block py-1">Dashboard</a>
                    <a href="#settings" className="block py-1">Settings</a>
                    <a href="#earnings" className="block py-1">Earnings</a>
                    <a href="#signout" className="block py-1">Sign out</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="mt-4">
              <button onClick={handleLangToggle} className="flex items-center py-2">
                <FontAwesomeIcon icon={faGlobe} size="lg" className="mr-2" /> Localization
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black text-white p-4 rounded"
                  >
                    <div className="flex items-center py-1">
                      <Flag code="US" className="h-5 w-5 rounded-full mr-2" />
                      <p>English (US)</p>
                    </div>
                    <div className="flex items-center py-1">
                      <Flag code="DE" className="h-5 w-5 rounded-full mr-2" />
                      <p>Deutsch</p>
                    </div>
                    <div className="flex items-center py-1">
                      <Flag code="IT" className="h-5 w-5 rounded-full mr-2" />
                      <p>Italiano</p>
                    </div>
                    <div className="flex items-center py-1">
                      <Flag code="CN" className="h-5 w-5 rounded-full mr-2" />
                      <p>中文 (繁體)</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
