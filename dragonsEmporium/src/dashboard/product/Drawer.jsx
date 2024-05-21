// Drawer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faBoxOpen, faChartLine, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 z-50 w-64 bg-slate-950 border border-gray-700 rounded-xl p-4 h-full transition-transform"
    >
      <div className="flex items-center justify-between py-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button className="text-white" onClick={toggleDrawer}>
          &#x2715;
        </button>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <FontAwesomeIcon icon={faUsers} className="mr-3" />
              Users
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <FontAwesomeIcon icon={faBoxOpen} className="mr-3" />
              Products
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <FontAwesomeIcon icon={faChartLine} className="mr-3" />
              Analytics
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <FontAwesomeIcon icon={faCogs} className="mr-3" />
              Settings
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Drawer;
