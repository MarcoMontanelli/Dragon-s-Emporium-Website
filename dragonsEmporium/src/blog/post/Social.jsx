import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faRedditAlien } from '@fortawesome/free-brands-svg-icons';



const SocialShare = () => {
    return (
        <div className="flex space-x-4 ">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faRedditAlien} />
            </button>
        </div>
    );
};

export default SocialShare;