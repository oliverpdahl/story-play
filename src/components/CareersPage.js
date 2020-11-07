import React from "react";
import lion from "../images/lion.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function CareersPage() {
  return (
    <div className="px-5">
      <Link to="/explore">
        <div className="py-3">
          <Button
            block
            style={{ height: "20vh", maxWidth: "650px" }}
            className="btn-info mx-auto"
          >
            <img src={lion} style={{ height: "18vh" }} alt="Marine Biologist" />
          </Button>
        </div>
      </Link>
      <Link to="/explore">
        <div className="py-3">
          <Button
            block
            style={{ height: "20vh", maxWidth: "650px" }}
            className="btn-info mx-auto"
          >
            <img src={lion} style={{ height: "18vh" }} alt="Marine Biologist" />
          </Button>
        </div>
      </Link>
      <Link to="/explore">
        <div className="py-3">
          <Button
            block
            style={{ height: "20vh", maxWidth: "650px" }}
            className="btn-info mx-auto"
          >
            <img src={lion} style={{ height: "18vh" }} alt="Marine Biologist" />
          </Button>
        </div>
      </Link>

      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
