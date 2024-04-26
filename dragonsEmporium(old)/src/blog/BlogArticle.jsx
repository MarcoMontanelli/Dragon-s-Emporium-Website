import React from 'react';

const BlogArticle = ({ category, date, imageUrl, title, description, link }) => {
    return (
        <a href={link} className="bg-slate-950 block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl border  shadow-indigo-700/50 border-indigo-800 hover:bg-slate-800 transition duration-300">
            {/* Image container with fixed aspect ratio */}
            <div className="relative w-full pb-[56.25%]">  {/* 56.25% padding-bottom maintains the 16:9 ratio */}
                <img src={imageUrl} alt={title} 
                     className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                     style={{ boxShadow: "0 0 8px 2px #7c3aed" }}/>
            </div>
            <div className="p-4">
                <span className="inline-block px-2 py-1 bg-purple-600 text-white rounded-full text-xs font-medium tracking-wide">{category}</span>
                <span className="text-gray-400 text-xs float-right">{date}</span>
                <hr className="my-2 border-gray-700"/>
                <h5 className="text-2xl font-bold">{title}</h5>
                <p className="text-sm text-gray-300">{description}</p>
                <hr className="my-2 border-gray-700"/>
                <div class="flex items-center flex-wrap ">
              <a class="text-white inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="white" stroke-width="2" fill="white" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 448 512">
                <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"></path>
                </svg>
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
            </div>
        </a>
    );
}

export default BlogArticle;
