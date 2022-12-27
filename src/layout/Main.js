import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <div className="mb-3">
        <Header></Header>
      </div>
      <Container>
        <Row>
          <Col lg="3">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="6">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
