import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

const INITITAL_STATE = {
  email: '',
  password: ''
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
    console.log('Email changed!');
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      console.log('Password changed!');
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
