import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

export const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="signUp">
          <Scene key="signUpEmail" />
        </Scene>

        <Scene key="loging" />

      </Scene>
    </Router>
  );
};
