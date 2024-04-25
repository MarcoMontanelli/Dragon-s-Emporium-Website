

const CenterFeatures = ({ cards }) => {
    return (
      <>
  
        <div class="flex justify-center items-center  ">
  
          <div className=" px-4 mx-auto max-w-screen-xl text-center ">
            <span className="mb-2 rounded-full bg-purple-500 px-3 py-0.5 shadow-xl shadow-purple-700/50 text-xl font-semibold leading-5 text-white">
              Why choose us
            </span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Our features and services
            </h1>
  
  
            <div className="md:aspect-w-16 md:aspect-h-9 bg-gray-800 rounded-lg shadow-xl shadow-purple-700/50 overflow-hidden mb-4">
              <div className="terminal-window">
                <div className="flex items-center px-2 py-2 bg-gray-900 rounded-t-lg">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
  
                  </div>
                  <span className="flex-grow text-center text-xs text-gray-400">Dragon's Emporium@macOS - Features</span>
                </div>
                <div className="flex justify-center items-center h-full">
                  <div class="max-w-6xl mx-auto font-[sans-serif] text-[#333]">
  
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 p-4 mb-2 mt-2">
                      <div class="p-4 text-center text-white rounded-lg shadow-xl shadow-purple-700/50 border border-gray-600 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-12 mb-4 inline-block" viewBox="0 0 640 512" >
  
  
                          <path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z"></path>
  
                        </svg>
                        <h3 class="text-xl font-semibold mb-2">Customization</h3>
                        <p class="text-white text-sm">Tailor our product to suit your needs Tailor our product to suit your needs.</p>
                      </div>
                      <div class="p-4 text-center text-white rounded-lg shadow-xl shadow-purple-700/50 border border-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-12 mb-4 inline-block" viewBox="0 0 512 512">
                          <path
                            d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z">
                          </path>
                        </svg>
                        <h3 class="text-xl font-semibold mb-2">Commissions</h3>
                        <p class="text-white text-sm">Your data is protected by the latest security measures.</p>
                      </div>
                      <div class="p-4 text-center text-white rounded-lg shadow-xl shadow-purple-700/50 border border-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-12 mb-4 inline-block" viewBox="0 0 512 512">
  
                          <path
                            d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z">
                          </path>
                        </svg>
                        <h3 class="text-xl font-semibold mb-2">Custom designs</h3>
                        <p class="text-white text-sm">Tailor our product to suit your needs 24/7 customer support for all your inquiries.</p>
                      </div>
                      <div class="p-4 text-center text-white rounded-lg shadow-xl shadow-purple-700/50 border border-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-12 mb-4 inline-block" viewBox="0 0 512 512">
  
                          <path
                            d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z">
                          </path>
                        </svg>
                        <h3 class="text-xl font-semibold mb-2">Low prices</h3>
                        <p class="text-white text-sm">Experience blazing-fast performance with our product.</p>
                      </div>
                      <div class="p-4 text-center text-white rounded-lg shadow-xl shadow-purple-700/50 border border-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-12 mb-4 inline-block" viewBox="0 0 512 512">
                          <path
                            d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32l96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z" />
                        </svg>
                        <h3 class="text-xl font-semibold mb-2">High quality materials</h3>
                        <p class="text-white text-sm">Tailor our product to suit your needs Expand your reach with our global network.</p>
                      </div>
                      <div class="p-4 text-center text-white rounded-lg shadow-xl shadow-purple-700/50 border border-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-12 mb-4 inline-block" viewBox="0 0 512 512">
                          <path
                            d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z">
                          </path>
                        </svg>
                        <h3 class="text-xl font-semibold mb-2">Customer Support</h3>
                        <p class="text-white text-sm">We offer durable and high quality products,
                          excellent customer support and we are generally cheaper than our competition</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
  
  
  
          </div>
  
  
  
        </div>
        
              
      </>
    );
  };
  
  export default CenterFeatures;