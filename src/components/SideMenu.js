import React, { Component } from 'react';
import { View, Image } from 'react-native';

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Image
            style={styles.logoStyle}
            source={require('../images/shuttle_blue.png')}
            resizeMode='contain'
          />
        </View>
        <View style={styles.menuItems} />
        <View style={styles.breakSection} />
        <View style={styles.settingsItems}>
          <Image
            source={require('../images/logo_red_footer.png')}
            resizeMode='contain'
            style={styles.footerImage}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  headerSection: {
    backgroundColor: '#fff',
    flex: 3,
    justifyContent: 'center'
  },
  menuItems: {
    backgroundColor: '#26b5f6',
    flex: 16
  },
  breakSection: {
    backgroundColor: '#fff',
    flex: 1
  },
  settingsItems: {
    backgroundColor: '#FD5F5F',
    flex: 4,
    justifyContent: 'center'
  },
  logoStyle: {
    width: 100,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  footerImage: {
    alignSelf: 'center',
  }
};

export default SideMenu;
