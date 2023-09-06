import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const topic = useLoaderData();
  const { title, details, intro, photo_url } = topic;
  // console.log(topic);
  return (
    <div>
      <h4 className="mb-5 mt-3">{title}</h4>
      <p className="mt-3">{intro}</p>
      <img src={photo_url} alt="" style={{ width: "100%" }} />
      <p className="mt-3">{details}</p>
      <Button variant="primary" size="sm">
        <Link to="/learning"> Back To Home Page</Link>
      </Button>
    </div>
  );
};

export default DetailsPage;
