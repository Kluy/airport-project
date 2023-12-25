import { createSelector } from 'reselect';

export const sheduleSelector = state => {
  return state.shedule;
};

export const departureStatusSelector = state => {
  return state.departure;
};

export const flightNumberSelector = state => {
  return state.flightNumber;
};

export const flightsSelector = createSelector(
  [sheduleSelector, departureStatusSelector, flightNumberSelector],
  (shedule, isDepature, flightNumber) => {
    console.log('flightsSelector');
    console.log(shedule);
    console.log(isDepature);
    // const flights = isDepature ? shedule.departure : shedule.arrival;

    // const flightsByNumber = flights
    //   .filter(flight =>
    //     flightNumber
    //       ? flight['carrierID.IATA'].concat(flight.fltNo).includes(flightNumber)
    //       : flight,
    //   )
    //   .sort((a, b) => a.timeDepShedule - b.timeDepShedule);
    return shedule;
  },
);
