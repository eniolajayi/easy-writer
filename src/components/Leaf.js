import React from "react";
import { Editor } from "slate";
import styled from "styled-components";

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};
export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const Underline = styled.span`
  text-decoration: underline;
`;

const Italize = styled.span`
  font-style: italic;
`;

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.italic) {
    children = <Italize>{children}</Italize>;
  }
  if (leaf.underline) {
    children = <Underline>{children}</Underline>;
  }
  return <span {...attributes}>{children}</span>;
};

export default Leaf;
