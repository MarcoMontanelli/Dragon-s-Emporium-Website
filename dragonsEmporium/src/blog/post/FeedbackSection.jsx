import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const FeedbackSection = () => {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const submitFeedback = (e) => {
        e.preventDefault();
        alert(`Feedback submitted with rating: ${rating}, comment: ${feedback}`);
        setFeedback('');  // Reset feedback input after submission
    };

    return (
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg mt-8  shadow-purple-700/50 border border-gray-700">
            <h4 className="text-lg font-bold mb-4">Rate Our Guide</h4>
            <form onSubmit={submitFeedback} className="flex flex-col items-start">
                <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <button key={i} type="button" onClick={() => setRating(i + 1)} className="text-gray-400 hover:text-white-300 hover:bg-gray-700">
                            <FontAwesomeIcon icon={rating > i ? fullStar : emptyStar} className="h-5 w-5" />
                        </button>
                    ))}
                </div>
                <textarea 
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Write your feedback here..."
                    className="text-white bg-gray-800 mb-4 w-full h-24 p-2 rounded"
                ></textarea>
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default FeedbackSection;
