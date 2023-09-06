import React from "react";
import "./TopCategories.css";

import { BiCategoryAlt, BiCodeBlock } from "react-icons/bi";
import { TbSettingsCode } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";
import { BsDatabaseGear } from "react-icons/bs";

const TopCategories = () => {
  return (
    <div className="py-4">
      {/* categories page title  */}
      <div className="categories-title d-flex align-items-center">
        <BiCategoryAlt size={34}></BiCategoryAlt>{" "}
        <h2 className="ms-2 fw-bold">
          Top <span className="text-primary">Categories</span>
        </h2>
      </div>
      {/* all the categories containers  */}
      <div className="categories-container">
        <div className="category-card">
          <BiCodeBlock className="category-icon"></BiCodeBlock>
          <h4>Development</h4>
          <p>10K+ Courses</p>
        </div>
        <div className="category-card">
          <TbSettingsCode className="category-icon"></TbSettingsCode>
          <h4>Programming</h4>
          <p>1000+ Courses</p>
        </div>
        <div className="category-card">
          <GrShieldSecurity className="category-icon"></GrShieldSecurity>
          <h4>Cyber Security</h4>
          <p>500+ Courses</p>
        </div>
        <div className="category-card">
          <BsDatabaseGear className="category-icon"></BsDatabaseGear>
          <h4>Data Science</h4>
          <p>200+ Courses</p>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
