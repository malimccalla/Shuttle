import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AuthFooter extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}> {this.props.text}
          <Text style={{ fontWeight: '600' }}> {this.props.actionText}</Text>
        </Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    borderColor: '#fff',
    padding: 15,
    justifyContent: 'flex-end'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff'
  }
};

export default AuthFooter;
