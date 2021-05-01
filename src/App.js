import React from "react";
import Layout from "./components/Layout/Layout";
import SyncingEditor from "./components/Layout/SyncingEditor";

const App = () => {
  return (
    <Layout>
      <SyncingEditor />
      {/* Test */}
      <SyncingEditor />
    </Layout>
  );
};
export default App;
