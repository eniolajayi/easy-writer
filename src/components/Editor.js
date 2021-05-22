import React from "react";
import { Slate, Editable } from "slate-react";
import styled from "styled-components";
const EditorContainer = styled.section`
  background-color: #fff;
  padding: 1.2rem;
  max-width: 80%;
  min-width: auto;
  margin: 0 auto;
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.1);
`;
const Editor = ({ editor, value, onChange }) => {
  return (
    <EditorContainer>
      <Slate editor={editor} value={value} onChange={onChange}>
        <Editable></Editable>
      </Slate>
    </EditorContainer>
  );
};

export default Editor;
