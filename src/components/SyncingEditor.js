import React, { useEffect, useMemo, useRef, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";
// Import the Slate components
import { Slate, Editable, withReact } from "slate-react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const SyncingEditor = ({ groupId }) => {
  // We create state for what we pass into editor
  const [value, setValue] = useState([]);
  // create id to identify each editor
  // (we can know which editor is emitting an event)
  const id = useRef(`${Date.now()}ESYDCS`);
  // then we create a slate Editor object that won't change across renders
  const editor = useMemo(() => withReact(createEditor()), []);
  const remote = useRef(false);
  // Render slate context
  // then add editable component inside context
  useEffect(() => {
    socket.once("init-value", (value) => {
      setValue(value);
    });
    socket.on("new-remote-operations", (data) => {
      const { editorId, operations } = data;
      if (id.current !== editorId) {
        remote.current = true;
        operations.forEach((operation) => editor.apply(operation));
        remote.current = false;
      }
    });
    return () => {
      socket.off("new-remote-operations");
    };
  }, [editor]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        const ops = editor.operations;
        // filter through and remove unnecesary operations
        const filteredOps = ops.filter((o) => {
          return (
            o.type !== "set_selection" &&
            o.type !== "set_value" &&
            (!o.data || !o.data.source)
          );
        });
        // add the corresponding source (where the operation is coming from)
        const opsWithSource = filteredOps.map((o) => {
          return { ...o, data: { source: "one" } };
        });
        // Don't emit if the array is empty and the change
        // was local to the editor then we emit the change
        if (opsWithSource.length && !remote.current) {
          socket.emit("new-operations", {
            editorId: id.current,
            operations: opsWithSource,
            value: newValue,
          });
        }
      }}
    >
      <Editable></Editable>
    </Slate>
  );
};

/**
 * Basically whats happening with the sockets
 * is whenever a change is made in the editor
 * it is going to emit a change to the server
 *
 * then the server is going to listen for those
 * changes and then it will emit a remote change
 * which will then be broadcasted to all editor
 * instances
 */
export default SyncingEditor;
