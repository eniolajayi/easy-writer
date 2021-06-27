import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/Layout/NavBar";
import SyncingEditor from "./components/SyncingEditor";
import BottomBar from "./components/Layout/BottomBar";

const App = () => {
  let documentId = uuidv4();
  return (
    <BrowserRouter>
      <NavBar id={documentId} />
      <Route
        path="/"
        exact
        render={() => {
          return <Redirect to={`/group/${documentId}`} />;
        }}
      ></Route>
      <Route path="/group/:id" component={SyncingEditor} />
      <BottomBar />
    </BrowserRouter>
  );
};
export default App;
