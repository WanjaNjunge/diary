import React from "react"
import {Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Dashboard from './pages/Dashboard'

export const App = (props) => {
    return <>
    <Nav />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
    </>
};

