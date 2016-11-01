import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignupPage from './components/SignupPage';
import ShowsList from './components/ShowsList';
import AddShow from './components/AddShow';

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
        {/* TODO  fix padding top sceneStyle diff on auth and main*/}
        <Router>
          <Scene key="auth">
            <Scene key="singupPage" component={SignupPage} hideNavBar initial />
          </Scene>

          <Scene
            sceneStyle={{ paddingTop: 65 }}
            key="main"
            navigationBarStyle={{ backgroundColor: '#12b4f9', borderBottomWidth: 0 }}
            titleStyle={{ color: '#fff', fontWeight: '500' }}
          >
            <Scene
              key="showsList"
              component={ShowsList}
              title="Shows"
              rightButtonImage={require('./images/addShowButton.png')}
              onRight={() => Actions.addShow()}
              rightButtonIconStyle={{ height: 25, width: 25 }}
              leftButtonImage={require('./images/menuButton.png')}
              onLeft={this.openDrawer.bind(this)}
              leftButtonIconStyle={{ height: 20, width: 25, marginTop: 4 }}
            />
            <Scene
              key="addShow"
              component={AddShow}
              title="Add Show"
              backButtonImage={require('./images/BackChevron.png')}
            />
          </Scene>
        </Router>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 2 },
  main: { paddingLeft: 3 }
};

export default RouterComponent;
