// CardContainer.js
import BlogCard from './BlogCard.jsx';

const BlogCardContainer = ({ cards }) => {
    return (
        
        <div className=" px-4 mb-8 text-center ">
        <hr className="my-4 border-gray-200 dark:border-gray-600" />
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Related Articles
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            We have lots more content prepared for you.
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
