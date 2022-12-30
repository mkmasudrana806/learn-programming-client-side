import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Cart from "../SharedPages/Cart";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <h3 className="mt-2">
        Programming Languages Tutorials
      </h3>

      <Row lg={2} md={1}>
        {categories.map((category) => (
          <Cart key={category.language_id} category={category}></Cart>
        ))}
      </Row>
    </div>
  );
};

export default Home;
