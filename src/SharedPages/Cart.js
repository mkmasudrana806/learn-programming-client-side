import React from "react";
import { Button, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ category }) => {
  const { photo_url, language_name, language_id, rating, total_view } =
    category;

  return (
    <Col lg="6">
      <div className="language_cart">
        <img src={photo_url} alt="" />
        <div className="languageInfo">
          <h4 className="text-ellipsis-1"> {language_name}</h4>
          <p>
            <b>Rating: </b> {rating}
          </p>
          <p>
            <b>View: </b> {total_view}K
          </p>

          <Button variant="primary">
            <Link to={`category/${language_id}`}>Start Toturials</Link>
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default Cart;
