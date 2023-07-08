//App.js
import React, { useEffect } from "react"
import {Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Dashboard from './pages/Dashboard'
import { useAppState } from "./AppState"

export const App = (props) => {
    const { state, dispatch } = useAppState();
    useEffect(() => {
      const auth = JSON.parse(window.localStorage.getItem("auth"));
      if (auth && auth.token) {
        dispatch({ type: "auth", payload: auth });
      }
    }, []);
  
    return (
      <>
        <Route path="/" component={Nav}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth/:form" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </>
    );
  };
