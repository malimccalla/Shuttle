import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

class AddShow extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fefefe' }}>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <View style={styles.formSection} />
            <View style={styles.formSection} />
            <View style={styles.formSection} />
            <View style={styles.formSection} />
            <View style={styles.formSection} />
            <View style={styles.formSection} />
          </View>
        </ScrollView>

        <TouchableOpacity>
          <View style={styles.nextButton}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

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
  scrollContainer: {
    backgroundColor: '#b4d256',
    flex: 1
  },
  formContainer: {
    backgroundColor: '#245261',
    flex: 1,
    margin: 20
  },
  formSection: {
    backgroundColor: '#fff',
    marginBottom: 10,
    height: 70
  }

};

export default AddShow;
