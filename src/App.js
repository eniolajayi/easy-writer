import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components
import { Slate, Editable, withReact } from "slate-react";

const App = () => {
  // We create state for what we pass into editor
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "a paragraph... " }],
    },
  ]);
  // then we create a slate Editor object that won't change across renders
  const editor = useMemo(() => withReact(createEditor()), []);
  // Render slate context
  // then add editable component inside context
  return (
    <Container>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      >
        <Editable></Editable>
      </Slate>
    </Container>
  );
};
export default App;
