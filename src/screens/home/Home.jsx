import React, { useState } from "react";
import "./home.scss";
import CNavbar from "../../components/navbar/CNavbar";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import HCardRooms from "../../components/hcardrooms/HCardRooms";
import HCardList from "../../contexts/HCardList";
import CFooter from "../../components/cfooter/CFooter";
import CCardBooking from "../../components/ccardbooking/CCardBooking";
import { hParags } from "../../contexts/InfoList";
import LineTitle from "../../components/linetitle/LineTitle";

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <CNavbar />
      <div className="home">
        <div className="h-main">
          <div className="h-brow">
            <div className="h-left">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Start Date"
                  renderInput={(params) => <TextField {...params} />}
                  value={startDate}
                  onChange={(start) => {
                    setStartDate(start);
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="h-center">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  className="d-wrapper"
                  label="End Date"
                  renderInput={(params) => <TextField {...params} />}
                  value={endDate}
                  onChange={(end) => {
                    setEndDate(end);
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="h-right">
              <span className="d-book">BOOK NOW</span>
            </div>
          </div>
        </div>      
            <LineTitle label="Soto Grande Baguio Hotel | Baguio City, Philippines"/> 
        <div className="h-p-wrapper">
          <p className="h-p1">
            {hParags.p1}
          </p>
          <p className="h-p2">
         {hParags.p2}
          </p>
        </div>
        <div className="card-wrapper">
          {HCardList.map((item, i) => {
            return (
              <HCardRooms
                key={i}
                src={item.icon}
                title={item.title}
                des={item.des}
                cName="cf-title"
                cText="cf-des"
                cImage="cf-image"
                cCard="cf-card"
              />
            );
          })}
        </div>
      </div>
      <div className="ccd-wrapper">
        <CCardBooking />
      </div>
      
    </>
  );
};

export default Home;
