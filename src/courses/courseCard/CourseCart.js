import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./CourseCard.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CourseCart = ({ course }) => {
  console.log(course);
  const {
    course_title,
    photo,
    instructor,
    price,
    rating,
    description,
    review,
  } = course;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img style={{ height: "130px" }} variant="top" src={photo} />
          <Card.Body className="p-1 mt-1 d-flex flex-column">
            <Card.Title className="text-ellipsis-2 mb-1">
              {course_title}
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
              <div className="d-grid gap-2 align-self-end">
                <Button variant="outline-success" size="md">
                  Description
                </Button>
                <Button variant="primary" size="md">
                  Add To Cart
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CourseCart;
