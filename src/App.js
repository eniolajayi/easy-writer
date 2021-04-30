import React, { useEffect, useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components
import { Slate, Editable, withReact } from "slate-react";

const App = () => {
  // then we create a slate Editor object that won't change across renders
  const editor = useMemo(() => {
    withReact(createEditor());
  }, []);

  return <div>Sup</div>;
};
export default App;
