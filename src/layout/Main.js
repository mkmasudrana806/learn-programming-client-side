import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import FooterCom from "../Pages/FooterCom";
import "./Main.css";
import HomeLayout from "./HomeLayout";

const Main = () => {
  return (
    <div>
      {/* header section  */}
      <div className="mb-3">
        <Header></Header>
      </div>
      <Container>
        <HomeLayout></HomeLayout>
        {/* <Row>
          <Col lg="3" className="leftNav d-none d-lg-block">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Row> */}
      </Container>
      {/* footer section  */}
      <div className="footer">
        <Container>
          <FooterCom></FooterCom>
        </Container>
      </div>
    </div>
  );
};

export default Main;
