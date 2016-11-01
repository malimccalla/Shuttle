import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';

class ShowsList extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#e9e9e9', justifyContent: 'center' }}>
        <StatusBar />
        <Text stlye={styles.textStyle}>
          Oh dear, looks like you dont have any shows. Add a new one
        </Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 18,
    color: '#000'
  }
};

export default ShowsList;
