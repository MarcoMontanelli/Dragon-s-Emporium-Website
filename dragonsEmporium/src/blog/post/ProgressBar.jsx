import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setScrollPosition(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="w-full bg-gray-800">
                <div style={{ width: `${scrollPosition}%` }} className="bg-purple-500 h-1"></div>
            </div>
        </div>
    );
};

export default ProgressBar;