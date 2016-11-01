import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import SignupPage from './components/SignupPage';
import ShowsList from './components/ShowsList';

class RouterComponent extends Component {
  state = {
    drawerOpen: false
  }

  openDrawer() {
    this.setState({ drawerOpen: true });
  }

  render() {
    return (
      <Drawer
        type="overlay"
        content={<View />}
        open={this.state.drawerOpen}
        tapToClose
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
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
          onRight={() => console.log('right tapped')}
          rightButtonIconStyle={{ height: 25, width: 25 }}
          leftButtonImage={require('./images/menuButton.png')}
          onLeft={this.openDrawer.bind(this)}
          leftButtonIconStyle={{ height: 20, width: 25, marginTop: 4 }}
        >
          <Scene key="showsList" component={ShowsList} title="Shows" />
        </Scene>
      </Router>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 2 },
  main: { paddingLeft: 3, backgroundColor: '#000' },
};

export default RouterComponent;
