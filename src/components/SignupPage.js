import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { HoshiInput } from './common';
import { emailChanged, passwordChanged, createUser } from '../actions';
import { styles } from '../styles/SignupPageStyles';

const MINIMUM_PASSWORD_LENGTH = 6;

class SignupPage extends Component {

  state = {
    buttonDisabled: true
  }

  handleEmailChange(text) {
    this.props.emailChanged(text);
    this.checkButton();
  }

  handlePasswordChange(text) {
    this.props.passwordChanged(text);
    this.checkButton();
  }

  handleCreateAccountTap() {
    const { email, password } = this.props;
    this.props.createUser({ email, password });
  }

  checkButton() {
    const { email, password } = this.props;
    console.log(password.length);
    if (email && password.length >= MINIMUM_PASSWORD_LENGTH) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  }

  render() {
    const { imageStyle, containerStyle, textStyle, buttonStyle } = styles;

    return (
      <View style={containerStyle}>
        <StatusBar hidden />
        <Image
          style={imageStyle}
          source={require('../images/ShuttleWithLogo.png')}
          resizeMode={'contain'}
        />
        <Text style={textStyle}>New here? Let's get you set up </Text>
        <HoshiInput
          label={'Email Address'}
          keyboardType={'email-address'}
          onChangeText={this.handleEmailChange.bind(this)}
          value={this.props.email}
        />
        <HoshiInput
          label={'Password'} secureTextEntry
          onChangeText={this.handlePasswordChange.bind(this)}
          value={this.props.password}
        />
        <Button
          style={buttonStyle}
          styleDisabled={{ ...buttonStyle, opacity: 0.6 }}
          onPress={this.handleCreateAccountTap.bind(this)}
          disabled={this.state.buttonDisabled}
        >
          Create account
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password } = state.auth;
  return { email, password };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, createUser
})(SignupPage);
