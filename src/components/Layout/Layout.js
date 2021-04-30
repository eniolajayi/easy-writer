import React from "react";
import { Container } from "react-bootstrap";
import AppNavBar from "./AppNavBar";

const Layout = (children) => {
  return (
    <Container>
      <AppNavBar />
      {children}
    </Container>
  );
};

export default Layout;
