import React from "react";
import Home from "./pages/Home";


import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
const App = () => {
  const user=false;
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/signup">
        {user ? <Home/>:<SignUp />}
      </Route>

      <Route path="/login">
        {user ? <SignUp/>:<Login />}
      </Route>

      
    </Switch>
  );
};

export default App;
