import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div>
      <h4 className="mb-5 bg-success p-2 text-light">
        There are {blogs.length} Blogs Avaiable For You!
      </h4>
      {/* map on blogs  */}
      {blogs.map((blog) => (
        <div key={blog.blog_id} className="topicspages">
          <h5>{blog.title}</h5>
          {/* slice string  */}
          {blog.details?.length > 200 ? (
            <p>
              {blog.details?.slice(0, 120) + " ..."}
              <Link to={`/blog/${blog.blog_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{blog.details}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blogs;
