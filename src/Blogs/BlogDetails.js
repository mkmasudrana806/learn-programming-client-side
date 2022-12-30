import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import "./Blogs.css";

const BlogDetails = () => {
  const blog = useLoaderData();
  return (
    <div className="blogDetails">
      <h4>{blog[0].title}</h4>
      <p>{blog[0].details}</p>
      <Button variant="primary" size="sm">
        <Link to="/blogs"> Back To Blogs</Link>
      </Button>
    </div>
  );
};

export default BlogDetails;
