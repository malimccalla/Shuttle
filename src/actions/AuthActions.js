import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CREATE_USER_ATTEMPT,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const createUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER_ATTEMPT });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => createUserSuccess(dispatch, user))
      .catch((error) => createUserFail(dispatch, error));
  };
};

// ------------- HELPERS ---------------

const createUserSuccess = (dispatch, user) => {
  firebase.database().ref(`users/${user.uid}`)
  .set({ email: user.email })
  .then(() => {
    dispatch({ type: CREATE_USER_SUCCESS, payload: user });
    Actions.main({ type: 'reset' });
  });
};

const createUserFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: CREATE_USER_FAIL });
};
