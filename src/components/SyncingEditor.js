import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import io from "socket.io-client";

const getServerUrl = () => {
  if (process.env.NODE_ENV !== "development") {
    return process.env.REACT_APP_SERVER_URL;
  } else {
    return "http://localhost:4000";
  }
};
const socket = io(getServerUrl());

const SyncingEditor = ({ groupId }) => {
  const [value, setValue] = useState([]);
  const id = useRef(`${uuidv4()}`);
  const editorRef = useRef();
  if (!editorRef.current) editorRef.current = withReact(createEditor());
  const editor = editorRef.current;
  const remote = useRef(false);
  useEffect(() => {
    // TODO bug : editor is crashing whenever you try to enter a new line
    // start here :
    // if (!value) {
    //   editor.selection = {
    //     anchor: { path: [0, 0], offset: 0 },
    //     focus: { path: [0, 0], offset: 0 },
    //   };
    //   // Transforms.deselect(editor);
    // }
    fetch(`${getServerUrl()}/groups/${groupId}`)
      .then((x) => {
        x.json().then((data) => {
          setValue(data);
        });
      })
      .catch(() => {
        console.error("Could Not Fetch Initial Data");
      });
    const eventName = `new-remote-operations-${groupId}`;
    socket.on(eventName, (data) => {
      const { editorId, operations } = data;
      if (id.current !== editorId) {
        remote.current = true;
        operations.forEach((operation) => editor.apply(operation));
        remote.current = false;
      }
    });
    return () => {
      socket.off(eventName);
    };
  }, [editor, groupId]);

  const getFilteredOperations = (editorOperations) => {
    return editorOperations.filter(
      (operation) =>
        operation.type !== "set_selection" &&
        operation.type !== "set_value" &&
        (!operation.data || !operation.data.source)
    );
  };

  const addSourceToOperation = (editorOperations) => {
    return editorOperations.map((operation) => ({
      ...operation,
      data: { source: id.current },
    }));
  };

  const getProccessedOperations = () => {
    let operationCollection = editor.operations;
    let filteredOperations = getFilteredOperations(operationCollection);
    return addSourceToOperation(filteredOperations);
  };

  const onEditorChange = (newValue) => {
    setValue(newValue);
    if (getProccessedOperations().length && !remote.current) {
      socket.emit("new-operations", {
        editorId: id.current,
        operations: getProccessedOperations(),
        value: newValue,
        groupId,
      });
    }
  };

  return (
    <Slate editor={editor} value={value} onChange={onEditorChange}>
      <Editable></Editable>
    </Slate>
  );
};
export default SyncingEditor;
