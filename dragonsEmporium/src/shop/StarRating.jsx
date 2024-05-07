// StarRating.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`cursor-pointer ${index < rating ? 'text-gray-300' : 'text-gray-500'}`}
                    onMouseEnter={() => setRating(index + 1)}
                    onMouseLeave={() => setRating(0)}
                    onClick={() => setRating(index + 1)}
                />
            ))}
        </div>
    );
};

export default StarRating;
