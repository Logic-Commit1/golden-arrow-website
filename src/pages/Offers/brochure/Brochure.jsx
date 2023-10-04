import React, { useRef } from "react";
import "./brochure.css";

const Brochure = () => {
  // Create a reference to the download link
  const downloadLinkRef = useRef(null);

  // Function to trigger the download link click
  const handleCardClick = () => {
    // Check if the download link reference exists
    if (downloadLinkRef.current) {
      // Programmatically click the download link
      downloadLinkRef.current.click();
    }
  };

  return (
    <div className="section" id="brochure-section">
      <div className="card" id="brochure-cta" onClick={handleCardClick}>
        {/* Use the ref attribute to set the reference */}
        <a href="/GCMES-COMPANY-PROFILE.pdf" download ref={downloadLinkRef}>
          <div className="brochure-content">
            <p className="brochure-title">Download our Brochure</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Brochure;
