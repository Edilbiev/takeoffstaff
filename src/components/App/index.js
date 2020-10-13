import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "../Auth";
import Contacts from "../Contacts";
import { useSelector } from "react-redux";

function App() {
  const isAdmin = useSelector((state) => state.application.isAdmin);

  if (isAdmin) {
    return (
      <Switch>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Redirect to="contacts" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="auth" />
      </Switch>
    );
  }
}

export default App;
