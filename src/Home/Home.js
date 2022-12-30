import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Cart from "../SharedPages/Cart";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <h4 className="bg-success text-light mb-3 p-2">
        Programming Languages Tutorials
      </h4>

      <Row lg={2} md={1}>
        {categories.map((category) => (
          <Cart key={category.language_id} category={category}></Cart>
        ))}
      </Row>
    </div>
  );
};

export default Home;
