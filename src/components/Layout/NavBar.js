import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: auto;
  width: 100%;
  padding: 0.65rem 1.5rem;
  background-color: #000000;
  box-shadow: -1px 6px 4px 3px rgb(139 139 139 / 10%);
  .logo {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
  }
`;

const NavBar = () => {
  return (
    <Header>
      <div className="logo">EasyWriter.</div>
    </Header>
  );
};

export default NavBar;
