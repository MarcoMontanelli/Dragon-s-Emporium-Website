import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import BlogArticleGrid from "./BlogArticleGrid.jsx";
import Header from './Header';
import FeaturedArticle from "./FeaturedArticle.jsx";
import Article from "./ArticleCard.jsx";
import Sidebar from "./Sidebar.jsx";
import BlogTitle from "./BlogHeader.jsx";
import CategorySection from "./Categories.jsx";
import CategoryHeader from "./CategoryHeader.jsx";
import Nav from "../components/Nav.jsx";
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
const articles = [
  {
    id: 1,
    category: "Nature",
    title: "Exploring the Secrets of the Ocean",
    date: "May 9, 2024",
    description: "Dive deep into the mysteries hidden beneath the ocean's surface. Discover new species and the importance of water ecosystems.",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Ocean+Secrets"
  },
  {
    id: 2,
    category: "Energy",
    title: "The Future of Renewable Energy",
    date: "April 22, 2024",
    description: "Explore how renewable energy sources are transforming our world and what the future may hold for sustainable power.",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Renewable+Energy"
  },
  {
    id: 3,
    category: "Technology",
    title: "Artificial Intelligence in Healthcare",
    date: "March 15, 2024",
    description: "AI is revolutionizing healthcare, from robotic surgeries to personalized medicine. Learn how technology is improving lives.",
    imageUrl: "https://via.placeholder.com/600x400.png?text=AI+Healthcare"
  },
  {
    id: 4,
    category: "Environment",
    title: "The Impact of Global Warming",
    date: "February 28, 2024",
    description: "Global warming continues to affect our planet. We discuss its impacts, the science behind it, and what it means for the future.",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Global+Warming"
  },
  {
    id: 5,
    category: "Urban Planning",
    title: "The Evolution of Urban Spaces",
    date: "January 12, 2024",
    description: "Cities are evolving faster than ever. Discover the latest trends in urban development and how they're shaping the way we live.",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Urban+Spaces"
  },
  {
    id: 6,
    category: "Space",
    title: "Exploring Space: The Next Frontier",
    date: "December 20, 2023",
    description: "Space exploration is leaping forward. What are the newest missions, and what do they tell us about the cosmos?",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Space+Exploration"
  }
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Navbar />
    <Header />
    <FeaturedArticle category={articleData.category}
                date={articleData.date}
                title={articleData.title}
                description={articleData.description}
                content={articleData.content}
                images={articleData.images} /> 
   {/* <BlogArticleGrid />*/}
   <CategoryHeader />
    <CategorySection />
    <BlogTitle />
    <div className="min-h-screen bg-black p-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3">
          {articles.map(article => (
            <Article key={article.id} {...article} />
          ))}
        </div>
        <div className="hidden lg:block lg:col-span-1 border-l border-gray-700 pl-4 pt-10">
          <Sidebar />
        </div>
      </div>
    </div>
    
    <Footer />
  </React.StrictMode>
);
