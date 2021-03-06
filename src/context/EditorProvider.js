import { useCallback, useEffect, useRef, useState } from "react";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import { v4 as uuidv4 } from "uuid";
import Leaf, { toggleMark } from "../components/Leaf";
import EditorContext from "./EditorContext";
import { getInitialData } from "./init";

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
  const render = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

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
        toggleFormat: (formatType) => {
          toggleMark(editor, formatType);
        },
        renderLeaf: render,
      }}
    >
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
