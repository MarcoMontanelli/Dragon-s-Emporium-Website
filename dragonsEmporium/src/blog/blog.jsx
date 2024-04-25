import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import BlogArticleGrid from "./BlogArticleGrid.jsx";
import Header from './Header';
import FeaturedArticle from "./FeaturedArticle.jsx";
const articleData = {
    category: "Technology",
    date: "April 23, 2024",
    title: "Exploring the Future of AI Innovations",
    description: "Discover how artificial intelligence is shaping industries from healthcare to finance. Learn about the latest advancements and what they mean for the future.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [
        '../src/assets/img1.JPG',
  '../src/assets/img2.JPG',
  '../src/assets/img4.JPG', 
    ]
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <FeaturedArticle category={articleData.category}
                date={articleData.date}
                title={articleData.title}
                description={articleData.description}
                content={articleData.content}
                images={articleData.images} /> 
    <BlogArticleGrid />
    
    <Footer />
  </React.StrictMode>
);
