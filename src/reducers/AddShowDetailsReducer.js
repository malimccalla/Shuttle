import {
  COUNTRY_CHANGED
} from '../actions/types';

const INITITAL_STATE = {
  date: '',
  country: '',
  city: '',
  setStartTime: '',
  setEndTime: ''
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case COUNTRY_CHANGED:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};
