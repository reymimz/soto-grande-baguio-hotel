import React from "react";
import Booking from "../booking/Booking";
import CNavbar from "../../components/navbar/CNavbar";
import "./rooms.scss";
import CFooter from "../../components/cfooter/CFooter";
import LineHeader from "../../components/lineheader/LineHeader";

const Rooms = () => {
  return (
    <>
      <div className="rooms">
        <CNavbar />
        <div className="main-slider">
          <h4>SOTO GRANDE BAGUIO</h4>
        </div>
    <LineHeader title="Reservation"/>
        <Booking />
        <Booking />
        <Booking />
        <Booking />
        <CFooter />
      </div>
    </>
  );
};

export default Rooms;
