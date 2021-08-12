import React from "react";
import { Slate, Editable } from "slate-react";
import styled from "styled-components";
const PaperStyle = styled.section`
  background-color: #fff;
  padding: 1.2rem;
  width: 90%;
  min-height: 700px;
  margin: 4rem auto 1rem auto;
  box-shadow: 0px 5px 11px 1px rgb(46 46 46 / 10%);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 16.5px;
  @media (max-width: 720px) {
    margin-top: 2rem;
  }
  @media (min-width: 576px) {
    max-width: 440px;
  }
  @media (min-width: 768px) {
    max-width: 540px;
  }
  @media (min-width: 992px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 960px;
  }
  @media (min-width: 1400px) {
    max-width: 1140px;
  }
`;

const Paper = ({ editor, value, onChange, renderLeaf }) => {
  return (
    <PaperStyle>
      <Slate editor={editor} value={value} onChange={onChange}>
        <Editable renderLeaf={renderLeaf} spellCheck></Editable>
      </Slate>
    </PaperStyle>
  );
};

export default Paper;
