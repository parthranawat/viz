import React, { useState, useContext } from "react";
import { Data, resourcesDropdownItems } from "../../Data/Data";
import { Link } from "react-router-dom";
import "./DropdownItems.css";
import { AppContext } from "../../App";

const ResourcesDropdown = () => {
  // *****************************
  // * Getting states from App
  // *****************************
  const { tableState, setTableState, plotId } = useContext(AppContext);

  // *****************************
  // * Component States
  // *****************************
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul className="plots-submenu" onClick={() => setDropdown(!dropdown)}>
        {resourcesDropdownItems.map((item) => {
          if (item.title === "Table") {
            return (
              <li key={item.id}>
                <Link
                  className="submenu-item"
                  onClick={() => {
                    setDropdown(false);
                    setTableState(!tableState);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          }
          if (item.title === "Env report") {
            return (
              <li key={item.id}>
                <Link
                  to={item.file}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="submenu-item"
                  onClick={() => {
                    setDropdown(false);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          }
          if (item.title === "Aerial Image") {
            return (
              <li key={item.id}>
                <Link
                  to={item.file}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="submenu-item"
                  onClick={() => {
                    setDropdown(false);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          }

          if (item.title === "Overhead Image") {
            return (
              <li key={item.id}>
                <Link
                  to={Data[plotId].overheadImage}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="submenu-item"
                  onClick={() => {
                    setDropdown(false);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default ResourcesDropdown;
