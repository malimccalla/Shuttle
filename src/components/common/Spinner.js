import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size} color={'#fff'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    justifyContent: 'center',
    marginTop: 16,
    alignItems: 'center'
  }
};

export { Spinner };
