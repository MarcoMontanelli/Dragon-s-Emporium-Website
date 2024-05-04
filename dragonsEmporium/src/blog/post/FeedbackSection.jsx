import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const FeedbackSection = () => {
    const [rating, setRating] = useState(0);

    const submitFeedback = (e) => {
        e.preventDefault();
        alert(`Feedback submitted with rating: ${rating}`);
    };

    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mt-8">
            <h3 className="text-lg font-bold mb-4">Rate Our Guide</h3>
            <form onSubmit={submitFeedback} className="flex flex-col items-start">
                <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <button key={i} type="button" onClick={() => setRating(i + 1)} className="text-yellow-400">
                            <FontAwesomeIcon icon={rating > i ? fullStar : emptyStar} className="h-5 w-5" />
                        </button>
                    ))}
                </div>
                <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                    Submit Rating
                </button>
            </form>
        </div>
    );
};

export default FeedbackSection;
