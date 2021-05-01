import React from "react";
import { Container } from "react-bootstrap";
import AppNavBar from "./AppNavBar";

const Layout = (props) => {
  return (
    <>
      <AppNavBar />
      <Container>
        <div className="page shadow mt-5 px-5 py-5 mx-auto">
          {props.children}
        </div>
      </Container>
    </>
  );
};

export default Layout;
