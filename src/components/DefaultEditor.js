import React from "react";
import { Slate, Editable } from "slate-react";
import styled from "styled-components";
const EditorContainer = styled.section`
  background-color: #fff;
  padding: 1.2rem;
  max-width: 80%;
  min-width: auto;
  margin: 0 auto;
`;
const DefaultEditor = ({ editor, value, onChange }) => {
  return (
    <EditorContainer>
      <Slate editor={editor} value={value} onChange={onChange}>
        <Editable></Editable>
      </Slate>
    </EditorContainer>
  );
};

export default DefaultEditor;
