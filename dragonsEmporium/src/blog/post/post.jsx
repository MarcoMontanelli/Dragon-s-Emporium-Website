import React from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import BlogArticleGrid from "../BlogArticleGrid.jsx";
import Page from "./page.jsx";
import Header from '../Header';
import BlogCardContainer from "./BlogCardContainer.jsx";
;

const cardsData = [
  {
    image: '../src/assets/wireFrameDragon.png',
    title: 'Making patterns for cosplay',
    description: 'Join us on a quest to find the perfect way to create your patterns for your props',
    author: 'Jane Doe',
    authorImage: 'https://yourdomain.com/images/authors/jane.jpg',
    date: 'Apr 10, 2024',
    readTime: '5'
  },
  {
    image: '../src/assets/wireFrameDragon.png',
    title: 'sewing for beginners',
    description: 'We always need sewing to complete our projects, follow this tutorial series to learn the basics of sewing to bring your project to the next level ',
    author: 'John Smith',
    authorImage: 'https://yourdomain.com/images/authors/john.jpg',
    date: 'Mar 23, 2024',
    readTime: '7'
  },
  {
    image: '../src/assets/wireFrameDragon.png',
    title: 'Integrating leds in your costumes',
    description: 'Lighting up your props and costumes has never been easier, learn how you can improve the quality of your creations',
    author: 'Alice Johnson',
    authorImage: 'https://yourdomain.com/images/authors/alice.jpg',
    date: 'Mar 15, 2024',
    readTime: '6'
  }
 
];


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <div className="md:block hidden"><Header /></div>
    
    <Page />
    <BlogCardContainer cards={cardsData}/>
    <Footer />
  </React.StrictMode>
);
