import React from "react";

export default function Navbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand href="#home">StoryPlay</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="m-2 text-dark" to="/">
              Home
            </Link>
            <Link className="m-2 text-dark" to="/careers">
              Careers
            </Link>
            <Link className="m-2 text-dark" to="/explore">
              Marine Biologist
            </Link>
            <Link className="m-2 text-dark" to="/explore">
              Zoologist
            </Link>
            <Link className="m-2 text-dark" to="/explore">
              Archeologist
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
