import React from "react";
import "./ccard.scss";

const Ccard = (props) => {
  const { name, star, time, content, icon } = props;
  return (
    <>
      <div className="c-card">
        <div className="c-top">
          <img src={icon} alt="Profile" className="c-pro" />
          <div className="c-name">
            <span className="name">{name}</span>
            <span className="star">{star} Star</span>
            <span className="time">{time}</span>
          </div>
        </div>
        <div className="c-bottom">
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default Ccard;
