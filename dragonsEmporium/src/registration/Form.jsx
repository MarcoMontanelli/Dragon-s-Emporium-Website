import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Flag from 'react-world-flags';

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePrivacyAccept = () => {
    setIsPrivacyChecked(true);
    setIsModalOpen(false);
  };

  const handlePrivacyDecline = () => {
    window.location.href = '/';
  };

  const handleCountryChange = (code) => {
    setSelectedCountryCode(code);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,blur')" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 bg-opacity-75 p-6 m-4 rounded-lg shadow-lg max-w-lg w-full flex flex-col items-center"
      >
        <div className="text-center mb-6">
          <img src="../src/assets/LD.png" alt="Logo" className="w-24 h-24 mx-auto mb-1" />
          <h1 className="text-3xl font-bold text-white">Dragon's Emporium</h1>
          <p className="text-gray-400 mt-1">Create your account</p>
        </div>
        <form className="w-full">
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faUser} className="text-gray-500 ml-2" />
              </span>
              <motion.input
                whileHover={{ scale: 1.02 }}
                type="text"
                id="username"
                placeholder="Enter your username"
                className="bg-gray-800 text-white border border-gray-700 p-2 pl-10 rounded-lg w-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex items-center">
              <div className="relative">
                <select
                  className="bg-gray-800 text-white border border-gray-700 p-2 rounded-l-lg"
                  value={selectedCountryCode}
                  onChange={(e) => handleCountryChange(e.target.value)}
                >
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+49">🇩🇪 +49</option>
                  <option value="+33">🇫🇷 +33</option>
                </select>
              </div>
              <motion.input
                whileHover={{ scale: 1.02 }}
                type="text"
                id="phone"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="bg-gray-800 text-white border border-gray-700 p-2 rounded-r-lg w-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="address">
              Shipping Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 ml-2" />
              </span>
              <motion.input
                whileHover={{ scale: 1.02 }}
                type="text"
                id="address"
                placeholder="Enter your address"
                className="bg-gray-800 text-white border border-gray-700 p-2 pl-10 rounded-lg w-full"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="privacyPolicy" 
              className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500 focus:ring-2" 
              checked={isPrivacyChecked}
              onChange={() => setIsPrivacyChecked(!isPrivacyChecked)}
            />
            <label htmlFor="privacyPolicy" className="ml-2 text-gray-400 text-sm">
              I agree to the
              <button type="button" className="text-blue-500 text-left hover:text-blue-700" onClick={toggleModal}>
                Privacy Policy
              </button>
            </label>
          </div>
          <div className="flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="shadow-xl text-center shadow-indigo-700/50 border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 text-white px-4 py-2 rounded-lg"
              type="submit"
            >
              Register
            </motion.button>
          </div>
        </form>
        <p className="mt-4 text-gray-400">
          Already have an account? <a href="#" className="text-blue-500 hover:text-blue-700">Login</a>
        </p>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-lg w-full"
          >
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="mb-4">[Your Privacy Policy Content]</p>
            <div className="flex justify-end">
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-600"
                onClick={handlePrivacyDecline}
              >
                Decline
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                onClick={handlePrivacyAccept}
              >
                Accept
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Register;
