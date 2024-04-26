export default function Content(){
    return (
        <>
            <>
  
  <script src="https://cdn.tailwindcss.com"/>
  
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"/>
  
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"/>


<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"/>

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/swiper/swiper-bundle.min.css"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet"
  />
  {/* Swiper's JS */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
  />
  {/* Swiper's JavaScript */}
  
  
  {/* Heading, Paragraph, CTA Buttons with Responsive Padding */}
  <section className="z-10">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <a
        href="#"
        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 shadow-xl shadow-purple-700/50 border border-indigo-500"
        role="alert"
      >
        <span className="text-xs bg-purple-500 rounded-full text-white px-4 py-1.5 mr-3">
          Stay updated!
        </span>{" "}
        <span className="text-sm font-medium">Guides, Updates and more..</span>
        <svg
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Visit our blog!
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        We post useful giudes for FREE, pdfs, patterns and we post updates on
        our store
      </p>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Latest Blog Updates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Repeat this card for each blog post */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 max-w-lg bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 shadow-xl shadow-indigo-700/50">
            <div className="flex items-center px-2 py-2 bg-gray-900 rounded-t-lg shadow-xl shadow-purple-700/50">
              <div className="flex space-x-1"></div>
              <span className="flex-grow text-center text-xs text-gray-400">
                Dragon's Emporium@macOS - post1
              </span>
            </div>
            <a href="#">
              <img src="Simone(non arzuffi).png" alt="" />
            </a>
            <div className="p-5">
              <a
                href="#"
                className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-2 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 shadow-xl shadow-purple-700/50 border border-indigo-500"
                role="alert"
              >
                <span className="text-xs bg-purple-500 rounded-full text-white px-4 py-1.5 mr-3">
                  New
                </span>{" "}
                <span className="text-sm font-medium">24/04/24</span>
              </a>
              <hr className="my-4 border-gray-200 dark:border-gray-600" />
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <hr className="my-4 border-gray-200 dark:border-gray-600" />
              <a
                href="#"
                className="inline-flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950  hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Read More
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 max-w-lg bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 shadow-xl shadow-indigo-700/50">
            <div className="flex items-center px-2 py-2 bg-gray-900 rounded-t-lg shadow-xl shadow-purple-700/50">
              <div className="flex space-x-1"></div>
              <span className="flex-grow text-center text-xs text-gray-400">
                Dragon's Emporium@macOS - post2
              </span>
            </div>
            <a href="#">
              <img src="Simone(non arzuffi).png" alt="" />
            </a>
            <div className="p-5">
              <a
                href="#"
                className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-2 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 shadow-xl shadow-purple-700/50 border border-indigo-500"
                role="alert"
              >
                <span className="text-xs bg-purple-500 rounded-full text-white px-4 py-1.5 mr-3">
                  New
                </span>{" "}
                <span className="text-sm font-medium">24/04/24</span>
              </a>
              <hr className="my-4 border-gray-200 dark:border-gray-600" />
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <hr className="my-4 border-gray-200 dark:border-gray-600" />
              <a
                href="#"
                className="inline-flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950  hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Read More
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* ... Additional cards ... */}
        </div>
      </div>
    </div>
  </section>
  {/* Remove unnecessary area under the content */}
  {/* Previously here could be a div element for bottom content which has been removed as per your instructions */}
  <hr className="my-4 border-gray-200 dark:border-gray-600 w-full" />
  <div className="flex flex-col md:flex-row  justify-center mt-8">
    {/* Jumbotron/CTA Section */}
    <section className="md:w-1/2 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <span className="mb-2 rounded-full  bg-purple-500 px-3 py-0.5 shadow-xl shadow-purple-700/50 text-xl font-semibold leading-5 text-white ">
          Our core businesses
        </span>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Check out our custom products
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Here at Dragon's emporium we offer lots of custom made and tailored
          products, from laser cut keychains or 3d printed props to custom
          stickers and patterns.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950  hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Go shopping
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-gradient-to-tr from-fuchsia-600 via-purple-900 to-violet-800 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
    {/* Terminal Section */}
    <div className="lg:w-1/2 max-w-4xl mx-auto lg:mx-0 my-8 lg:my-0 p-1 rounded-t-md justify-center gradient-shadow">
      {/* macOS styled Terminal with VS Code Color Palette */}
      <div className="flex items-center px-2 py-2 bg-gray-900 rounded-t-lg shadow-xl shadow-purple-700/50">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <span className="flex-grow text-center text-xs text-gray-400">
          Dragon's Emporium@macOS - Visual Studio Code
        </span>
      </div>
      <div className="p-4 text-xs text-gray-300 font-mono bg-black rounded-b-lg shadow-xl shadow-purple-700/50">
        {/* Simulated HTML content inside the terminal */}
        <span className="text-blue-400">Dragon's Emporium@macOS</span>:
        <span className="text-green-400">~</span>$ ls
        <br />
        <span className="text-white">file1.txt file2.txt folder1</span>
        <br />
        <span className="text-blue-400">Dragon's Emporium@macOS</span>:
        <span className="text-green-400">~</span>$ cd folder1
        <br />
        <span className="text-blue-400">Dragon's Emporium@macOS</span>:
        <span className="text-green-400">~/folder1</span>$ cat file3.txt
        <br />
        <span className="text-white">// HTML content here</span>
        <br />
        <span className="text-purple-400">&lt;html&gt;</span>
        <br />
        <span className="text-purple-400 ml-4">&lt;head&gt;</span>
        <br />
        <span className="text-purple-400 ml-8">&lt;title&gt;</span>Our Services
        <span className="text-purple-400">&lt;/title&gt;</span>
        <br />
        <span className="text-purple-400 ml-4">&lt;/head&gt;</span>
        <br />
        <span className="text-purple-400 ml-4">&lt;body&gt;</span>
        <br />
        <span className="text-purple-400 ml-8">&lt;h1 id="typewriter"&gt;</span>
        <span className="text-white cursor-text" id="typewriter1">
          |
        </span>
        <span className="text-purple-400">&lt;/h1&gt;</span>
        <br />
        <span className="text-purple-400 ml-4">&lt;/body&gt;</span>
        <br />
        <span className="text-purple-400">&lt;/html&gt;</span>
        <br />
        <span className="text-blue-400">Dragon's Emporium@macOS</span>:
        <span className="text-green-400">~/folder1</span>$
      </div>
    </div>
  </div>
  <hr className="my-4 border-gray-200 dark:border-gray-600 w-full" />
  {/* Swiper */}
  
  <hr className="my-4 border-gray-200 dark:border-gray-600 w-full" />
    
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* Stili per il cursore lampeggiante */\n    #cursor {\n      animation: blink 1s infinite;\n    }\n\n    @keyframes blink {\n\n      0%,\n      100% {\n        opacity: 1;\n      }\n\n      50% {\n        opacity: 0;\n      }\n    }\n  "
    }}
  />
  
  <div className="flex flex-col lg:flex-row  min-h-screen justify-center   ">
    {/* Jumbotron/CTA Section */}
    <section className="lg:w-1/2 p-8 justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <span className="mb-2 rounded-full  bg-purple-500 px-3 py-0.5 shadow-xl shadow-purple-700/50 text-xl font-semibold leading-5 text-white ">
          Top pick
        </span>
        <h1 className=" mb-2 drop-shadow-xl drop-shadow-purple-700/50 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          View and Purchase all sorts of 3d models
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          In our store you are going to find all kinds of 3d models, you are
          also able to view them thanks to our integrated interactive 3d viewer
          .
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950  hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Go shopping
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-gradient-to-tr from-fuchsia-600 via-purple-900 to-violet-800 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
          >
            Learn more
          </a>
        </div>
        <div className=" mt-8 mb-8">
          <span className="mt-2 rounded-full   bg-gray-600 px-3 py-0.5 text-xl  shadow-xl shadow-purple-700/50 font-semibold leading-5 text-white ">
            Compatible with hundreds of programs
          </span>
        </div>
        <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-8 md:mt-8 md:grid-cols-4 gap-y-16">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              viewBox="0.499 48.118 511.002 415.763"
              fill="white"
            >
              <path d="M510.003 279.642c-2.998-21.097-10.305-41.104-21.725-59.459-9.959-16.019-22.738-30.266-37.991-42.375l.041-.038L290.133 54.731a4.569 4.569 0 0 0-.361-.287c-5.326-4.08-12.537-6.325-20.297-6.325-7.77 0-15.263 2.25-21.088 6.338-6.263 4.375-9.843 10.18-10.093 16.359-.229 5.765 2.521 11.312 7.764 15.636 10.31 8.135 20.597 16.447 30.898 24.769 9.997 8.08 20.298 16.401 30.549 24.502l-196.213-.133c-22.439 0-37.718 10.537-40.861 28.178-1.381 7.727 1.056 16.223 6.504 22.73 5.78 6.898 14.172 10.703 23.629 10.703l14.958.01c20.664 0 41.419-.051 62.146-.101l19.766-.046-178.08 131.748-.707.517C8.7 336.953 2.188 347.642.783 358.653c-1.065 8.342.881 15.965 5.63 22.053 5.66 7.258 14.497 11.25 24.885 11.25 10.205 0 20.618-3.867 29.334-10.908l96.166-78.7c-.411 3.843-.91 9.481-.853 13.573.108 6.479 2.188 19.479 5.481 30.033 6.804 21.69 18.265 41.535 34.063 58.963 16.438 18.132 36.458 32.509 59.5 42.722 24.36 10.774 50.547 16.243 77.836 16.243h.253c27.376-.066 53.646-5.622 78.085-16.519 23.08-10.334 43.091-24.769 59.467-42.898 15.778-17.517 27.223-37.395 34.014-59.067a151.124 151.124 0 0 0 6.416-33.003c.839-10.83.478-21.85-1.057-32.753zM334.82 383.601c-60.141 0-108.911-43.627-108.911-97.447 0-53.814 48.771-97.441 108.911-97.441 60.142 0 108.907 43.627 108.907 97.441.002 53.82-48.765 97.447-108.907 97.447zm62.807-106.01c.887 16.063-5.529 30.978-16.796 42.019-11.461 11.248-27.815 18.313-46.103 18.313-18.28 0-34.637-7.065-46.102-18.313-11.262-11.041-17.665-25.954-16.783-42.006.864-15.603 8.475-29.376 19.939-39.128 11.273-9.589 26.41-15.439 42.945-15.439 16.537 0 31.67 5.852 42.944 15.439 11.47 9.752 19.083 23.515 19.956 39.115z" />
            </svg>
          </div>
          <div>
            <img
              className="object-contain w-full h-12 mx-auto"
              src="1904038.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-contain w-full h-14 mx-auto"
              src="fusione.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-contain w-full mx-auto h-14"
              src="prusa.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    {/* STL Viewer Section within Terminal Window */}
    <div
      className="lg:w-1/2 max-w-4xl mx-auto lg:mx-0 my-8 lg:my-0 p-1 rounded-t-md justify-center gradient-shadow "
      id="viewerContainer"
    >
      <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-xl shadow-purple-700/50">
        {/* Terminal Header */}
        <div className="flex items-center px-2 py-2 bg-gray-900 rounded-t-lg">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <span className="flex-grow text-center text-xs text-gray-400">
            Dragon's Emporium@macOS - 3D Viewer
          </span>
          <button
            id="fullscreen-toggle"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
          >
            <svg
              className="w-[15px] h-[15px] fill-white"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z"></path>
            </svg>
          </button>
        </div>
        {/* Viewer Content */}
        <div
          id="stl-viewer"
          className="p-4 text-xs text-gray-300 font-mono bg-black rounded-b-lg shadow-xl"
          style={{ height: 600 }}
        >
          {/* The 3D viewer will be injected here */}
        </div>
        {/* Viewer Controls */}
        <div
          id="view-controls"
          className="flex justify-center space-x-2 p-2 bg-black bg-opacity-50"
        >
          <button className="view-btn p-2" id="view-top" title="Top View">
            <i className="fa fa-arrow-up text-white" />
          </button>
          <button className="view-btn p-2" id="view-front" title="Front View">
            <i className="fa fa-arrow-down text-white" />
          </button>
          <button className="view-btn p-2" id="view-left" title="Left View">
            <i className="fa fa-arrow-left text-white" />
          </button>
          <button className="view-btn p-2" id="view-right" title="Right View">
            <i className="fa fa-arrow-right text-white" />
          </button>
          <button
            className="view-btn p-2 text-white"
            id="view-isometric"
            title="Isometric View"
          >
            ISO
          </button>
        </div>
      </div>
    </div>
  </div>
</>

        </>
    );
}