import { SAVE_SHEDULE } from '../actions/shedule.actions';

const initialState = {
  shedule: [],
};

const sheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SHEDULE:
      return {
        ...state,
        shedule: action.payload.shedule,
      };
    default:
      return state;
  }
};

export default sheduleReducer;
