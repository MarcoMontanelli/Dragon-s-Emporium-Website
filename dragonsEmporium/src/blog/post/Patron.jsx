import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const PatronAcknowledgments = ({ text, buttonText, onDonateClick }) => {
  return (
    <div className="bg-gray-800 text-white p-4 mt-4 mb-4 border-l-4 border-purple-600 rounded flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faHeart} className="text-purple-600 text-xl" />
        <p className="text-sm md:text-base">{text}</p>
      </div>
      <button 
        onClick={onDonateClick}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PatronAcknowledgments;
