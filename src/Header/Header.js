import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [dark, setDark] = useState(false);
  const ToggleBtn = (e) => {
    setDark(e);
  };
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
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeColor" : undefined
              }
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeColor" : undefined
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeColor" : undefined
              }
              to="/faq"
            >
              FAQ
            </NavLink>
          </Nav>
          <Nav>
            <span className="me-3">
              {dark ? (
                <Button onClick={() => ToggleBtn(false)} variant="dark">
                  Light
                </Button>
              ) : (
                <Button onClick={() => ToggleBtn(true)} variant="light">
                  Dark
                </Button>
              )}
            </span>
            <span className="mt-1">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "activeColor" : undefined
                }
              >
                <span>Log In</span>
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "activeColor" : undefined
                }
              >
                Register
              </NavLink>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
