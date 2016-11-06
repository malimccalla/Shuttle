import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import ShowsList from './components/ShowsList';
import AddShow from './components/AddShow';
import { styles } from './styles/NavigationStyles';

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
        styles={styles.drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
        <Router>
          <Scene key="auth">
            <Scene key="signUpPage" component={SignUpPage} hideNavBar />
            <Scene
              key="SignInPage" component={SignInPage}
              initial
              navigationBarStyle={styles.navBarStyle}
            />
          </Scene>

          <Scene
            // initial
            key="main"
            navigationBarStyle={styles.navBarStyle}
            titleStyle={styles.navBarTitleStyle}
          >
            <Scene
              sceneStyle={{ paddingTop: 65 }}
              key="showsList"
              component={ShowsList}
              title="Shows"
              rightButtonImage={require('./images/addShowButton.png')}
              onRight={() => Actions.addShow()}
              rightButtonIconStyle={styles.addShowButtonStyle}
              leftButtonImage={require('./images/menuButton.png')}
              onLeft={this.openDrawer.bind(this)}
              leftButtonIconStyle={styles.menuButtonStyle}
            />
            <Scene
              sceneStyle={{ paddingTop: 65 }}
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

export default RouterComponent;
