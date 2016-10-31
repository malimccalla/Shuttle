import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

export const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="signup">
          <Scene key="signupEmail" />
        </Scene>

        <Scene key="loging" />

      </Scene>
    </Router>
  );
};
