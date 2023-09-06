import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LeftNav.css";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://b610-lerning-platform-server-side-blond-one.vercel.app/exercise-categories"
    )
      .then((result) => result.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="navShadow">
      <h4 className="mb-4 bg-primary p-2 me-0 text-light">
        Languages Exercises
      </h4>
      {categories.map((c) => (
        <p className="language" key={c.category_id}>
          <Link to={`/learning/exercise-category/${c.category_id}`}>
            {c.category_name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
