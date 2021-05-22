import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SyncingEditor from "./components/SyncingEditor";

const App = () => {
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={() => {
          return <Redirect to={`/group/${uuidv4()}`} />;
        }}
      ></Route>
      <Route path="/group/:id" component={SyncingEditor} />
    </BrowserRouter>
  );
};
export default App;
