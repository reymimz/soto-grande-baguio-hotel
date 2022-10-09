import React from "react";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import "./cfooter.scss";
import { Link } from "react-router-dom";

const CFooter = () => {
  return (
    <>
      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "80%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <Link to="/home" className="cf-logo">
                <img
                  alt="logo"
                  src="https://i.ibb.co/svn1CNJ/soto.jpg"
                  width="250px"
                />
              </Link>
            </CDBBox>
            <CDBBox
              display="flex"
              style={{ width: "50%" }}
              justifyContent="between"
            >
              <CDBBox className="cbox-wrapper">
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Contact Us
                </p>
                <CDBBox
                  flex="column"
                  display="flex"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <p className="h6 ml-6 cl" style={{ fontWeight: "400" }}>
                    Leonard Wood Rd, Baguio City, Philippines, 2600
                  </p>
                  <p className="h6 ml-6 cl" style={{ fontWeight: "400" }}>
                    0916 311 9388
                  </p>
                  <p className="h6 ml-6 cl" style={{ fontWeight: "400" }}>
                    staluciamarketingph@gmail.com
                  </p>
                </CDBBox>
              </CDBBox>
              <CDBBox className="m-wrapper">
                <p className="h5 mb-4 cr" style={{ fontWeight: "600" }}>
                  Menu
                </p>
                <CDBBox
                  display="flex"
                  flex="column"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <Link className="cf-link" to="/home">
                    <p className="h6 ml-6 cr" style={{ fontWeight: "400" }}>
                      Home
                    </p>
                  </Link>
                  <Link className="cf-link" to="/rooms">
                    <p className="h6 ml-6 cr" style={{ fontWeight: "400" }}>
                      Rooms
                    </p>
                  </Link>
                  <Link className="cf-link" to="/facilities">
                    <p className="h6 ml-6 cr" style={{ fontWeight: "400" }}>
                      Facilities
                    </p>
                  </Link>
                  <Link className="cf-link" to="/reviews">
                    <p className="h6 ml-6 cr" style={{ fontWeight: "400" }}>
                      Reviews
                    </p>
                  </Link>
                  <Link className="cf-link" to="/gallery">
                    <p className="h6 ml-6 cr" style={{ fontWeight: "400" }}>
                      Gallery
                    </p>
                  </Link>
                  <Link className="cf-link" to="/about">
                    <p className="h6 ml-6 cr" style={{ fontWeight: "400" }}>
                      About
                    </p>
                  </Link>
                </CDBBox>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox display="flex" className="mt-4" justifyContent="between">
            <small className="ml-2">
              &copy; Soto Grande Baguio, 2022. All rights reserved.
            </small>
            <CDBBox display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </>
  );
};

export default CFooter;
