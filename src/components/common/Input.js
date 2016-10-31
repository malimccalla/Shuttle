import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ onChangeText, value, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        autoCapitalize='none'
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#383A3F',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    backgroundColor: '#222'
  },
  containerStyle: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
