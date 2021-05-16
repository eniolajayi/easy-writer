import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import GroupEditor from "./components/GroupEditor";
import Layout from "./components/Layout/Layout";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => {
            return <Redirect to={`/group/${uuidv4()}`} />;
          }}
        ></Route>
        <Route path="/group/:id" component={GroupEditor} />
      </BrowserRouter>
    </Layout>
  );
};
export default App;
