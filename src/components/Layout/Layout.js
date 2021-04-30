import React from "react";
import { Container } from "react-bootstrap";
import AppNavBar from "./AppNavBar";

const Layout = (props) => {
  return (
    <Container>
      <AppNavBar />
      {props.children}
    </Container>
  );
};

export default Layout;
