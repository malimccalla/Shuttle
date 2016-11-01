import React, { Component } from 'react';
import { Image, View, StatusBar } from 'react-native';

class ShowsList extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <StatusBar barStyle='light-content' />
        <View style={styles.noShowsStyle}>
          <Image
            style={styles.imageStyle}
            source={require('../images/noShowsPlaceholder.png')}
            resizeMode={'contain'}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fefefe',
    justifyContent: 'center'
  },
  noShowsStyle: {
    alignSelf: 'center',
    paddingBottom: 65
  },
  imageStyle: {
    height: 170,
    alignSelf: 'center'
  }
};

export default ShowsList;
