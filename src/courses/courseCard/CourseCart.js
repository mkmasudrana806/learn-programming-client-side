import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./CourseCard.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCart = ({ course }) => {
  const { course_title, course_id, photo, instructor, price, rating, review } =
    course;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img style={{ height: "130px" }} variant="top" src={photo} />
          <Card.Body className="p-1 mt-1 d-flex flex-column">
            <Card.Title className="text-ellipsis-2 mb-1">
              <Link
                className="text-decoration-none"
                to={`/course/${course_id}`}
              >
                {" "}
                {course_title}
              </Link>
            </Card.Title>
            <div>
              <p className="mb-0">
                <b>Instructor:</b> {instructor}
              </p>
              <div className="d-flex align-items-center">
                <p className="me-1 mb-1">{rating} </p>
                <p className="mb-1" style={{ color: "#FF9529" }}>
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
                  <FaStar></FaStar> <FaStarHalfAlt></FaStarHalfAlt>
                </p>
                ({review})
              </div>
              <p className="mb-2">
                <b>$ {price}</b>
              </p>
              <div className="d-grid gap-2 align-self-end w-100">
                <Link className="description" to={`/course/${course_id}`}>
                  <Button variant="outline-success" size="md" className="w-100">
                    Description
                  </Button>
                </Link>
                <Link className="description" to="/courseShow">
                  <Button variant="primary" size="md" className="w-100">
                    Purchase
                  </Button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CourseCart;
