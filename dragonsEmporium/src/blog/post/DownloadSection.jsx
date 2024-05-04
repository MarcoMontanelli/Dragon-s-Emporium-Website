import React from 'react';

const DownloadSection = () => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mt-8">
            <h3 className="text-lg font-bold mb-4">Downloadable Resources</h3>
            <a href="path_to_your_resource.pdf" download className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                Download PDF Guide
            </a>
        </div>
    );
};

export default DownloadSection;