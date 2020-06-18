import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from '../Pages/Dashboard'
import Icons from "../Pages/Icons";
import Google from "../Pages/Google";
import Tables from "../Pages/Tables";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Drawer from '../Components/Drawer'

export default () => {
  return (
        <Switch>
          <Route path="/" exact > 
            <Drawer Child={Dashboard} />
            {/* <Dashboard /> */}
          </Route>
          <Route path="/icons" exact>
            <Drawer Child={Icons} />
            {/* <Icons /> */}
          </Route>
          <Route path="/google" exact>
            <Drawer Child={Google} />
            {/* <Google /> */}
          </Route>
          <Route path="/tables" exact>
            <Drawer Child={Tables} />
            {/* <Tables /> */}
          </Route>
          <Route path="/profile" exact>
            <Drawer Child={Profile} />
            {/* <Profile /> */}
          </Route>
          <Route path="/profile" exact>
            <Drawer Child={Profile} />
            {/* <Profile /> */}
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>

        </Switch>
  );
}

