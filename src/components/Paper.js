import React from "react";
import { Slate, Editable } from "slate-react";
import styled from "styled-components";
const PaperStyle = styled.section`
  background-color: #fff;
  padding: 1.2rem;
  max-width: 60%;
  min-height: 700px;
  min-width: auto;
  margin: 2rem auto;
  box-shadow: 0px 5px 11px 1px rgb(46 46 46 / 10%);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 16.5px;
`;
const Paper = ({ editor, value, onChange }) => {
  return (
    <PaperStyle>
      <Slate editor={editor} value={value} onChange={onChange}>
        <Editable></Editable>
      </Slate>
    </PaperStyle>
  );
};

export default Paper;
