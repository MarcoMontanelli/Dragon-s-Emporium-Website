import React from 'react';

const SwiperSlide = ({ slide, width }) => (
    <div className="swiper-slide w-full flex-shrink-0 flex justify-center items-center" style={{width: `${width}%`}}>
        <div className="max-w-lg w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 shadow-xl shadow-indigo-700/50">
            <div className="flex items-center px-2 py-2 bg-gray-900 rounded-t-lg">
                <span className="flex-grow text-center text-xs text-gray-400">Your Custom Header</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5">
                <a href="#" className="block">
                    <img src={slide.imageUrl} alt="Image Description" className="mb-4"/>
                </a>
                <hr className="my-4 border-gray-200 dark:border-gray-600 w-full" />
                <a href="#" className="block w-full text-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{slide.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{slide.description}</p>
                <hr className="my-4 border-gray-200 dark:border-gray-600 w-full" />
                <a href="#" className="inline-flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Read More
                    <svg className="ml-2 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
);

export default SwiperSlide;
