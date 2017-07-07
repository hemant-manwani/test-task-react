import * as React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import Routes from './constant';
import App from './../containers/App';
import Home from './../modules/Home';

export default (
  <Route path={Routes.BASE_ROUTE} component={App}>
    <IndexRoute component={Home} />
    <Redirect from="/*" to={Routes.BASE_ROUTE} />
  </Route>
);
