import React from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';

const ShowsCard = () => {
  return (
    <View style={styles.containerStyle}>
      <View />
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
    alignSelf: 'center',
    borderRadius: 2,
    alignItems: 'center',
    fontWeight: '600',
    color: '#fff',
    overflow: 'hidden'
  }
};

export default ShowsCard;
