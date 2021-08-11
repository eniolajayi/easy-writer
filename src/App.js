import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/Layout/NavBar";
import SyncingEditor from "./components/SyncingEditor";
import BottomBar from "./components/Layout/BottomBar";
import EditorProvider from "./context/EditorProvider";
import EditorContext from "./context/EditorContext";
import UrlNotFound from "./pages/UrlNotFound";

const App = () => {
  let documentId = uuidv4();
  return (
    <EditorProvider>
      <BrowserRouter>
        <NavBar id={documentId} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to={`/group/${documentId}`} />;
            }}
          ></Route>
          <Route path="/group/:id" component={SyncingEditor} />
          <Route component={UrlNotFound}></Route>
        </Switch>
        <BottomBar />
      </BrowserRouter>
      ;
    </EditorProvider>
  );
};
export default App;
