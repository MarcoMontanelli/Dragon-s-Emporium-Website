// ToggleSwitch.js
import React, { useState } from 'react';

const ToggleSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input type="checkbox" className="hidden" checked={isEnabled} onChange={() => setIsEnabled(!isEnabled)} />
                <div className="toggle-bg bg-gray-700 border-2 border-gray-600 h-6 w-11 rounded-full"></div>
                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${isEnabled ? 'transform translate-x-full' : ''}`}></div>
            </div>
            <div className="ml-3 text-gray-300 font-medium">
                {isEnabled ? 'Commission' : 'premade'}
            </div>
        </label>
    );
};

export default ToggleSwitch;
