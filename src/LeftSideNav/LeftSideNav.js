import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LeftNav.css";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/exercise-categories")
      .then((result) => result.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="navShadow">
      <h4 className="mb-4 mt-2">Languages Exercises</h4>
      {categories.map((c) => (
        <p className="language" key={c.category_id}>
          <Link to={`/exercise-category/${c.category_id}`}>
            {c.category_name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
