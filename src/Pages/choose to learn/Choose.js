import React from "react";
import "./Choose.css";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import cLogo from "../../../src/assets/c program.png";
import cPlusLogo from "../../../src/assets/icons8-c++-48.png";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <div className="my-5">
      {/* choose want to learn  */}
      <div className=" d-flex align-items-center">
        <FaBookOpenReader size={34}></FaBookOpenReader>{" "}
        <h2 className="ms-2 fw-bold">
          Choose want to <span className="text-primary"> Learn</span>
        </h2>
      </div>
      <div className="choose-container my-4">
        <Link
          to={`/learning/category/01`}
          className="choose-item d-flex align-items-center px-3 py-2"
        >
          <IoLogoJavascript className="me-3 language-icon"></IoLogoJavascript>{" "}
          <p className="m-0">JavaScript</p>
        </Link>
        <Link
          to={`/learning/category/02`}
          className="choose-item d-flex align-items-center  px-3 py-2"
        >
          <FaJava className="me-3 language-icon"></FaJava>{" "}
          <p className="m-0">Java</p>
        </Link>
        <Link
          to={`/learning/category/03`}
          className="choose-item d-flex align-items-center px-3 py-2"
        >
          <img
            style={{ width: "50px" }}
            className="me-3 language-icon"
            src={cLogo}
            alt=""
          />
          <p className="m-0">C Programming</p>
        </Link>
        <Link
          to={`/learning/category/04`}
          className="choose-item d-flex align-items-center px-3 py-2"
        >
          <img
            style={{ width: "50px" }}
            className="me-3 language-icon"
            src={cPlusLogo}
            alt=""
          />
          <p className="m-0">C++ Programming</p>
        </Link>
      </div>
    </div>
  );
};

export default Choose;
