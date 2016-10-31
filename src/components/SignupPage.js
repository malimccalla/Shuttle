import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { HoshiInput, Sae } from './common';
import Button from 'react-native-button';

class SignupPage extends Component {
  render() {
  const { containerStyle, textStyle, ImageStyle, buttonStyle } = styles;

    return (
      <View style={containerStyle}>
        <StatusBar hidden />
        <Image
          style={ImageStyle}
          source={require('../images/ShuttleWithLogo.png')}
          resizeMode={'contain'}
        />
        <Text style={textStyle}>New here? Let's get you set up </Text>
        <HoshiInput
          label={'Email Address'}
          keyboardType={'email-address'}
        />
        <HoshiInput
          label={'Password'} secureTextEntry
        />
        <Button
          style={buttonStyle}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._handlePress()}>
          Next
        </Button>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#12b4f9'
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '300',
    color: '#fff',
    marginLeft: 15,
    paddingBottom: 15,
    textAlign: 'center'
  },
  ImageStyle: {
    height: 130,
    width: 250,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 30
  },
  buttonStyle: {
    fontSize: 20,
    borderWidth: 1,
    paddingTop: 7,
    fontWeight: '500',
    paddingBottom: 7,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderColor: '#FFF',
    color: '#12b4f9',
    borderRadius: 2,
    marginTop: 5,
    overflow: 'hidden'
  }
};

export default SignupPage;
