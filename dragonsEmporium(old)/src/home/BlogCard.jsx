// Card.js
const BlogCard = ({ image, title, description, date, readTime }) => {
    return (
      <div className="max-w-lg bg-black border hover:bg-slate-900 border-indigo-800 rounded-lg shadow-md overflow-hidden shadow-xl shadow-indigo-700/50">
        <div className="flex items-center px-2 py-2 bg-gray-900 rounded-t-lg shadow-xl shadow-purple-700/50">
          <span className="flex-grow text-center text-xs text-gray-400">Dragon's Emporium@macOS - Blog</span>
        </div>
        <a href="#">
          <div className="h-0 pb-[56.25%] relative">
            <img className="absolute w-full h-full object-cover" src={image} alt="" />
          </div>
        </a>
        <div className="p-5">
          <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-2 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 shadow-xl shadow-purple-700/50 border border-indigo-500" role="alert">
            <span className="text-xs bg-purple-500 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">{date}</span> 
          </a>
          
          <hr className="my-4 border-gray-200 dark:border-gray-600" />
          
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <hr className="my-4 border-gray-200 dark:border-gray-600" />
          <a href="#" className="inline-flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Read More
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  