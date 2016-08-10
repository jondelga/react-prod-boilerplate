import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Main from './components/main/main';
import Increment from './components/routes/increment';
import Decrement from './components/routes/decrement';
import Reset from './components/routes/reset';
import NotFound from './components/routes/not-found';

export default (
  <Route path="/" component={Main}>
    <Route path="/sample" component={App}>
      <IndexRoute component={Increment} />
      <Route path="decrement" component={Decrement} />
      <Route path="reset" component={Reset} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);
