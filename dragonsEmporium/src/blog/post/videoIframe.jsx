import React from 'react';

const Iframe = ({src}) => {
    return (
        <>
            <div className="flex items-center justify-center">
                {/* Apply styles from the div to the iframe */}
                <iframe
                    className="max-w-7xl rounded-lg w-full aspect-video" // Responsive width and aspect ratio
                    src={src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            
        </>
    );
}; 

export default Iframe;
