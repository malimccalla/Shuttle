import {
  COUNTRY_CHANGED
} from './types';

export const countryChanged = (text) => {
  return {
    type: COUNTRY_CHANGED,
    payload: text
  };
};
