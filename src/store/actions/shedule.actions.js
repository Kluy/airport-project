import { getFlights } from '../../gateway/gateway';

export const SAVE_SHEDULE = 'SHEDULE/SAVE_SHEDULE';

const saveShedule = shedule => {
  return {
    type: SAVE_SHEDULE,
    payload: {
      shedule,
    },
  };
};

export const getSheduleAction = input => {
  return function (dispatch) {
    getFlights().then(result => dispatch(saveShedule(result)));
  };
};
