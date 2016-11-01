import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { HoshiInput } from './common';
import { emailChanged, passwordChanged } from '../actions';

class SignupPage extends Component {
  handleEmailChange(text) {
    this.props.emailChanged(text);
  }

  handlePasswordChange(text) {
    this.props.passwordChanged(text);
  }

  handleCreateAccountTap() {
    const { email, password } = this.props;
    console.log('Button tapped');
    this.props.createUser({ email, password });
  }

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
          styleDisabled={{ color: 'red' }}
          onPress={this.handleCreateAccountTap.bind(this)}
        >
          Create account
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
    marginBottom: 35
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

const mapStateToProps = (state) => {
  const { email, password } = state.auth;
  return { email, password };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(SignupPage);
