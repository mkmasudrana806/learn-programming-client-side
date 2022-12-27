import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((result) => result.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
        <h4 className="mb-4">Programming Languages</h4>
      {categories.map((c) => (
        <p key={c.language_id}>
          <Link to={`/category/${c.language_id}`}>{c.language_name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
