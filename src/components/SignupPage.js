import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { HoshiInput } from './common';

class SignupPage extends Component {
  render() {
  const { containerStyle, textStyle, ImageStyle, TextInput } = styles;

    return (
      <View style={containerStyle}>
        <StatusBar hidden />
        <Image
          style={ImageStyle}
          source={require('../images/ShuttleWithLogo.png')}
          resizeMode={'contain'}
        />
        <Text style={textStyle}> New here? Let's get you set up </Text>
        <HoshiInput label={'Email Address'} />
        <HoshiInput label={'Password'} secureTextEntry />
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
    color: '#fff',
    marginLeft: 12,
    paddingBottom: 20
  },
  ImageStyle: {
    height: 130,
    width: 250,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  TextInput: {
    marginBottom: 10,
  }
};

export default SignupPage;
