import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import GroupEditor from "./components/GroupEditor";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => {
            return <Redirect to={`/group/${Date.now()}`} />;
          }}
        ></Route>
        <Route path="/group/:id" component={GroupEditor} />
      </BrowserRouter>
    </Layout>
  );
};
export default App;
