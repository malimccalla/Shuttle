import React from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';

const ShowsCard = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={{ backgroundColor: '#fff', height: 60 }}>
        <View style={styles.dateContainer} />
      </View>
      <View style={{ backgroundColor: '#b11', height: 140 }} />
      <Button style={styles.buttonStyle}>Full Details</Button>
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 280,
    width: 365,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 3,
    padding: 5,
    marginTop: 5,
    justifyContent: 'space-between'
  },
  buttonStyle: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#0DEBB5',
    borderColor: '#0DEBB5',
    alignSelf: 'stretch',
    borderRadius: 2,
    alignItems: 'center',
    fontWeight: '600',
    color: '#fff',
    overflow: 'hidden'
  },
  dateContainer: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 2,
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: 5
  }
};

export default ShowsCard;
