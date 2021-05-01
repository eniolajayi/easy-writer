import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SyncingEditor from "./components/SyncingEditor";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Route path="/about"></Route>
        <Route path="/users"></Route>
        <Route path="/"></Route>
      </BrowserRouter>
      <SyncingEditor />
    </Layout>
  );
};
export default App;
