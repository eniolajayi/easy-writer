import React, { useCallback } from "react";
import { Editor } from "slate";
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

const format = "bold";
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};
const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const Paper = ({ editor, value, onChange }) => {
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
      children = <strong>{children}</strong>;
    }
    if (leaf.italic) {
      children = <strong>{children}</strong>;
    }
    if (leaf.underline) {
      children = <strong>{children}</strong>;
    }
    return <span {...attributes}>{children}</span>;
  };

  return (
    <PaperStyle>
      <button
        onClick={() => {
          toggleMark(editor, format);
          console.log("clicked");
        }}
      >
        Bold
      </button>
      <Slate editor={editor} value={value} onChange={onChange}>
        <Editable renderLeaf={renderLeaf} spellCheck></Editable>
      </Slate>
    </PaperStyle>
  );
};

export default Paper;
