import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { NavLinks } from "../../data/NavLinks";
import NavBarLink from "./NavBarLink";

const listLinks = () => {
  return NavLinks.links.map((link, index) => (
    <NavBarLink key={index} to={link.to} title={link.title} />
  ));
};

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand href="#home">StoryPlay</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">{listLinks()}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
