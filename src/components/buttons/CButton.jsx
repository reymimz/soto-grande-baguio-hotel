import React from "react";
import "./cbutton.scss";

const CButton = ({ label, onClick }) => {
  return (
    <>
      <div className="book-wrapper">
        <div className="btn-book" onClick={onClick}>
          <span>{label}</span>
        </div>
      </div>
    </>
  );
};

export default CButton;
