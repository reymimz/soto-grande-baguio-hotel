import React from "react";
import "./ccardbooking.scss";
import LineHeader from "../lineheader/LineHeader";

const CCardBooking = () => {
  return (
    <>
    <LineHeader title="Room Type"/>
      <div className="cb-wrapper">
        <div className="c-booking">
          <div className="c-content">
            <h4 className="c-title">Studio</h4>
            <p className="c-price">
              price from <b>P 2,700.00</b> per night
            </p>
            <div className="cb-btn">
              <span className="cb-label">Book Now</span>
            </div>
          </div>
        </div>
        <div className="c-booking2">
          <div className="c-content2">
            <h4 className="c-title2">Deluxe</h4>
            <p className="c-price2">
              price from <b>P 4,500.00</b> per night
            </p>
            <div className="cb-btn2">
              <span className="cb-label2">Book Now</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CCardBooking;
