import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SignupPage from './components/SignupPage';
import ShowsList from './components/ShowsList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="singupPage" component={SignupPage} hideNavBar />
      </Scene>

      <Scene key="main">
        <Scene key="showsList" component={ShowsList} title="Shows" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
