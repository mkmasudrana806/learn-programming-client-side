import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import facebook from "../../src/assets/icons8-facebook-48.png";
import github from "../../src/assets/github.png";
import linkedin from "../../src/assets/linkedin.png";

const FooterCom = () => {
  return (
    <div>
      <Row className="mt-5 footer pt-5 pb-3 text-white">
        <Col lg="5">
          <div>
            <div className="d-flex align-items-center mb-2">
              <img
                style={{ width: "40px", height: "40px" }}
                src={`http://localhost:3000/static/media/logo.91c570e0373d4aa43ac5.png`}
                alt=""
              />
              <h4 className="ms-2 fw-bold">Learn Programming</h4>
            </div>
            <p>
              This is an Educational web application. The main purpose of this
              site is to learn student with digitalized system learning with
              more tutorials, exercise and courses as well as blogs
            </p>
            <div className="social-icons">
              <img src={github} alt="" />
              <img src={linkedin} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
        </Col>
        <Col lg="3">
          <h4 className="fw-bold">Learn Programming</h4>
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
          <h4 className="fw-bold">Help</h4>
          <div>
            <p>
              {" "}
              <Link to="/developer">Developer</Link>
            </p>
            <p>
              {" "}
              <Link to="/support">Support</Link>
            </p>

            <p>
              <Link to="/admin">Admin</Link>
            </p>
          </div>
        </Col>
        <Col lg="2">
          <h4 className="fw-bold">Trending</h4>
          <div>
            <p>
              <Link to="/contact">Data Science</Link>
            </p>
            <p>
              <Link to="/mern">MERN Stack</Link>
            </p>
            <p>
              <Link to="/python">Python</Link>
            </p>
            <p>
              <Link to="/contact">AWS</Link>
            </p>
          </div>
        </Col>
        <p className="text-center py-3">
          © Learn Programming, {new Date().getFullYear()}. All rights reserved.
        </p>
      </Row>
    </div>
  );
};

export default FooterCom;
