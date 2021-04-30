import React, { useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components
import { Slate, Editable, withReact } from "slate-react";
import { initialValue } from "../../slateInitialValue";

const SyncingEditor = () => {
  // We create state for what we pass into editor
  const [value, setValue] = useState(initialValue);
  // then we create a slate Editor object that won't change across renders
  const editor = useMemo(() => withReact(createEditor()), []);
  // Render slate context
  // then add editable component inside context
  return (
    <Slate
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
