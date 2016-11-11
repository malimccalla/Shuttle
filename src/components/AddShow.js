import React, { Component } from 'react';
import { Kaede } from 'react-native-textinput-effects';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Picker from './Picker';

class AddShow extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fefefe' }}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <Picker label="Date" mode="date" placeholder="DD-MM-YYYY" format="DD/MM/YYYY" />
            <Kaede
              label={'City / Town'}
              style={{ height: 70 }}
              labelStyle={styles.kaedeLabel}
              inputStyle={styles.kaedeInput}
              returnKeyType='done'
            />
            <Kaede
              label={'Country'}
              style={{ height: 70 }}
              labelStyle={styles.kaedeLabel}
              inputStyle={styles.kaedeInput}
              returnKeyType='done'
            />
            <Kaede
              label={'Fee'}
              style={{ height: 70 }}
              labelStyle={styles.kaedeLabel}
              inputStyle={styles.kaedeInput}
              keyboardType='numbers-and-punctuation'
              returnKeyType='done'
            />
            <Picker label="Set Start" mode="time" placeholder="00:00" format="HH:MM" />
            <Picker label="Set End" mode="time" placeholder="00:00" format="HH:MM" />
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
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  formContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    marginTop: 10
  },
  formInput: {
    border: 0,
    borderBottom: 1,
    height: 40,
    borderColor: '#55555a',
    width: 150
  },
  kaedeLabel: {
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    color: '#4A4A4A',
    fontSize: 16,
    backgroundColor: '#fff'
  },
  kaedeInput: {
    fontSize: 18,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#4A4A4A'
  }
};

export default AddShow;
