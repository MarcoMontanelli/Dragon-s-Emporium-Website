
import React, { useRef, useState } from 'react';

const ImageViewer = ({ src }) => {
    const imgRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    
    const toggleFullScreen = () => {
        if (imgRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                imgRef.current.requestFullscreen();
            }
        }
    };

   
    const enablePiP = () => {
        handleOpenModal();
    };

    return (
        <>
            <div className="relative flex items-center justify-center">
                <img
                    ref={imgRef}
                    src={src}
                    alt="Display Art"
                    className="max-w-7xl rounded-lg w-full aspect-video"
                />
                <div className="absolute top-3 right-3 space-x-2">
                    
                    <button onClick={toggleFullScreen} className="text-white bg-purple-500 hover:bg-purple-700 p-2 rounded-full">
                        <svg class="w-6 h-6 fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">


                            <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"></path>

                        </svg>
                    </button>
                </div>
                <figcaption className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white">Digital art by Anonymous</figcaption>
            </div>
            {modalOpen && (
                <Draggable>
                    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xl w-full relative">
                            <button onClick={handleCloseModal} className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <img src={src} alt="Draggable Modal Content" className="w-full" />
                            <figcaption className="p-4 text-center">Draggable image inside modal</figcaption>
                        </div>
                    </div>
                </Draggable>
            )}
        </>

    );
};

export default ImageViewer;


