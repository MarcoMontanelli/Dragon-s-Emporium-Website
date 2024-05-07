import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import GridArticle from "./GridArticle.jsx";
import ProductGrid from "./ProductGrid.jsx";
import Banner from "./Banner.jsx";
import ProductListHeader from "./Heading.jsx";
import whiteDragonImage from '../assets/whiteDragon.png'; 

const products = [
  {
    id: 1,
    images: [
      '../src/assets/img1.JPG',
      '../src/assets/img2.JPG',
      '../src/assets/img4.JPG'
    ],
    category: 'Electronics',
    date: '2024-05-01',
    title: 'Awesome Gadget',
    description: 'Latest tech gadget with advanced features, suitable for tech enthusiasts looking for performance and style.',
    rating: 5,
    sold: 150,
    remaining: 50,
    price: 299.99
  },
  {
    id: 2,
    images: [
      '../src/assets/img1.JPG',
      '../src/assets/img2.JPG',
      '../src/assets/img4.JPG'
    ],
    category: 'Home Appliances',
    date: '2024-04-15',
    title: 'Smart Blender',
    description: 'Smart kitchen blender with Wi-Fi capabilities and automatic cleaning system.',
    rating: 4,
    sold: 90,
    remaining: 110,
    price: 149.99
  },
  {
    id: 3,
    images: [
      '../src/assets/img1.JPG',
      '../src/assets/img2.JPG',
      '../src/assets/img4.JPG'
    ],
    category: 'Fitness',
    date: '2024-03-30',
    title: 'High-Tech Treadmill',
    description: 'Innovative treadmill featuring a touchscreen display and integrated health tracking.',
    rating: 4.5,
    sold: 75,
    remaining: 25,
    price: 799.99
  },
  {
    id: 4,
    images: [
      '../src/assets/img1.JPG',
      '../src/assets/img2.JPG',
      '../src/assets/img4.JPG'
    ],
    category: 'Fitness',
    date: '2024-03-30',
    title: 'High-Tech Treadmill',
    description: 'Innovative treadmill featuring a touchscreen display and integrated health tracking.',
    rating: 4.5,
    sold: 75,
    remaining: 25,
    price: 799.99
  },
  {
    id: 1,
    images: [
      '../src/assets/img1.JPG',
      '../src/assets/img2.JPG',
      '../src/assets/img4.JPG'
    ],
    category: 'Electronics',
    date: '2024-05-01',
    title: 'Awesome Gadget',
    description: 'Latest tech gadget with advanced features, suitable for tech enthusiasts looking for performance and style.',
    rating: 5,
    sold: 150,
    remaining: 50,
    price: 299.99,
    discount: 2
  },
  {
    id: 2,
    images: [
      '../src/assets/img1.JPG',
      '../src/assets/img2.JPG',
      '../src/assets/img4.JPG'
    ],
    category: 'Home Appliances',
    date: '2024-04-15',
    title: 'Smart Blender',
    description: 'Smart kitchen blender with Wi-Fi capabilities and automatic cleaning system.',
    rating: 4,
    sold: 90,
    remaining: 110,
    price: 149.99
  },
  {
    id: 3,
    images: [
      '../src/assets/img1.JPG',
      '../src/assets/img2.JPG',
      '../src/assets/img4.JPG'
    ],
    category: 'Fitness',
    date: '2024-03-30',
    title: 'High-Tech Treadmill',
    description: 'Innovative treadmill featuring a touchscreen display and integrated health tracking.',
    rating: 4.5,
    sold: 75,
    remaining: 25,
    price: 799.99
  },
  {
    id: 4,
    images: [
      '../src/assets/img1.JPG',
      '../src/assets/img2.JPG',
      '../src/assets/img4.JPG'
    ],
    category: 'Fitness',
    date: '2024-03-30',
    title: 'High-Tech Treadmill',
    description: 'Innovative treadmill featuring a touchscreen display and integrated health tracking.',
    rating: 4.5,
    sold: 75,
    remaining: 25,
    price: 799.99
  }
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <ProductListHeader />
    <Banner text="Summer Sale | 50% Off until 15/06/24 " />
    <GridArticle />
    <ProductGrid products={products} />
    <Footer />
  </React.StrictMode>
);
