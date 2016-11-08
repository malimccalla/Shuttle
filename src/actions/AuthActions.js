import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH_ATTEMPT,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAIL
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
    dispatch({ type: AUTH_ATTEMPT });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => createUserSuccess(dispatch, user))
      .catch(error => createUserFail(dispatch, error));
  };
};

export const signInUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: AUTH_ATTEMPT });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => signInUserSuccess(dispatch, user))
      .catch(error => signInUserFail(dispatch, error));
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

const signInUserSuccess = (dispatch, user) => {
  dispatch({ type: SIGN_IN_USER_SUCCESS, payload: user });
  Actions.main({ type: 'reset' });
};

const signInUserFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: SIGN_IN_USER_FAIL });
};
