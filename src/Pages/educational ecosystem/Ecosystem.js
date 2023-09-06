import React from "react";
import "./Ecosystem.css";
import { FaUserGraduate, FaUserInjured, FaLaptopCode } from "react-icons/fa";

import { LiaCertificateSolid } from "react-icons/lia";
const Ecosystem = () => {
  return (
    <div className="ecosystem">
      <h4 className="ecosystem-title">The Strength of Our Community</h4>
      <div className="ecosystem-card-containers">
        <div className="ecosystem-card">
          <FaLaptopCode color="yellow"></FaLaptopCode>
          <div>
            <h3>500+</h3>
            <p>Premium Courses</p>
          </div>
        </div>
        <div className="ecosystem-card">
          <FaUserInjured color="#a5fa36"></FaUserInjured>
          <div>
            <h3>100+</h3>
            <p>Expert Tutors</p>
          </div>
        </div>
        <div className="ecosystem-card">
          <FaUserGraduate color="#AA00FF"></FaUserGraduate>
          <div>
            <h3>1M+</h3>
            <p>Online Students</p>
          </div>
        </div>
        <div className="ecosystem-card">
          <LiaCertificateSolid color="#17A2B8"></LiaCertificateSolid>
          <div>
            <h3>10k+</h3>
            <p>Certificates Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
