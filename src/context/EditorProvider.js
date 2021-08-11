import { useRef, useState } from "react";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import { v4 as uuidv4 } from "uuid";
import EditorContext from "./EditorContext";

const EditorProvider = (props) => {
  const [content, setContent] = useState([]);
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
