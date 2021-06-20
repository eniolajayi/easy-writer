import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #fff;
  position: fixed;
  border: 1px dashed #000;
  bottom: 0;
  left: 0;
  z-index: 99;
  box-shadow: -1px -2px 2px 1px rgb(139 139 139 / 10%);
`;
function BottomBar() {
  return <Footer></Footer>;
}

export default BottomBar;
