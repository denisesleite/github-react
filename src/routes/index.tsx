import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Repository } from '../pages/Repository';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/repositories/:repository+" component={Repository} />
    {/* tudo que tem depois da barra é o parametro por isso o '+' */}
  </Switch>
);
