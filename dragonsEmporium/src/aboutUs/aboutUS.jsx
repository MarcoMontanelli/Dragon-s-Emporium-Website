import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TestimonialSwiper from "./Testimonial.jsx";
import Subscribe from "./Newsletter.jsx";
import WhyUs from "./Features.jsx";
import FAQ from "./Faq.jsx";
import OurStory from "./OurStory.jsx";
import SocialMediaBar from "./Social.jsx";
import ServiceCard from "./Service.jsx";
import ServicesSection from "./AreaContainer.jsx";
const services = [
    { id: 1, image: 'https://via.placeholder.com/150', title: 'Web Development', description: 'Full stack web development services to build beautiful and scalable applications.' },
    { id: 2, image: 'https://via.placeholder.com/150', title: 'Mobile Apps', description: 'We create mobile applications that offer a high-quality user experience.' },
    { id: 3, image: 'https://via.placeholder.com/150', title: 'Digital Marketing', description: 'Comprehensive digital marketing strategies to boost your brand visibility and engagement.' },
    { id: 4, image: 'https://via.placeholder.com/150', title: 'Digital Marketing', description: 'Comprehensive digital marketing strategies to boost your brand visibility and engagement.' }
  ];
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar />
        <ServicesSection />
        {/*<div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
      {services.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>*/}
        <SocialMediaBar />
        <OurStory />
        
        <FAQ />
        
        {/*<WhyUs />*/}
        <TestimonialSwiper />
        
        <Subscribe />

        <Footer />
    </React.StrictMode>
);
