import React from "react";
import CNavbar from "../../components/navbar/CNavbar";
import { Container, Row, Col } from "react-bootstrap";
import {
  AreaLocationData,
  AreaLocationInfo,
} from "../../contexts/AreaLocationData";
import "./location.scss";
import CFooter from "../../components/cfooter/CFooter";
import LineTitle from "../../components/linetitle/LineTitle";

const Location = () => {
  return (
    <>
      <CNavbar />
      <Container className="google-map-code" fluid>
        <Col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.2143238978374!2d120.60451601476531!3d16.413937934467665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a16d96de80eb%3A0xc315bf4508f1d638!2sSotogrande%20Baguio%20by%20Sta.%20Lucia!5e0!3m2!1sen!2sph!4v1664686951756!5m2!1sen!2sph"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
     
              <LineTitle label="Soto Grande Baguio Location | Baguio City, Philippines"/>
        

          <Row className="l-panel">
            <Col>
              <Col className="a-title">
                <span>{AreaLocationInfo.datas.title}</span>
              </Col>
              <Col className="a-p1">
                <span>{AreaLocationInfo.datas.p1}</span>
              </Col>
              <Col className="a-p2">
                <span>{AreaLocationInfo.datas.p2}</span>
              </Col>
            </Col>
            <Col className="area-main">
              {AreaLocationData.map((item, i) => {
                return (
                  <Row className="row-1" key={i}>
                    <Col className="col-1">{item.icon}</Col>
                    <Col className="col-2">
                      <span className="t1">{item.t1}</span>
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Container>
      <CFooter />
    </>
  );
};

export default Location;
