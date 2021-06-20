import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
`;
function BottomBar() {
  return <Footer></Footer>;
}

export default BottomBar;
