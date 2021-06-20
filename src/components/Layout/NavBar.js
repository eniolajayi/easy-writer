import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 1.5rem;
  background-color: #fff;
  box-shadow: -1px 2px 2px 1px rgb(139 139 139 / 10%);
  .logo {
    font-size: 1.2rem;
    font-weight: 700;
    color: #222;
    letter-spacing: -1px;
  }
  .header__info {
    text-align: center;
    font-size: 0.625rem;
    .title {
      font-weight: 700;
      text-transform: uppercase;
    }
    .id {
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      color: #212121;
    }
  }
  .header__btn {
    min-width: 90px;
    height: 35px;
    border-radius: 0.625rem;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    background-color: #000;
    color: #eee;
    box-shadow: 0 2px 3px 2px rgb(0 0 0 / 10%);
    :active {
      background-color: #333;
      box-shadow: none;
    }
  }
`;

const NavBar = ({ id }) => {
  return (
    <Header>
      <div className="logo">EasyWriter.</div>
      <div className="header__info">
        <div className="title">Document-ID</div>
        <div className="id">{id}</div>
      </div>
      <div className="header__btn">Copy Url</div>
    </Header>
  );
};

export default NavBar;
