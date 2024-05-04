import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const DownloadSection = () => {
    const resources = [
        { name: "Complete Guide PDF", link: "path_to_complete_guide.pdf" },
        { name: "Step-by-Step Checklist", link: "path_to_checklist.pdf" },
        { name: "Supplementary Materials", link: "path_to_supplementary_materials.pdf" }
    ];

    return (
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg mt-8  shadow-purple-700/50 border border-gray-700">
            <h4 className="text-lg font-bold mb-4">Downloadable Resources</h4>
            <ul>
                {resources.map((resource, index) => (
                    <li key={index} className="mb-2">
                        <a href={resource.link} download className="flex items-center text-sm justify-between bg-slate-900 hover:bg-slate-800 border border-gray-700 text-white font-bold py-2 px-4 rounded">
                            {resource.name}
                            <FontAwesomeIcon icon={faDownload} className="ml-2" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DownloadSection;
