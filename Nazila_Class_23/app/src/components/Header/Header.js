import React from "react";
import "./Header.css";
import { useState, useContext, useEffect } from "react";
import { videoDropdownItems, navItems } from "../../Data/Data";
import { BrowserRouter as Router } from "react-router-dom";
import PlotsDropdown from "./PlotsDropdown";

import { AppContext } from "../../App";
import { projectName } from "../../Data/Data";

const Header = () => {
  // *****************************
  // * Getting states from App
  // *****************************
  const { sceneState, mobileView, setMobileView, overlay, setOverlay } =
    useContext(AppContext);

  // *****************************
  // * Component States
  // *****************************
  const [showDirectionDropdown, setShowDirectionDropdown] = useState(false);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Disable mobile button for desktop devices
  useEffect(() => {
    const handleDeviceType = () => {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsButtonDisabled(!isMobile);
    };

    handleDeviceType(); // Call the function on component mount
  }, []);

  return (
    <Router>
      <nav className="header">
        <div className="heading">{videoDropdownItems[sceneState].title}</div>

        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.id === 1) {
              return (
                <li
                  key={item.id}
                  className="nav-item"
                  onClick={() =>
                    setShowDirectionDropdown(!showDirectionDropdown)
                  }
                  onMouseLeave={() => setShowDirectionDropdown(false)}
                >
                  <button>{item.title}</button>
                  {showDirectionDropdown && <PlotsDropdown />}
                </li>
              );
            }

            if (item.id === 3) {
              return (
                <li
                  key={item.id}
                  className="nav-item"
                  onClick={() => {
                    setMobileView(!mobileView);
                  }}
                >
                  <button disabled={isButtonDisabled}>{item.title}</button>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </Router>
  );
};

export default Header;
