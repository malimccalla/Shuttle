import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { HoshiInput, Spinner } from './common';
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
    if (this.props.isSecurePassword) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button
        style={styles.buttonStyle}
        onPress={this.handleCreateAccountTap.bind(this)}
        disabled={this.state.buttonDisabled}
        styleDisabled={{ ...styles.buttonStyle, opacity: 0.6 }}
      >
        Create account
      </Button>
    );
  }

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
        {this.renderButton()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password, loading } = state.auth;
  const isSecurePassword = (email && (password.length >= MINIMUM_PASSWORD_LENGTH));

  return { email, password, loading, isSecurePassword };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, createUser
})(SignupPage);
