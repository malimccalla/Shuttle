import React, { Component } from 'react';
import { Image, View, StatusBar, ScrollView } from 'react-native';

class ShowsList extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.containerStyle}>
        <StatusBar barStyle='light-content' showHideTransition='slide' />
        <View style={styles.noShowsStyle}>
          {/* TODO take text out of image  */}
          <Image
            style={styles.imageStyle}
            source={require('../images/noShowsPlaceholder.png')}
            resizeMode={'contain'}
          />
        </View>
      </ScrollView>
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
