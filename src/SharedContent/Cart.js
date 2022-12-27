import React from "react";
import { Button, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ category }) => {
  const { photo_url, language_name, language_id, rating, total_view } =
    category;

  return (
    <div className="language_cart">
      <img src={photo_url} alt="" />
      <div className="languageInfo">
        <h4> {language_name} Language</h4>
        <p>
          <b>Rating: </b> {rating}
        </p>
        <p>
          <b>View: </b> {total_view}K
        </p>
        
          <Button variant="success">
            <Link to={`/category/${language_id}`}>Start Toturials</Link>
          </Button>
      </div>
    </div>
  );
};

export default Cart;
