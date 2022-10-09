import React from "react";
import { Row, Col } from "react-bootstrap";
import soto from "../../images/baguio.jpg";
import { NavLink, Link } from "react-router-dom";
import MenuItems from "../../contexts/MenuItems";
import CButton from "../../components/buttons/CButton";
import "./cnavbar.scss";

const CNavbar = () => {
  return (
    <>
      <Row className="nav-wrapper">
        <Col style={{ padding: 0 }}>
          <Link to="/home">
            <img src={soto} className="soto" alt="" />
          </Link>
        </Col>
        <Col style={{ padding: 0 }}>
          <Row className="nav">
            {MenuItems.map((item, i) => {
              return (
                <Col className="col-menu" key={i}>
                  <NavLink className="list" to={item.path}>
                    {item.title}
                  </NavLink>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col className="col-link">
          <Link className="link-contact" to="/contact">
            <CButton label="Contact Us" />
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default CNavbar;
