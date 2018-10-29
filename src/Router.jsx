import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'containers/Home';
import About from 'containers/About';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/sobre" component={About} />
  </Switch>
);
