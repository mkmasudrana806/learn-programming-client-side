import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDescription.css";
import { FaCheck, FaFilePdf, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";

const CourseDescription = () => {
  const course = useLoaderData();
  const {
    course_id,
    course_title,
    photo,
    descripttion,
    instructor,
    price,
    rating,
    review,
  } = course;
  console.log(course);
  return (
    <div className="course_description">
      <h4>Description of This Course</h4>
      <Button variant="primary"><FaFilePdf className="text-info"> </FaFilePdf> Print As PDF </Button>{' '}
      <div>
        <img className="mt-3" style={{ width: "340px", height: "250px" }} src={photo} alt="" />
        <h5 className="mt-4">{course_title}</h5>
        <p className="mb-0">
          <b>Instructor:</b> {instructor}
        </p>
        <div className="d-flex align-items-center">
          <b>
            <p className="me-1 mb-1">Ratings: </p>
          </b>
          <p className="me-1 mb-1">{rating} </p>
          <p className="mb-1" style={{ color: "#FF9529" }}>
            <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
            <FaStar></FaStar> <FaStarHalfAlt></FaStarHalfAlt>
          </p>
          ({review})
        </div>
        <p className="mb-2">
          <b>Price: </b>${price}
        </p>
        <div>
          <h5 className="mt-4"> What You will Learn: </h5>
          <div className="ms-3">
            {descripttion.outcomes.map((des) => (
              <p>
                <FaCheck className="text-success"></FaCheck> {des}
              </p>
            ))}
          </div>
          <h5 className="mt-4">This Course Includes: </h5>
          <div className="ms-3">
            {descripttion.includes.map((des) => (
              <p>
                <FaCheck className="text-success"></FaCheck> {des}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Button variant="primary"><Link to='/courses'>Back To Courses</Link></Button>{' '}
      <Button variant="primary"> <Link to='/courseShow'>Purchanse</Link> </Button>{' '}
    </div>
  );
};

export default CourseDescription;
