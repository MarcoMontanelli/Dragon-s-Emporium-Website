import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTools, faStepForward, faFlagCheckered, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const FloatingMenu = () => {
    const [isOpen, setIsOpen] = useState(false);  // Menu is now hidden by default
    const handleNavigation = (e, anchorId) => {
        e.preventDefault();
        document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close the menu upon navigation
    };

    return (
        <>
            {isOpen && (
                <div className="fixed top-16 right-4 z-50 bg-gray-900 text-white p-4 rounded-lg shadow-lg space-y-2">
                    <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0 p-2">
                        <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
                    </button>
                    <ul>
                        <li onClick={(e) => handleNavigation(e, 'introduction')} className="flex items-center space-x-2 cursor-pointer hover:text-purple-500 transition-colors">
                            <FontAwesomeIcon icon={faHome} className="h-5 w-5" /><span>Introduction</span>
                        </li>
                        <li onClick={(e) => handleNavigation(e, 'tools')} className="flex items-center space-x-2 cursor-pointer hover:text-purple-500 transition-colors">
                            <FontAwesomeIcon icon={faTools} className="h-5 w-5" /><span>Tools Needed</span>
                        </li>
                        <li onClick={(e) => handleNavigation(e, 'steps')} className="flex items-center space-x-2 cursor-pointer hover:text-purple-500 transition-colors">
                            <FontAwesomeIcon icon={faStepForward} className="h-5 w-5" /><span>Step-by-Step</span>
                        </li>
                        <li onClick={(e) => handleNavigation(e, 'conclusion')} className="flex items-center space-x-2 cursor-pointer hover:text-purple-500 transition-colors">
                            <FontAwesomeIcon icon={faFlagCheckered} className="h-5 w-5" /><span>Conclusion</span>
                        </li>
                    </ul>
                </div>
            )}
            {!isOpen && (
                <button onClick={() => setIsOpen(true)} className="fixed top-16 right-4 z-50 text-white">
                    <FontAwesomeIcon icon={faBars} className="h-8 w-8" />
                </button>
            )}
        </>
    );
};

export default FloatingMenu;
