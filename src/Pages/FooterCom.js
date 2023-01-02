import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const FooterCom = () => {
  return (
    <Row className="mt-5 footer p-3">
      <Col lg="5">
        <div>
          <div className="d-flex align-items-center mb-2">
            <img
              style={{ width: "40px", height: "40px" }}
              src={`http://localhost:3000/static/media/logo.91c570e0373d4aa43ac5.png`}
              alt=""
            />
            <h5 className="ms-2 text-light">Learn Programming</h5>
          </div>
          <p className="text-primary">
            This is educational site. the main purpose of this site is to learn
            student with digitalized system learning with more tutorials,
            exercise and courses as well as blogs
          </p>
        </div>
      </Col>
      <Col lg="3">
        <h5 className="text-light">Learn Programming</h5>
        <div>
          <p>
            <Link to="/resources">Resources</Link>
          </p>
          <p>
            <Link to="/aboutus">About Us</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </Col>
      <Col lg="2">
        <h5 className="text-light">Help</h5>
        <div>
          <p>
            {" "}
            <Link to="/support">Support</Link>
          </p>
          <p>
            {" "}
            <Link to="/developer">Developer</Link>
          </p>
          <p>
            <Link to="/admin">Admin</Link>
          </p>
        </div>
      </Col>
      <Col lg="2">
        <h5 className="text-light">Trending</h5>
        <div>
          <p>
            <Link to="/python">Python</Link>
          </p>
          <p>
            <Link to="/mern">MERN Stack</Link>
          </p>
          <p>
            <Link to="/contact">Data Scienc</Link>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default FooterCom;
