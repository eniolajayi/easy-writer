import React from "react";
import styled from "styled-components";

const Alert = ({ className, children, type }) => {
  return <div className={className}>{children}</div>;
};

export default Alert;
