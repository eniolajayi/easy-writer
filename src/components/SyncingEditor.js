import React, { useEffect } from "react";
// import io from "socket.io-client";
import Paper from "./Paper";
// import { getServerUrl } from "../utils/server";
import EditorContext from "../context/EditorContext";

// const socket = io(getServerUrl());

const SyncingEditor = () => {
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
    // fetch(`${getServerUrl()}/groups/${groupId}`)
    //   .then((x) => {
    //     x.json().then((data) => {
    //       setValue(data);
    //     });
    //   })
    //   .catch(() => {
    //     console.error("Could Not Fetch Initial Data");
    //   });
    // const eventName = `new-remote-operations-${groupId}`;
    // socket.on(eventName, (data) => {
    //   const { incomingId, operations } = data;
    //   if (editorId.current !== incomingId) {
    //     remote.current = true;
    //     operations.forEach((operation) => editor.apply(operation));
    //     remote.current = false;
    //   }
    // });
    // return () => {
    //   socket.off(eventName);
    // };
  });

  // const getFilteredOperations = (editorOperations) => {
  //   return editorOperations.filter(
  //     (operation) =>
  //       operation.type !== "set_selection" &&
  //       operation.type !== "set_value" &&
  //       (!operation.data || !operation.data.source)
  //   );
  // };

  // const addSourceToOperation = (editorOperations) => {
  //   return editorOperations.map((operation) => ({
  //     ...operation,
  //     data: { source: editorId.current },
  //   }));
  // };

  // const getProccessedOperations = () => {
  //   let operationCollection = editor.operations;
  //   let filteredOperations = getFilteredOperations(operationCollection);
  //   return addSourceToOperation(filteredOperations);
  // };

  // const onEditorChange = (newValue) => {
  //   setValue(newValue);
  //   if (getProccessedOperations().length && !remote.current) {
  //     socket.emit("new-operations", {
  //       incomingId: editorId.current,
  //       operations: getProccessedOperations(),
  //       value: newValue,
  //       groupId,
  //     });
  //   }
  // };

  return (
    <EditorContext.Consumer>
      {(context) => (
        <Paper
          editor={context.editor}
          value={context.getContent()}
          onChange={context.setContent}
          renderLeaf={context.renderLeaf}
        ></Paper>
      )}
    </EditorContext.Consumer>
  );
};
export default SyncingEditor;
