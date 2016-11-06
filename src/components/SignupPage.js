import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { styles } from '../styles/SignUpPageStyles';
import AuthForm from './AuthForm';

class SignUpPage extends Component {

  render() {
    const { imageStyle, containerStyle, textStyle } = styles;

    return (
      <View style={containerStyle}>
        <StatusBar hidden />
        <Image
          style={imageStyle}
          source={require('../images/ShuttleWithLogo.png')}
          resizeMode={'contain'}
        />
        <Text style={textStyle}>New here? Let's get you set up </Text>
        <AuthForm ButtonSubmitText="Create account" />
      </View>
    );
  }
}

export default SignUpPage;
