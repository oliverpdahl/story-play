import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


function CareerButton(props) {
  return (
    <Link to={props.to}>
      <div className="py-3">
        <Button
          block
          style={{ height: "20vh", maxWidth: "650px" }}
          className="btn-info mx-auto"
        >
          <img src={props.image} style={{ height: "18vh" }} alt={props.title} />
        </Button>
      </div>
    </Link>
  );
}

CareerButton.propTypes = {};

export default CareerButton;
