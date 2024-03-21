import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Jumbo from "./Jumbo.jsx";
import Video from "./Video.jsx";
import { SparklesPreview } from "./Test_sparkle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Jumbo />
    <Video /> 
    <SparklesPreview />
    <Footer />
  </React.StrictMode>
);
