import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand>
          <Link className="site-name" to="/">
            Learn Programming
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navitems" id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link
              to="/courses"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              Courses
            </Link>
            <Link
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              Blogs
            </Link>
          </Nav>
          <Nav>
            <Link
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              Log In
            </Link>
            <Link
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
