import React from "react";
import './LandingPage.css'; // Import custom CSS for additional styling

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-content">
        <div className="text-section">
          <h1>Measurable Growth On-Demand</h1>
          <p>
            A data-driven digital agency supporting marketing and sales teams
            with greater agility, transparency, and technical expertise.
          </p>
          <button className="cta-button">Welcome to Landing Page</button>
        </div>
        <div className="image-section">
          <img src="./images/ai-image.avif" alt="AI Illustration" className="main-image" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
