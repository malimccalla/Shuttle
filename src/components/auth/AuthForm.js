import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { HoshiInput, Spinner } from '../common';
import { styles } from '../../styles/SignUpPageStyles';
import {
  emailChanged,
  passwordChanged,
  createUser,
  signInUser
} from '../../actions';

class AuthForm extends Component {

  handleSubmitTap() {
    const { email, password, ButtonSubmitText } = this.props;
    if (ButtonSubmitText === 'Create account') {
      this.props.createUser({ email, password });
    } else {
      this.props.signInUser({ email, password });
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button
        style={styles.buttonStyle}
        onPress={this.handleSubmitTap.bind(this)}
        disabled={this.props.buttonDisabled}
        styleDisabled={{ ...styles.buttonStyle, opacity: 0.6 }}
      >
        {this.props.ButtonSubmitText}
      </Button>
    );
  }

  render() {
    return (
      <View>
        <HoshiInput
          label={'Email Address'}
          keyboardType={'email-address'}
          onChangeText={text => this.props.emailChanged(text)}
          value={this.props.email}
        />
        <HoshiInput
          label={'Password'} secureTextEntry
          onChangeText={text => this.props.passwordChanged(text)}
          value={this.props.password}
        />
        {this.renderButton()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password, loading } = state.auth;
  const buttonDisabled = !(email && password);

  return { email, password, loading, buttonDisabled };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, createUser, signInUser
})(AuthForm);
