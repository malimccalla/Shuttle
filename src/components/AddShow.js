import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { Kaede } from 'react-native-textinput-effects';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

class AddShow extends Component {
  state = {}

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fefefe' }}>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <View style={styles.formSection}>

              <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>Date</Text>
              </View>

              <View style={styles.pickerCon}>
                <DatePicker
                  style={styles.datePicker}
                  date={this.state.date}
                  mode="date"
                  placeholder="DD-MM-YYYY"
                  format="DD/MM/YYYY"
                  minDate="01-01-2000"
                  maxDate="01-01-2100"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  onDateChange={date => { this.setState({ date }); }}
                />
                <View style={{ flex: 4, alignItems: 'center' }}>
                  <Image style={styles.calIcon} source={require('../images/calendar.png')} />
                </View>
              </View>
            </View>

            <Kaede
              label={'City / Town'}
              style={{ height: 70 }}
              labelStyle={styles.kaedeLabel}
              inputStyle={styles.kaedeInput}
              returnKeyType='next'
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
            />

            <View style={styles.formSection}>
              <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>Set Start</Text>
              </View>

              <View style={styles.pickerCon}>
                <DatePicker
                  style={styles.datePicker}
                  date={this.state.date}
                  mode="time"
                  placeholder="HH:MM"
                  format="HH:MM"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  onDateChange={date => { this.setState({ date }); }}
                />
                <View style={{ flex: 4, alignItems: 'center' }}>
                  <Image style={styles.calIcon} source={require('../images/calendar.png')} />
                </View>
              </View>
            </View>

            <View style={styles.formSection}>
              <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>Set End</Text>
              </View>

              <View style={styles.pickerCon}>
                <DatePicker
                  style={styles.datePicker}

                  mode="time"
                  placeholder="HH:MM"
                  format="HH:MM"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  onDateChange={date => { this.setState({ date }); }}
                />
                <View style={{ flex: 4, alignItems: 'center' }}>
                  <Image style={styles.calIcon} source={require('../images/calendar.png')} />
                </View>
              </View>
            </View>
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
  formSection: {
    backgroundColor: '#fff',
    marginBottom: 10,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  datePicker: {
    width: 100,
    height: 60,
    flex: 7,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  sectionTitle: {
    flex: 2
  },
  sectionText: {
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    color: '#4A4A4A',
    fontSize: 16,
    paddingLeft: 15
  },
  pickerCon: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  calIcon: {
    height: 30,
    width: 30
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
    fontWeight: '600',
    color: '#4A4A4A'
  }
};

export default AddShow;
