import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Text, Image } from 'react-native';

class Picker extends Component {
  state = {};

  render() {
    return (
      <View style={styles.formSection}>

        <View style={styles.sectionTitle}>
          <Text style={styles.sectionText}>Date</Text>
        </View>

        <View style={styles.pickerCon}>
          <DatePicker
            style={styles.datePicker}
            date={this.state[this.props.mode]}
            mode={this.props.mode}
            placeholder={this.props.placeholder}
            format={this.props.format}
            // minDate="01-01-2000"
            // maxDate="01-01-2100"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={val => { this.setState({ [this.props.mode]: val }); }}
          />
          <View style={{ flex: 4, alignItems: 'center' }}>
            <Image style={styles.calIcon} source={require('../images/calendar.png')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  formSection: {
    backgroundColor: '#fff',
    marginBottom: 10,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionTitle: {
    flex: 2
  },
  datePicker: {
    width: 100,
    height: 60,
    flex: 7,
    backgroundColor: '#fff',
    justifyContent: 'center'
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
  sectionText: {
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    color: '#4A4A4A',
    fontSize: 16,
    paddingLeft: 15
  },
};

export default Picker;
