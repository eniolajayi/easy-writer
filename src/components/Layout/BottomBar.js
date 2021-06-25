import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

const Footer = styled.footer`
  max-width: 1440px;
  width: 100%;
  height: auto;
  min-height: 70px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  box-shadow: -1px -2px 2px 1px rgb(139 139 139 / 10%);
  .controls {
    height: 28px;
    background: #fbfbfb;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    .btn {
      flex: 1 0 auto;
      width: 40px;
      height: 40px;
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
  .info {
    border: 1px dashed #000;
    padding: 0.9rem;
    .icon {
      font-size: 0.625rem;
      text-transform: uppercase;
    }
    .content {
    }
  }
`;

const ActionButton = ({ children, onClick, ...props }) => {
  return (
    <button className={props.className} onClick={onClick}>
      {children}
    </button>
  );
};
function BottomBar() {
  return (
    <Footer>
      <div className="controls">
        <ActionButton className="btn">
          <Icon type="bold" />
        </ActionButton>
        <ActionButton className="btn">Italics</ActionButton>
        <ActionButton className="btn">Underline</ActionButton>
      </div>
      <div className="info">
        <span className="icon">Note:</span>
        <p className="content">
          This app does not have a strong serve side or storage support yet. It
          was made for learning purposes only. It may or may not support these
          features in the future.
        </p>
      </div>
    </Footer>
  );
}

export default BottomBar;
