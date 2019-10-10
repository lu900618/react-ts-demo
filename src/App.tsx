import React from 'react';
import { Router, Switch, Route } from 'react-router';
import routeData from './router';
import { createHashHistory } from 'history';
import logo from './logo.svg';
import './App.css';

const history = createHashHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      hello react tsx
      {/* <Switch>
        {routeData.map(({ path, component, exact }: IRouterItem) => (
          <Route key={path} path={path} component={component} exact={exact} />
        ))}
        <Route component={NotFound} />
      </Switch> */}
    </Router>
  );
}

export default App;
