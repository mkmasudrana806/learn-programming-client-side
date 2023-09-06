import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";

const FeaturedCourses = () => {
  return (
    <div>
      {/* choose want to learn  */}
      <div className=" d-flex align-items-center">
        <FaBookOpenReader size={34}></FaBookOpenReader>{" "}
        <h2 className="ms-2 fw-bold">
          Choose want to <span className="text-primary"> Learn</span>
        </h2>
      </div>
    </div>
  );
};

export default FeaturedCourses;
