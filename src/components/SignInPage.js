import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from '../styles/SignUpPageStyles';
import AuthForm from './AuthForm';

class SignInPage extends Component {
  render() {
    const { containerStyle, textStyle } = styles;

    return (
      <View style={containerStyle}>
        <StatusBar hidden />
        <Text style={textStyle}>Welcome back</Text>
        <AuthForm ButtonSubmitText="Sign In" />
      </View>
    );
  }
}

export default SignInPage;
