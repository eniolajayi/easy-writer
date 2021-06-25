import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../Icon";

const Footer = styled.footer`
  max-width: 1440px;
  width: 100%;
  height: auto;
  min-height: 50px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 12;
  box-shadow: -1px -2px 2px 1px rgb(139 139 139 / 10%);
  .controls {
    max-width: 500px;
    margin: 0 auto;
    height: auto;
    background: #fbfbfb;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    .btn {
      flex: 1 0 auto;
      width: 40px;
      height: 40px;
      border: 1px solid black;
      border-radius: 0.625rem;
      background-color: #fff;

      svg {
        width: 16px;
        height: 16px;
        fill: #444;
      }
    }
  }
`;

const Info = styled.div`
  width: 100%;
  display: ${(props) => (props.open ? "block" : "none")};
  border: 1px dashed #000;
  overflow: hidden;
  color: #fff;
  padding: 1.2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: #000;
  .icon {
    font-size: 0.625rem;
    text-transform: uppercase;
  }
  .content {
    span {
      text-decoration: underline #08a533;
      font-weight: 600;
      cursor: pointer;
      :hover {
        text-decoration-color: #08c533;
      }
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
  const [open, setOpen] = useState(true);
  return (
    <>
      <Footer>
        <div className="controls">
          <ActionButton className="btn">
            <Icon type="bold" />
          </ActionButton>
          <ActionButton className="btn">
            <Icon type="italic" />
          </ActionButton>
          <ActionButton className="btn">
            <Icon type="underline" />
          </ActionButton>
        </div>
      </Footer>
      <Info open={open}>
        <span className="icon">Note:</span>
        <p className="content">
          This app does not have a strong serve side or storage support yet. It
          was made for learning purposes only. It may or may not support these
          features in the future.
          <span
            onClick={() => {
              setOpen(false);
            }}
          >
            Ok, Close Alert
          </span>
        </p>
      </Info>
    </>
  );
}

export default BottomBar;
