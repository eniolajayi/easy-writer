import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/Layout/NavBar";
import SyncingEditor from "./components/SyncingEditor";
import Alert from "./components/Layout/Alert";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
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
