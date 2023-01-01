import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCart from "./courseCard/CourseCart";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div>
        <h4 className="mb-4 text-light bg-success p-2">
          There Are Many Courses Available for you!
        </h4>
        {
          <Row sm={1} md={2} lg={3} className="gy-4">
            {courses.map((course) => (
              <CourseCart key={course.course_id} course={course}></CourseCart>
            ))}
          </Row>
        }
      </div>
    </div>
  );
};

export default Courses;
