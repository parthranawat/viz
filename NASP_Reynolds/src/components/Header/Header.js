import React from "react";
import "./Header.css";
import { useState, useContext } from "react";
import { navItems } from "../../Data/Data";
import { BrowserRouter as Router } from "react-router-dom";
import { projectName } from "../../Data/Data";
import ResourcesDropdown from "./ResourcesDropdown";
import { AppContext } from "../../App";

const Header = () => {
  // *****************************
  // * Getting states from App
  // *****************************
  const { plotId, mobileView, setMobileView } = useContext(AppContext);

  // *****************************
  // * Component States
  // *****************************

  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  // *****************************
  // * Functions
  // *****************************
  const handleMobileButtonClick = () => {
    if (mobileView === "off") {
      setMobileView("on");
    } else {
      setMobileView("off");
    }
  };

  return (
    <Router>
      <nav className="header">
        <div className="heading">
          USFS {projectName}: Plot {plotId}
        </div>

        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.id === 2) {
              return (
                <li
                  key={item.id}
                  className="nav-item"
                  onClick={() =>
                    setShowResourcesDropdown(!showResourcesDropdown)
                  }
                  onMouseLeave={() => setShowResourcesDropdown(false)}
                >
                  <button>{item.title}</button>
                  {showResourcesDropdown && <ResourcesDropdown />}
                </li>
              );
            }

            if (item.id === 3) {
              return (
                <li
                  key={item.id}
                  className="nav-item"
                  onClick={handleMobileButtonClick}
                >
                  <button>{item.title}</button>
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
