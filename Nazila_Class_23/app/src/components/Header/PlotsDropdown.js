import React, { useState, useContext } from "react";
import { videoDropdownItems } from "../../Data/Data";
import { Link } from "react-router-dom";
import "./DropdownItems.css";
import { AppContext } from "../../App";

const PlotsDropdown = () => {
  // *****************************
  // * Getting states from App
  // *****************************
  const { setSceneState } = useContext(AppContext);

  // *****************************
  // * Component States
  // *****************************
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul className="plots-submenu" onClick={() => setDropdown(!dropdown)}>
        {videoDropdownItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className="submenu-item"
                onClick={() => {
                  setDropdown(false);
                  setSceneState(item.id);
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PlotsDropdown;
