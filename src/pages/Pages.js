import React from 'react';
import { Switch, Route } from "react-router-dom";
import AuthPage from "./AuthPage";
import ContactsPage from "./ContactsPage";

function Pages() {
  return (
    <Switch>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Route path="/contacts">
        <ContactsPage />
      </Route>
    </Switch>
  );
}

export default Pages;