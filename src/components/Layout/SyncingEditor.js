import React, { useMemo, useRef, useState } from "react";
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
  const remote = useRef(null);
  // Render slate context
  // then add editable component inside context
  return (
    <Slate
      ref={editorRef}
      editor={editor}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Editable></Editable>
    </Slate>
  );
};

export default SyncingEditor;
