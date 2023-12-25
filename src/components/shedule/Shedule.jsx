import React from 'react';
import { connect } from 'react-redux';
import { sheduleSelector } from '../../store/selectors/shedule.selectors';
import { useParams, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import './shedule.scss';

const Shedule = ({ shedule }) => {
  const { isDeparture } = useParams();
  const { search, date } = Object.fromEntries(...useSearchParams());
  const departure = isDeparture === 'departure';

  const flights = departure
    ? shedule.filter(
        flight =>
          flight.type === 'DEPARTURE' &&
          (moment(flight.departureDate).format('DD-MM-YYYY') === date ||
            moment(flight.departureDateExpected).format('DD-MM-YYYY') === date),
      )
    : shedule.filter(
        flight =>
          flight.type === 'ARRIVAL' &&
          (moment(flight.arrivalDate).format('DD-MM-YYYY') === date ||
            moment(flight.arrivalDateExpected).format('DD-MM-YYYY') === date),
      );

  return (
    <div className="flights">
      <ul className="flights__table flights__table-heading">
        <li className="flight__item">Термінал</li>
        <li className="flight__item">Розклад</li>
        <li className="flight__item">Напрямок</li>
        <li className="flight__item">Статус</li>
        <li className="flight__item flight__item_airline">Авіакомпанія</li>
        <li className="flight__item">Рейс</li>
        <li className="flight__item"></li>
      </ul>
      {flights.length ? (
        flights
          .filter(flight => {
            if (search) {
              return flight.codeShare && flight.codeShare.includes(search.toUpperCase())
                ? flight
                : departure
                ? flight.arrivalCity.toLowerCase().includes(search.toLocaleLowerCase())
                : flight.departureCity.toLowerCase().includes(search.toLocaleLowerCase());
            } else {
              return flight;
            }
          })
          .map(flight => {
            return (
              <ul key={flight.id} className="flights__table flight">
                <li className="flight__item">
                  <p
                    className={classNames('flight__terminal', {
                      flight__terminal_D: flight.terminal === 'D',
                    })}
                  >
                    {flight.terminal}
                  </p>
                </li>
                <li className="flight__item ">
                  {departure
                    ? moment(flight.departureDate).locale('uk').format('LT')
                    : moment(flight.arrivalDate).locale('uk').format('LT')}
                </li>
                <li className="flight__item">
                  {departure ? flight.arrivalCity : flight.departureCity}
                </li>
                <li className="flight__item">{flight.status}</li>
                <li className="flight__item flight__item_airline flight__airline">
                  <img className="flight__airline-logo" src={flight.airlineLogo} alt="logo" />
                  <span>{flight.airlineName}</span>
                </li>
                <li className="flight__item">{flight.codeShare}</li>
                <li className="flight__item">
                  <a className="flight__item_details" href="#">
                    Деталі рейсу
                  </a>
                </li>
              </ul>
            );
          })
      ) : (
        <div className="no-flights">Немає рейсів</div>
      )}
    </div>
  );
};

const mapState = state => {
  return {
    shedule: sheduleSelector(state),
  };
};

Shedule.propTypes = {
  shedule: PropTypes.array,
};

Shedule.defaultProps = {
  shedule: {},
};

export default connect(mapState, null)(Shedule);
