import { useState } from 'react';

const Poll = ({ title, options }) => {
    const [vote, setVote] = useState(null);

    const handleVote = (option) => {
        setVote(option);
    };

    return (
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg mt-8  shadow-purple-700/50 border border-gray-700">
            <h4 className="text-xl font-bold mb-3">{title}</h4>
            <div className="space-y-4">
                {options.map(option => (
                    <button
                        key={option}
                        onClick={() => handleVote(option)}
                        className={`w-full p-2 rounded hover:bg-purple-800 ${vote === option ? "bg-purple-600" : "bg-gray-700"}`}
                    >
                        {option}
                    </button>
                ))}
            </div>
            
        </div>
    );
};

export default Poll;
