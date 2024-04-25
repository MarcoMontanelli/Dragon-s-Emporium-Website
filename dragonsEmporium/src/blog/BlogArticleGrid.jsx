import React from 'react';
import BlogArticle from './BlogArticle';

const articles = [
    {
        id: 1,
        category: "Tech",
        date: "April 21, 2024",
        imageUrl: "https://via.placeholder.com/150/92c952",
        title: "Exploring the New Features in React 18",
        description: "A deep dive into the latest improvements and features added in React 18.",
        link: "/post-1"
    },
    {
        id: 2,
        category: "Lifestyle",
        date: "April 18, 2024",
        imageUrl: "https://via.placeholder.com/150/771796",
        title: "10 Tips for a Minimalist Living",
        description: "Simplify your life with these practical tips for minimalist living.",
        link: "/post-2"
    },
    {
        id: 3,
        category: "Finance",
        date: "April 15, 2024",
        imageUrl: "https://via.placeholder.com/150/24f355",
        title: "Investing for Beginners in 2024",
        description: "Everything you need to know to start investing in stocks in 2024.",
        link: "/post-3"
    },
    {
        id: 4,
        category: "Health",
        date: "April 12, 2024",
        imageUrl: "https://via.placeholder.com/150/d32776",
        title: "The Best Running Shoes of 2024",
        description: "We review the top running shoes of 2024 for every budget.",
        link: "/post-4"
    },
    {
        id: 5,
        category: "Technology",
        date: "April 10, 2024",
        imageUrl: "https://via.placeholder.com/150/f66b97",
        title: "How AI is Changing the Web",
        description: "Artificial Intelligence and its growing impact on web development.",
        link: "/post-5"
    },
    {
        id: 6,
        category: "Environment",
        date: "April 07, 2024",
        imageUrl: "https://via.placeholder.com/150/56a8c2",
        title: "Renewable Energy Sources to Watch in 2024",
        description: "A look at promising renewable energy sources for the future.",
        link: "/post-6"
    },
    {
        id: 7,
        category: "Entertainment",
        date: "April 05, 2024",
        imageUrl: "https://via.placeholder.com/150/b0f7cc",
        title: "Top 5 Netflix Series to Binge",
        description: "Here are the must-watch series on Netflix right now.",
        link: "/post-7"
    },
    {
        id: 8,
        category: "DIY",
        date: "March 30, 2024",
        imageUrl: "https://via.placeholder.com/150/54176f",
        title: "DIY Home Decor Ideas",
        description: "Creative and budget-friendly home decor ideas you can DIY.",
        link: "/post-8"
    },
    
];


const BlogArticleGrid = () => {
    return (
        <div>
            <h1 className=" text-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">related articles</h1>
            <div className=" text-white  ml-4 mr-4 mt-2 mb-4 ">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:pl-12 md:pr-12 ">
                {articles.map((article) => (
                    <BlogArticle key={article.id} {...article} />
                ))}
            </div>
        </div>
        </div>
        
    );
}

export default BlogArticleGrid;
