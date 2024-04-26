// CardContainer.js
import BlogCard from './BlogCard.jsx';

const BlogCardContainer = ({ cards }) => {
    return (
        <div className=" px-4 text-center mt-4">
            
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Visit our blog
            </h1>
            <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-2 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 shadow-xl shadow-purple-700/50 border border-indigo-500" role="alert">
        <span class="text-xs bg-purple-500 rounded-full text-white px-4 py-1.5 mr-3">Stay updated!</span> <span class="text-sm font-medium">Guides, Updates and more..</span> 
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
    </a>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                We post free resources, patterns, tutorials and we also keep you updated on current projects.
            </p>
            <div className="max-w-8xl mx-auto md:mr-20 md:ml-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <BlogCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCardContainer;
