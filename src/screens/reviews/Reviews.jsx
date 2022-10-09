import React, { useState } from "react";
import "./reviews.scss";
import { Container, Col, Row } from "react-bootstrap";
import Ccard from "../../components/cardreviews/Ccard";
import CNavbar from "../../components/navbar/CNavbar";
import RData from "../../contexts/ReviewsData";
import RMItems from "../../contexts/ReviesMenuItems";
import CFooter from "../../components/cfooter/CFooter";
import SmallHeader from "../../components/smallheader/SmallHeader";

const Reviews = () => {
  return (
    <>
      <CNavbar />
      <Container className="review">
        <Col>
          <Row sm md lg className="row">
            {RMItems.map((item, index) => {
              return (
                <Col key={index}>
                  <span className="active">{item.title}</span>
                  <b>{item.count}</b>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col>
             <SmallHeader title="Soto Grande Baguio - Feedbacks"/>
            </Col>
          </Row>
        </Col>
        <Row>
          {RData.map((item, index) => {
            return (
              <Col sm md lg={4}>
                <Ccard
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  star={item.star}
                  time={item.time}
                  content={item.content}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <CFooter />
    </>
  );
};

export default Reviews;
