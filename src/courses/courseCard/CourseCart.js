import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./CourseCard.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const CourseCart = ({ course }) => {
  const { course_title, course_id, photo, instructor, price, rating, review } =
    course;
  return (
    <div className="course-cart">
      <div className="course-img">
        <img src={photo} alt="" />
      </div>
      <div className="card-info p-2">
        <h5 className=" text-ellipsis-2">{course_title}</h5>
        <p>
          <strong>Instructor:</strong> {instructor}
        </p>
        <div className="d-flex align-items-center">
          <p className="me-1 mb-1">{rating} </p>
          <p className="mb-1" style={{ color: "#FF9529" }}>
            <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
            <FaStar></FaStar> <FaStarHalfAlt></FaStarHalfAlt>
          </p>
          ({review})
        </div>
        <p className="mb-2 text-primary">
          <b>$ {price}</b>
        </p>
        <div className="course-btn ">
          <Link to={`/learning/course/${course_id}`}>
            <div className="btn btn-outline-success w-100 mb-2">
              Description
            </div>
          </Link>
          <Link to="/learning/courseShow">
            <button className="btn btn-primary w-100">Purchase</button>
          </Link>
        </div>
      </div>
    </div>
    // <Card>
    //   <div className="card-img">
    //     <img src={photo} alt="" />
    //   </div>
    //   <Card.Body className="p-2 mt-1 d-flex flex-column">
    //     <Card.Title className="text-ellipsis-2 mb-1">
    //       <Link className="text-decoration-none" to={`/course/${course_id}`}>
    //         {" "}
    //         {course_title}
    //       </Link>
    //     </Card.Title>
    //     <div>
    //       <p className="mb-0">Instructor: {instructor}</p>
    //       <div className="d-flex align-items-center">
    //         <p className="me-1 mb-1">{rating} </p>
    //         <p className="mb-1" style={{ color: "#FF9529" }}>
    //           <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
    //           <FaStar></FaStar> <FaStarHalfAlt></FaStarHalfAlt>
    //         </p>
    //         ({review})
    //       </div>
    //       <p className="mb-2">
    //         <b>$ {price}</b>
    //       </p>
    //       <div className="course-btn">
    //         <Link className="description" to={`/course/${course_id}`}>
    //           <Button variant="outline-success" size="md" className="w-100">
    //             Description
    //           </Button>
    //         </Link>
    //         <Link className="description" to="/courseShow">
    //           <Button variant="primary" size="md" className="w-100">
    //             Purchase
    //           </Button>
    //         </Link>
    //       </div>
    //     </div>
    //   </Card.Body>
    // </Card>
  );
};

export default CourseCart;
