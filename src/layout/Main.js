import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className="mb-3">
        <Header></Header>
      </div>
      <Container>
        <Row>
          <Col lg="3" className="leftNav">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
