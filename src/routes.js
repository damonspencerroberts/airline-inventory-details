import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from "./container/main";
import Report from "./container/report";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/report">
        <Report />
      </Route>
    </Switch>
  );
}

export default Routes;
