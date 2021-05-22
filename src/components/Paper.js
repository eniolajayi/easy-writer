import React from "react";
import { Slate, Editable } from "slate-react";
import styled from "styled-components";
const PaperStyle = styled.section`
  background-color: #fff;
  padding: 1.2rem;
  max-width: 80%;
  min-width: auto;
  margin: 0 auto;
  box-shadow: 0px 5px 11px 1px rgb(46 46 46 / 10%);
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
