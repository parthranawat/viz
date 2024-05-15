import React, { useState, useEffect, useContext } from "react";
import "./RotateOverlay.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../App";

const RotateOverlay = () => {
  const { mobileView, overlay, setOverlay } = useContext(AppContext);

  useEffect(() => {
    if (overlay) {
      // Remove the 'active' class after 2 seconds (same duration as the animation)
      const timeoutId = setTimeout(() => {
        setOverlay(false);
      }, 6000);

      // Clean up the timeout when component unmounts or when isActive changes
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [overlay]);

  useEffect(() => {
    if (mobileView) {
      setOverlay(true);
    }
  }, [mobileView]);

  return (
    <div>
      <div className={`overlay ${overlay ? "active" : ""}`}>
        <div className="mobile-icon">
          <FontAwesomeIcon icon={faMobileScreenButton} size="5x" />
        </div>
        <p className="rotate-message one">Turn on Auto-Rotation</p>
        <p className="rotate-message two">and roate your phone.</p>
      </div>
    </div>
  );
};

export default RotateOverlay;
