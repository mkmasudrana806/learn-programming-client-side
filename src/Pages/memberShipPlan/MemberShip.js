import React from "react";
import "./MemberShip.css";

const MemberShip = () => {
  return (
    <div className="py-4">
      <h2 className="text-center fw-bold py-3">
        Get a Membership or Traning a Team
      </h2>
      <div className=" membership">
        <div className=" annual p-3  border rounded">
          <div > 
            <h3>Annual Membership</h3>
            <p>
              Enjoy nlimited access on 5500+ Hand Pickd Quality Video Courses
            </p>
            <div className="btn btn-primary">Subscribe Now</div>
          </div>
          <img
            src="https://www.tutorialspoint.com/market/public/assets/newDesign/img/membership-large-small.jpg"
            alt=""
          />
        </div>
        <div className=" training p-3 border rounded">
          <div>
            <h3>Training for a Team</h3>
            <p>
              Afrodable solution to train a team and make them project ready{" "}
            </p>
            <div className="btn btn-warning">Request a Demo</div>
          </div>
          <img
            src="https://www.tutorialspoint.com/market/public/assets/newDesign/img/traning-for-a-team.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
