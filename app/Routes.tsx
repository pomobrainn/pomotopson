import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './containers/App';

import Pomodoro from './pages/pomodoro';

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route path={'/'} component={Pomodoro} />
      </Switch>
    </App>
  );
};

export default Routes;
