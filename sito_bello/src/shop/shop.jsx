import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import GridArticle from "./GridArticle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <GridArticle />
    <Footer />
  </React.StrictMode>
);
