import React from "react";
import { InfoList } from "../../contexts/InfoList";
import "./cabout.scss";

const CAbout = ({ className }) => {
  return (
    <>
      <div className={className}>
        <h4 className="h-why">Why Soto Grande Baguio?</h4>
        <ul className="h-info-row">
          {InfoList.length &&
            InfoList.map((item, i) => {
              return (
                <li>
                  <div className="h-row">
                    <h5>{item.title}</h5>
                    <h6>{item.des}</h6>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default CAbout;
