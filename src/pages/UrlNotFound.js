import React from "react";
import styled from "styled-components";
const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;
const UrlNotFound = () => {
  return (
    <SectionStyle>
      <h3>404 - Not Found</h3>
    </SectionStyle>
  );
};

export default UrlNotFound;
