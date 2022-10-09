import React from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <>
      <div className="dropdown">
        <span>ROOMS</span>
        <div className="dropdown-content">
          <div className="room-wrapper">
            <Link className="l-rooms" to="/rooms">
              <span>Rooms</span>
            </Link>
            <Link className="l-rooms" to="/facilities">
              <span>Facilities</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
