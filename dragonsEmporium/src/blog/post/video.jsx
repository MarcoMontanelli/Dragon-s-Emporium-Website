import React, { useRef } from 'react';

const Video = ({ src }) => {
    const videoRef = useRef(null);

    // Enable picture-in-picture
    const enablePiP = () => {
        if (videoRef.current && document.pictureInPictureEnabled) {
            videoRef.current.requestPictureInPicture().catch(error => {
                // Error handling
                console.error('Picture-in-Picture initiation failed', error);
            });
        }
    };

    // Fullscreen toggle functionality
    const toggleFullScreen = () => {
        if (videoRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(error => {
                    console.error('Exiting fullscreen failed', error);
                });
            } else {
                videoRef.current.requestFullscreen().catch(error => {
                    console.error('Entering fullscreen mode failed', error);
                });
            }
        }
    };

    return (
        <div className="relative flex items-center justify-center overflow-hidden ">
            <video
                ref={videoRef}
                className="max-w-7xl rounded-lg w-full aspect-video " // Responsive width and aspect ratio
                src={src}
                controls
                title="Video player"
            >
                {/* Display a message if the video tag is not supported */}
                Your browser does not support the video tag.
            </video>
            {/* Overlay figcaption at the bottom right corner */}
            <figcaption className="absolute bottom-0 left-0 z-20 text-white bg-black bg-opacity-50">
                Digital art by Anonymous
            </figcaption>
        </div>
    );
};

export default Video;
