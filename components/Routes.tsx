import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import Auth from './Auth';
import Registry from './Registry';
import ForgotPassword from './ForgotPassword';

export default () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" render={() => <Auth />} />
      <Route path="/registry" render={() => <Registry />} />
      <Route path="/forgot" render={() => <ForgotPassword />} />
    </Switch>
  </NativeRouter>
);
