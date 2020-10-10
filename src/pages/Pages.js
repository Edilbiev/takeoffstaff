import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "../components/Auth";
import Contacts from "../components/Contacts";
import { useSelector } from "react-redux";

function Pages() {
  const isAdmin = useSelector((state) => state.application.isAdmin);

  return (
    <>
      <Route path="/">
        {!isAdmin ? <Auth /> : <Redirect to="/contacts" />}
      </Route>
      <Route path="/contacts">
        {isAdmin ? <Contacts /> : <Redirect to="/" />}
      </Route>
    </>
  );
}

export default Pages;
