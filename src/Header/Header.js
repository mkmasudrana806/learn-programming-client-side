import React, { useContext, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";
import { FaUserAlt } from "react-icons/fa";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const [dark, setDark] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // toggle button for dark and light
  const ToggleBtn = (e) => {
    setDark(e);
  };

  // handle to log out
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  // here is the component reutrned part
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
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
              to="/learning/courses"
            >
              Courses
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeColor" : undefined
              }
              to="/learning/"
            >
              Tutorials
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
            <div className="d-flex mb-lg-0 mb-3">
              {" "}
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
              <div>
                {user?.uid ? (
                  <>
                    <Button onClick={handleLogOut} variant="outline-dark">
                      Log Out
                    </Button>
                    {user?.photoURL ? (
                      <Link to="/profile">
                        <Image
                          className="text-light ms-3"
                          style={{ width: "40px", height: "40px" }}
                          roundedCircle
                          src={user.photoURL}
                        ></Image>
                      </Link>
                    ) : (
                      <FaUserAlt className="text-light ms-3"></FaUserAlt>
                    )}
                  </>
                ) : (
                  <div className="mt-1">
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
                  </div>
                )}
              </div>
            </div>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
