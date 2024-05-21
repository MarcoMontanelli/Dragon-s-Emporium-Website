import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,blur')" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 bg-opacity-75 p-6 m-4 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center"
      >
        <div className="hidden md:block md:w-1/2 p-4">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjk4OTQw&ixlib=rb-1.2.1&q=80&w=400" alt="Login Image" className="rounded-lg" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center">
          <div className="text-center mb-6">
            <img src="../src/assets/LD.png" alt="Logo" className="w-24 h-24 mx-auto mb-1" />
            <h1 className="text-3xl font-bold text-white">Dragon's Emporium</h1>
            <p className="text-gray-400 mt-1">Welcome back! Please login to your account.</p>
          </div>
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 ml-2" />
                </span>
                <motion.input
                  whileHover={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white border border-gray-700 p-2 pl-10 rounded-lg w-full"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FontAwesomeIcon icon={faLock} className="text-gray-500 ml-2" />
                </span>
                <motion.input
                  whileHover={{ scale: 1.02 }}
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="bg-gray-800 text-white border border-gray-700 p-2 pl-10 rounded-lg w-full"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className=" shadow-xl text-center shadow-indigo-700/50  border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 text-white px-4 py-2 rounded-lg"
              type="submit"
            >
              Login
            </motion.button>
            </div>
            
          </form>
          <p className="mt-4 text-gray-400">
            Don't have an account? <a href="#" className="text-blue-500 hover:text-blue-700">Sign Up</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
