import React, { useEffect, useMemo, useRef, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";
import Mitt from "mitt";
// Import the Slate components
import { Slate, Editable, withReact } from "slate-react";
import { initialValue } from "../../slateInitialValue";

const emitter = new Mitt();

const SyncingEditor = () => {
  // We create state for what we pass into editor
  const [value, setValue] = useState(initialValue);
  // then we create a slate Editor object that won't change across renders
  const editor = useMemo(() => withReact(createEditor()), []);
  const editorRef = useRef(null);
  //   const remote = useRef(null);
  // Render slate context
  // then add editable component inside context
  useEffect(() => {
    emitter.on("*", () => {
      console.log("change happened");
    });
  }, []);

  return (
    <Slate
      ref={editorRef}
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
            (!o.data || !o.data.has("source"))
          );
        });
        // add the corresponding source (where the operation is coming from)
        const opsWithSource = filteredOps.map((o) => {
          return { ...o, data: { source: "one" } };
        });
        // Don't emit if the array is empty
        if (opsWithSource.length) {
          emitter.emit("something", opsWithSource);
        }
      }}
    >
      <Editable></Editable>
    </Slate>
  );
};

export default SyncingEditor;
