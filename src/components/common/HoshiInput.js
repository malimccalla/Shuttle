import React from 'react';
import { Hoshi } from 'react-native-textinput-effects';

const HoshiInput = ({ label }) => {
  return (
    <Hoshi
      style={{ marginBottom: 10 }}
      label={label}
      // this is used as active border color
      borderColor={'#fff'}
      // this is used to set backgroundColor of label mask.
      // please pass the backgroundColor of your TextInput container.
      backgroundColor={'#12b4f9'}
      autoCapitalize={'none'}
    />
  );
};

export { HoshiInput };
