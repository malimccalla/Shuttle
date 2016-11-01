import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SignupPage from './components/SignupPage';
import ShowsList from './components/ShowsList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="singupPage" component={SignupPage} hideNavBar />
      </Scene>

      <Scene
        key="main"
        initial
        navigationBarStyle={{ backgroundColor: '#12b4f9', borderBottomWidth: 0 }}
        titleStyle={{ color: '#fff', fontWeight: '500' }}
        rightButtonImage={require('./images/addShowButton.png')}
        onRight={() => console.log('right pressed')}
        rightButtonIconStyle={{ height: 25, width: 25 }}
        leftButtonImage={require('./images/menuButton.png')}
        onLeft={() => console.log('left pressed')}
        leftButtonIconStyle={{ height: 20, width: 25, marginTop: 4 }}

      >
        <Scene key="showsList" component={ShowsList} title="Shows" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
