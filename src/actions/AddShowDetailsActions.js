import {
  COUNTRY_CHANGED,
  DATE_CHANGED,
  SET_START_TIME_CHANGED,
  SET_END_TIME_CHANGED,
  FEE_CHANGED,
  CITY_CHANGED
} from './types';

export const countryChanged = (text) => {
  return {
    type: COUNTRY_CHANGED,
    payload: text
  };
};

export const dateChanged = (date) => {
  return {
    type: DATE_CHANGED,
    payload: date
  };
};

export const setStartTimeChanged = (time) => {
  return {
    type: SET_START_TIME_CHANGED,
    payload: time
  };
};

export const setEndTimeChanged = (time) => {
  return {
    type: SET_END_TIME_CHANGED,
    payload: time
  };
};

export const feeChanged = (fee) => {
  return {
    type: FEE_CHANGED,
    payload: fee
  };
};

export const cityChanged = (city) => {
  return {
    type: CITY_CHANGED,
    payload: city
  };
};
