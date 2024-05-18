import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CommissionsPage from './Select.jsx';
import DarkModeToggle from './DarkT.jsx';
import OurStory from "./OurStory.jsx";
import StepperForm from "./StepperForm.jsx";

const Exp = () => {
  const [selectedCommission, setSelectedCommission] = useState(null);

  return (
    <div>
      <Navbar />
      <OurStory />
      <DarkModeToggle />
      <div>
        {!selectedCommission ? (
          <CommissionsPage onSelect={setSelectedCommission} />
        ) : (
          <StepperForm commission={selectedCommission} />
        )}
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
