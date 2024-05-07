import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import MasonryGallery from "./ImageGallery.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    
    <MasonryGallery />

    <Footer />
  </React.StrictMode>
);
