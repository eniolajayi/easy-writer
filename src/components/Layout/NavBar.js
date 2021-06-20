import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: auto;
  width: 100%;
  padding: 0.65rem 1.5rem;
  background-color: #fff;
  box-shadow: -1px 2px 2px 1px rgb(139 139 139 / 10%);
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 9999; */
  .logo {
    font-size: 1.2rem;
    font-weight: 700;
    color: #222;
    letter-spacing: -1px;
  }
`;

const NavBar = ({ id }) => {
  console.log(id);
  return (
    <Header>
      <div className="logo">EasyWriter.</div>
      <div className="header__info">
        DocumentID <span className="id">{id}</span>
      </div>
    </Header>
  );
};

export default NavBar;
