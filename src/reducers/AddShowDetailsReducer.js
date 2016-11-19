import {
  COUNTRY_CHANGED,
  DATE_CHANGED,
  CITY_CHANGED,
  FEE_CHANGED,
  SET_START_TIME_CHANGED,
  SET_END_TIME_CHANGED
} from '../actions/types';

const INITITAL_STATE = {
  date: '',
  country: '',
  city: '',
  setStartTime: '',
  setEndTime: '',
  fee: ''
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case CITY_CHANGED:
     return { ...state, city: action.payload };
    case FEE_CHANGED:
      return { ...state, fee: action.payload };
    case COUNTRY_CHANGED:
      return { ...state, country: action.payload };
    case DATE_CHANGED:
      return { ...state, date: action.payload };
    case SET_START_TIME_CHANGED:
      return { ...state, setStartTime: action.payload };
    case SET_END_TIME_CHANGED:
      return { ...state, setEndTime: action.payload };
    default:
      return state;
  }
};
