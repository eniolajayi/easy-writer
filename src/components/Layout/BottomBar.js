import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: auto;
  min-height: 70px;
  background-color: #fff;
  position: fixed;
  border: 1px dashed #000;
  bottom: 0;
  left: 0;
  z-index: 99;
  box-shadow: -1px -2px 2px 1px rgb(139 139 139 / 10%);
  .info {
    padding: 0.9rem;
    .icon {
      font-size: 0.625rem;
      text-transform: uppercase;
    }
    .content {
    }
  }
`;
function BottomBar() {
  return (
    <Footer>
      <div className="info">
        <span className="icon">Note:</span>
        <p class="content">
          This app does not have a strong serve side or storage support yet. It
          was made for learning purposes only. It may or may not support these
          features in the future.
        </p>
      </div>
    </Footer>
  );
}

export default BottomBar;
