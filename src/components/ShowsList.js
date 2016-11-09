import React, { Component } from 'react';
import { Image, View, StatusBar, ScrollView, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ShowsCard from './ShowsCard';

class ShowsList extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <StatusBar barStyle='light-content' />
        <ScrollView
          style={styles.noShowsStyle}
          showsVerticalScrollIndicator={false}
        >
          {/* <Image
            style={styles.imageStyle}
            source={require('../images/logo_placeholder.png')}
            resizeMode={'contain'}
          />
          <Text style={styles.placeholderText}>
            Looks like you don't have any shows to display here yet.
            <Text style={{ color: '#02b875' }} onPress={() => Actions.addShow()}>
              {' Add a new one.'}
            </Text>
          </Text> */}
          <ShowsCard />
          <ShowsCard />
          <ShowsCard />
          <ShowsCard />
          <ShowsCard />
          <ShowsCard />
        </ScrollView>
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
    flex: 1,
    alignSelf: 'center'
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
