import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

const TipsSection = ({ text }) => {
  return (
    <div className="bg-gray-800 text-white p-4 mt-4 mb-4 border-l-4 border-green-600 rounded flex items-center gap-2">
      <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-400 text-xl" />
      <p className="text-sm md:text-base">{text}</p>
    </div>
  );
};

export default TipsSection;
