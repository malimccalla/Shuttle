import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignUpPage from './components/auth/SignUpPage';
import SignInPage from './components/auth/SignInPage';
import SideMenu from './components/SideMenu';
import ShowsList from './components/ShowsList';
import AddShowDetails from './components/AddShowDetails';
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
        content={<SideMenu />}
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
            <Scene
              initial
              key="signUpPage"
              component={SignUpPage}
              navigationBarStyle={{ ...styles.navBarStyle, opacity: 0 }}
            />
            <Scene
              key="SignInPage" component={SignInPage}
              navigationBarStyle={styles.navBarStyle}
              backButtonImage={require('./images/BackChevron.png')}
              leftButtonIconStyle={{ marginLeft: 10, marginBottom: 10 }}
            />
          </Scene>

          <Scene
            // initial
            key="main"
            navigationBarStyle={styles.navBarStyle}
            titleStyle={styles.navBarTitleStyle}
          >
            <Scene
              sceneStyle={{ paddingTop: 64 }}
              key="showsList"
              component={ShowsList}
              title="Shows"
              rightButtonImage={require('./images/addShowButton.png')}
              onRight={() => Actions.addShowDetails()}
              rightButtonIconStyle={styles.addShowButtonStyle}
              leftButtonImage={require('./images/menuButton.png')}
              onLeft={this.openDrawer.bind(this)}
              leftButtonIconStyle={styles.menuButtonStyle}
            />
            <Scene
              sceneStyle={{ paddingTop: 64 }}
              key="addShowDetails"
              component={AddShowDetails}
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
