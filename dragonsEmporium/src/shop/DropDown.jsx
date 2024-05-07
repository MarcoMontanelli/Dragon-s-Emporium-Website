// DropdownSelector.js
import React, { useState } from 'react';

const DropdownSelector = ({ options = ['New', 'Used'] }) => {
    const [selected, setSelected ] = useState(options[0]);
    return (
        <div className="relative">
            <label className="block text-sm font-medium text-gray-400 mb-1 mt-2">Condition:</label>
            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="bg-gray-700 text-white rounded p-2  appearance-none w-full"
            >
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
            </div>
        </div>
    );
};

export default DropdownSelector;