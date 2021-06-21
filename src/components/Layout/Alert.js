import React from "react";
import styled from "styled-components";

const AlertWrapper = styled.div`
  width: 100%;
  min-height: 45px;
  padding: 1.2rem;
  font-size: 1rem;
  background-color: #000;
  /* background-color: success ?  #000 : #000; */
  color: #fff;
`;

const Alert = ({ className, children, success }) => {
  return (
    <AlertWrapper success={success}>
      <div className={className}>{children}</div>
    </AlertWrapper>
  );
};

export default Alert;
