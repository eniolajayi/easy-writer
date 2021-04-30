import React from "react";
import { Container } from "react-bootstrap";
import AppNavBar from "./AppNavBar";

const Layout = (props) => {
  return (
    <Container>
      <AppNavBar />
      <div className="wrapper p-4">{props.children}</div>
    </Container>
  );
};

export default Layout;
