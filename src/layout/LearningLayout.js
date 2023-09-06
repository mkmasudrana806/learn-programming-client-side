import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { Outlet } from "react-router-dom";

const LearningLayout = () => {
  return (
    <Container>
      <Row>
        <Col lg="3" className="leftNav d-none d-lg-block">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="9">
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default LearningLayout;
