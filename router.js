import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

const RouterComponent = () => {
  <Router>
    <Scene key="auth">
      <Scene key="signup">
        <Scene key="signupEmail"></Scene>
      </Scene>  

      <Scene key="loging">

      </Scene>
    </Scene>
  </Router>
}
