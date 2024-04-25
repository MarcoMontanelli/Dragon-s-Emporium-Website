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
    {
        id: 9,
        category: "Business",
        date: "March 28, 2024",
        imageUrl: "https://via.placeholder.com/150/810b14",
        title: "Starting a Small Business in 2024",
        description: "What you need to know about starting a business in today's economic climate.",
        link: "/post-9"
    },
    {
        id: 10,
        category: "Culture",
        date: "March 25, 2024",
        imageUrl: "https://via.placeholder.com/150/1ee8a4",
        title: "Cultural Trends to Watch",
        description: "Upcoming cultural shifts that are defining 2024.",
        link: "/post-10"
    }
];


const BlogArticleGrid = () => {
    return (
        <div className=" text-white p-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:px-16">
                {articles.map((article) => (
                    <BlogArticle key={article.id} {...article} />
                ))}
            </div>
        </div>
    );
}

export default BlogArticleGrid;
