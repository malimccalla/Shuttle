import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from '../styles/SignUpPageStyles';
import AuthForm from './AuthForm';

class SignInPage extends Component {
  render() {
    const { containerStyle, textStyle } = styles;

    return (
      <View style={{ ...containerStyle, paddingTop: 80 }}>
        <StatusBar hidden />
        <Text style={textStyle}>Sign In</Text>
        <AuthForm ButtonSubmitText="Submit" />
        <View>
          <Text> Already got an account? Sign In</Text>
        </View>
      </View>
    );
  }
}

export default SignInPage;
