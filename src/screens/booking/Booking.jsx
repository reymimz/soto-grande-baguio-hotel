import React, { useState } from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Icon from "../../images/main1.jpg";
import "./booking.scss";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import BookNow from "../../components/buttons/CButton";
import { CTooltip } from "@coreui/react";
import ErrorToast from "../../components/error/ErrorToast";
import { db } from "../../contexts/firebase.config";
import { collection, addDoc } from "firebase/firestore";

const Booking = () => {
  const [rooms, setRooms] = useState(0);

  const onHandleChange = (e) => {
    e.preventDefault();
    setRooms(e.target.value);
  };

  const onSubmitBooking = async () => {
    await addDoc(collection(db, "SGBBooking"), {
      roomsInfo: [
        {
          rooms: { rooms },
          name: "Deluxe Double",
          adult: 2,
          amount: 2500,
          bedSize: "2 queen bedsRoom size: 47 m2",
          bedRoomSize: "47 m2",
          cancelDate: "October 12",
          dateBooking: "October 5, 2022",
        },
      ],
    });
    alert("Success");
  };

  return (
    <div className="booking">
      <div className="top">
        <img src={Icon} alt="" className="image-room" />
        <div className="wrapper">
          <span className="title">Deluxe Double</span>
          <span> View all amenities</span>
          <p>Bed size: 2 queen bedsRoom size: 47 m2</p>
          <div className="free-wrapper">
            <div className="refund">
              <span>No refund</span>
              <CTooltip
                content={<ErrorToast />}
                placement="right"
                className="ctool"
              >
                <ErrorOutlinedIcon className="error-icon" />
              </CTooltip>
            </div>
            <div className="break">
              <span>Breakfast included </span>
              <RestaurantOutlinedIcon className="res" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-center">
        <div className="center">
          <div className="lcenter">
            <span className="title">Deluxe Double - Room Only (OTA)</span>
            <span className="warn">Free cancellation before Oct 12, 2022 </span>
          </div>
          <div className="mcenter">
            <PeopleAltOutlinedIcon className="people" />
            <span>2 adults</span>
          </div>
          <div className="mmid">
            <span>₱ 4,500</span>
            <span>per night</span>
          </div>

          <div className="mright">
            <select id="rooms" value={rooms} onChange={onHandleChange}>
              <option value="0">0 rooms</option>
              <option value="1">1 rooms</option>
              <option value="2">2rooms </option>
              <option value="3">3 rooms</option>
              <option value="4">4 rooms</option>
              <option value="5">5 rooms</option>
              <option value="6">6rooms </option>
              <option value="7">7 rooms</option>
            </select>
            <CalendarMonthOutlinedIcon className="cal" />
          </div>
          <BookNow label="Book Now" onClick={onSubmitBooking} />
        </div>
      </div>
    </div>
  );
};

export default Booking;
