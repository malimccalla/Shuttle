import React from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';

const ShowsCard = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.topSection}>
        <View style={styles.titleStyle}>
          <Text style={styles.cityText}>London, UK</Text>
          <Text style={styles.locationText}>Corsica Studios</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateStyle}>16</Text>
          <Text style={styles.dayStyle}>WED</Text>
        </View>
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
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: '#0DEBB5',
    borderColor: '#0DEBB5',
    alignSelf: 'stretch',
    borderRadius: 2,
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    overflow: 'hidden',
    fontFamily: 'Avenir Next'
  },
  dateContainer: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 2,
    alignSelf: 'flex-end',
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  titleStyle: {
    justifyContent: 'space-between'
  },
  cityText: {
    fontWeight: '500',
    fontSize: 24,
    fontFamily: 'Avenir Next',
    color: '#4A4A4A'
  },
  locationText: {
    fontSize: 18,
    fontFamily: 'Avenir Next',
    color: '#4A4A4A'
  },
  topSection: {
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5
  },
  dateStyle: {
    fontSize: 24,
    color: '#D41414',
    fontFamily: 'Avenir Next',
    fontWeight: '500'
  },
  dayStyle: {
    color: '#4A4A4A',
    fontSize: 14,
    fontFamily: 'Avenir Next'
  }
};

export default ShowsCard;
