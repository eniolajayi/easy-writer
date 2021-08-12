import { useCallback, useEffect, useRef, useState } from "react";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import { v4 as uuidv4 } from "uuid";
import EditorContext from "./EditorContext";
import { getInitialData } from "./init";

// const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

// const Leaf = ({ attributes, children, leaf }) => {
//   if (leaf.bold) {
//     children = <strong>{children}</strong>;
//   }
//   if (leaf.italic) {
//     children = <strong>{children}</strong>;
//   }
//   if (leaf.underline) {
//     children = <strong>{children}</strong>;
//   }
//   return <span {...attributes}>{children}</span>;
// };

// const format = "bold";
// const isMarkActive = (editor, format) => {
//   const marks = Editor.marks(editor);
//   return marks ? marks[format] === true : false;
// };
// const toggleMark = (editor, format) => {
//   const isActive = isMarkActive(editor, format);
//   if (isActive) {
//     Editor.removeMark(editor, format);
//   } else {
//     Editor.addMark(editor, format, true);
//   }
// };

const EditorProvider = (props) => {
  const [content, setContent] = useState([]);
  let documentId = useRef(`${uuidv4()}`);
  useEffect(() => {
    const initialContent = getInitialData(documentId);
    if (initialContent !== undefined) {
      setContent(initialContent);
    }
  }, []);
  const editorId = useRef(`${uuidv4()}`);
  const editorRef = useRef();
  if (!editorRef.current) editorRef.current = withReact(createEditor());
  const editor = editorRef.current;
  const editorRemote = useRef(false);

  return (
    <EditorContext.Provider
      value={{
        editor: editor,
        editorRef: editorRef,
        remote: editorRemote,
        id: editorId,
        getContent: () => {
          return content;
        },
        setContent: (value) => {
          setContent(value);
        },
      }}
    >
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
