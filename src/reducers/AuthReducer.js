import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH_ATTEMPT,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  SIGN_IN_USER_FAIL,
  SIGN_IN_USER_SUCCESS
} from '../actions/types';

const INITITAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null,
  buttonDisabled: false
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case AUTH_ATTEMPT:
      return { ...state, loading: true };
    case CREATE_USER_FAIL:
      return { ...state, loading: false, error: 'error' };
    case CREATE_USER_SUCCESS:
      return { ...state, ...INITITAL_STATE, user: action.payload };
    case SIGN_IN_USER_SUCCESS:
      return { ...state, ...INITITAL_STATE, user: action.payload };
    case SIGN_IN_USER_FAIL:
      return { ...state, loading: false, error: 'error' };
    default:
      return state;
  }
};
