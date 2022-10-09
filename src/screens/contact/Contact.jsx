import React from "react";
import "./contact.scss";
import Nationality from "../../components/option/Option";
import TextArea from "../../components/textarea/TextArea";
import CNavbar from "../../components/navbar/CNavbar";
import Icon from "../../images/con1.png";
import CFooter from "../../components/cfooter/CFooter";

const Contact = () => {
  return (
    <>
      <CNavbar />
      <div className="wrapper-con">
        <div className="main-slider">
          <span className="tar">CONTACT US</span>
          <div className="contact">
            <div className="left-content">
              <img src={Icon} alt="" className="con" />
              <p>
                <b>Address:</b> Leonard Wood Rd, Baguio City, Philippines, 2600
              </p>
              <p>
                <b className="view">Click here</b> to view our location
              </p>
              <p className="mob">
                <b>Mobile Number:</b> 0916 311 9388
              </p>
              <p>
                <b>Email: </b>staluciamarketingph@gmail.com
              </p>
              <p>
                <b>Facebook: </b> https://www.facebook.com/stalucialandinter/{" "}
              </p>
            </div>
            <div className="right-content">
              <div className="right-wrapper">
                <div className="title-wrapper">
                  <span>Title</span>
                  <select id="gender">
                    <option value="male">Mr</option>
                    <option value="female">Ms</option>
                    <option value="married">Mrs</option>
                  </select>
                </div>
                <div className="full">
                  <span> Full Name</span>
                  <input type="text" />
                </div>
              </div>
              <div className="email">
                <span> Email</span>
                <input type="text" />
              </div>
              <div className="contact1">
                <span>Contact Phone</span>
                <input type="text" placeholder=" +63 905125467" />
              </div>
              <Nationality />
              <TextArea />
            </div>
          </div>
        </div>
      </div>
      <CFooter />
    </>
  );
};

export default Contact;
