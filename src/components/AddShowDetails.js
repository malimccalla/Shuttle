import React, { Component } from 'react';
import { Kaede } from 'react-native-textinput-effects';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Picker from './Picker';
import NextButton from './NextButton';
import {
  countryChanged,
  dateChanged,
  setStartTimeChanged,
  setEndTimeChanged,
  feeChanged,
  cityChanged
} from '../actions/AddShowDetailsActions';

class AddShowDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fefefe' }}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <Picker
              label="Date"
              mode="date"
              placeholder="DD-MM-YYYY"
              format="DD/MM/YYYY"
              onDateChange={(date) => this.props.dateChanged(date)}
              date={this.props.date}
            />
            <Kaede
              label={'City / Town'}
              style={{ height: 70 }}
              labelStyle={styles.kaedeLabel}
              inputStyle={styles.kaedeInput}
              returnKeyType='done'
              value={this.props.city}
              onChangeText={(text) => this.props.cityChanged(text)}
            />
            {/* TODO MAKE INPUTS INTO CONTROLLED REDUX COMPONENT */}
            <Kaede
              label={'Country'}
              style={{ height: 70 }}
              labelStyle={styles.kaedeLabel}
              inputStyle={styles.kaedeInput}
              returnKeyType='done'
              value={this.props.country}
              onChangeText={text => this.props.countryChanged(text)}
            />
            <Kaede
              label={'Fee'}
              style={{ height: 70 }}
              labelStyle={styles.kaedeLabel}
              inputStyle={styles.kaedeInput}
              keyboardType='numbers-and-punctuation'
              returnKeyType='done'
              value={this.props.fee}
              onChangeText={(text) => this.props.feeChanged(text)}
            />
            <Picker
              label="Set Start"
              mode="time"
              placeholder="00:00"
              format="HH:mm"
              onDateChange={(time) => this.props.setStartTimeChanged(time)}
              date={this.props.setStartTime}
            />
            <Picker
              label="Set End"
              mode="time"
              placeholder="00:00"
              format="HH:mm"
              onDateChange={(time) => this.props.setEndTimeChanged(time)}
              date={this.props.setEndTime}
            />
          </View>
        </ScrollView>
        <NextButton />
      </View>
    );
  }
}

const styles = {
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

const mapStateToProps = ({ showDetails }) => {
  const { country, date, setStartTime, setEndTime, fee, city } = showDetails;
  return {
    country, date, setStartTime, setEndTime, fee, city
  };
};

export default connect(mapStateToProps, {
  countryChanged,
  dateChanged,
  setEndTimeChanged,
  setStartTimeChanged,
  feeChanged,
  cityChanged
})(AddShowDetails);
