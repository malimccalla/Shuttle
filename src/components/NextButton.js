import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const NextButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.nextButton}>
        <Text style={styles.buttonText}>Next</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  nextButton: {
    backgroundColor: '#FD5F5F',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Avenir Next',
    fontSize: 20,
    paddingTop: 5,
    fontWeight: '500'
  },
};

export default NextButton;
