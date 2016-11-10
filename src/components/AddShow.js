import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

class AddShow extends Component {
  state = { date: '2016-05-15' }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fefefe' }}>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <View style={styles.formSection}>
              <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>Date:</Text>
              </View>
              <DatePicker
                style={styles.datePicker}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2000"
                maxDate="01-01-2100"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    right: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => { this.setState({ date }); }}
              />
            </View>
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
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  formContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    margin: 20
  },
  formSection: {
    backgroundColor: '#fff',
    marginBottom: 10,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  datePicker: {
    width: 200,
    flex: 1
  },
  sectionTitle: {
    flex: 1
  },
  sectionText: {
    fontSize: 18,
    color: '#4A4A4A',
    fontFamily: 'Avenir Next',
    fontWeight: '500'
  }
};

export default AddShow;
