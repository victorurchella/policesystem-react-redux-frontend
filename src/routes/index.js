import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import PoliceSystem from '../components/psystem/psystem';
import Adicionar from '../components/adicionar/adicionar';
import Editar from '../components/editar/editar';
import Visualizar from '../components/visu/visu';
import UserLogin from '../components/login/Login';

function PrivateRoute({ component: Component, ...rest }){

  return (
    <Route { ...rest } render={props => (
      sessionStorage.getItem('@policesystem/authed') ? (
        <Component { ...props } />
      ) : (
        <Redirect from='*' to={{ pathname: '/login' }} />
      )
    )}
    />
  )
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={UserLogin} />
      <PrivateRoute exact path="/home" component={PoliceSystem} />
      <PrivateRoute path="/adicionar" component={Adicionar} />
      <PrivateRoute path="/editar/:id" component={Editar} />
      <PrivateRoute path="/visualizar/:id" component={Visualizar} />
      <Redirect from='*' to='/login'/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
