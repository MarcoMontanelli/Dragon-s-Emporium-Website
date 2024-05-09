import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserCircle, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/home' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  const userDropdown = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Settings', path: '/settings' },
    { name: 'Earnings', path: '/earnings' },
    { name: 'Sign out', path: '/logout' }
  ];

  const languageOptions = [
    { name: 'English (US)', icon: 'us' },
    { name: 'Deutsch', icon: 'de' },
    { name: 'Italiano', icon: 'it' },
    { name: '中文 (简体)', icon: 'cn' }
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
      <a href="/" className="flex items-center space-x-2">
      <img
        src="../src/assets/LDE.png"
        className="h-11"
        alt="Dragon's Emporium Logo"
      />
      <span className="text-white self-center text-2xl font-bold whitespace-nowrap ">
        Dragon's Emporium
      </span>
    </a>
      </div>
      <FontAwesomeIcon icon={faBars} className="md:hidden text-xl cursor-pointer" onClick={() => setNavOpen(true)} />
      <AnimatePresence>
        {isNavOpen && (
          <motion.aside
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <motion.div
              className="bg-gray-800 w-64 p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <FontAwesomeIcon icon={faTimes} className="text-white text-xl mb-4 cursor-pointer" onClick={() => setNavOpen(false)} />
              {links.map(link => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  className="block px-4 py-2 rounded hover:bg-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-4">
                <button onClick={() => setUserDropdownOpen(!isUserDropdownOpen)} className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
                  <FontAwesomeIcon icon={faUserCircle} className="mr-2" /> Bonnie Green
                </button>
                {isUserDropdownOpen && userDropdown.map(item => (
                  <a key={item.name} href={item.path} className="block px-4 py-2 rounded hover:bg-gray-700 ml-4">{item.name}</a>
                ))}
              </div>
              <div className="pt-4">
                <button onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)} className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
                  <FontAwesomeIcon icon={faGlobeAmericas} className="mr-2" /> English (US)
                </button>
                {isLanguageDropdownOpen && languageOptions.map(option => (
                  <a key={option.name} href="#" className="block px-4 py-2 rounded hover:bg-gray-700 ml-4">{option.name}</a>
                ))}
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="hidden md:flex space-x-4">
        {links.map(link => (
          <a key={link.name} href={link.path} className="hover:text-gray-300">{link.name}</a>
        ))}
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <FontAwesomeIcon icon={faUserCircle} size="2x" onClick={() => setUserDropdownOpen(!isUserDropdownOpen)} />
        <FontAwesomeIcon icon={faGlobeAmericas} size="2x" onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)} />
      </div>
    </nav>
  );
};

export default Nav;
