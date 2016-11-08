import React, { Component } from 'react';
import { Image, View, StatusBar, ScrollView, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ShowsList extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.containerStyle}>
        <StatusBar barStyle='light-content' showHideTransition='slide' />
        <View style={styles.noShowsStyle}>
          <Image
            style={styles.imageStyle}
            source={require('../images/logo_placeholder.png')}
            resizeMode={'contain'}
          />
          <Text style={styles.placeholderText}>
            Looks like you don't have any shows to display here yet.
            <Text style={{ color: '#02b875' }} onPress={() => Actions.addShow()}>
              {' Add a new one.'}
            </Text>
          </Text>
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
    height: 100,
    alignSelf: 'center'
  },
  placeholderText: {
    color: '#A3A2A2',
    fontSize: 18,
    textAlign: 'center',
    padding: 15
  },
  placeholerActionText: {
    color: '#02b875'
  }
};

export default ShowsList;
