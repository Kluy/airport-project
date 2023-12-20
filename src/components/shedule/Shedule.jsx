import React from 'react';
import { connect } from 'react-redux';
import { sheduleSelector } from '../../store/selectors/shedule.selectors';
import { useParams, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import './shedule.scss';

const Shedule = ({ shedule }) => {
  console.log(shedule);

  if (shedule.length === 0) return <div className="no-flights">Немає рейсів</div>;

  const { isDeparture } = useParams();
  const departure = isDeparture === 'departure';
  const { search } = Object.fromEntries(...useSearchParams());
  // const flights = departure ? shedule.departure : shedule.arrival;
  const flights = shedule;

  return (
    <div className="flights">
      <ul className="flights__table flights__table-heading">
        <li className="flight__item">Термінал</li>
        <li className="flight__item">Розклад</li>
        <li className="flight__item flight__item_status">Напрямок</li>
        <li className="flight__item_status">Статус</li>
        <li className="flight__item_airline">Авіакомпанія</li>
        <li className="flight__item">Рейс</li>
        <li className="flight__item flight__item_status"></li>
      </ul>
      {flights
        .filter(flight =>
          search
            ? flight.codeShare.includes(search.toUpperCase())
              ? flight
              : flight['arrivalCity']
              ? flight['arrivalCity'].toLowerCase().includes(search.toLowerCase())
              : flight['departureCity'].toLowerCase().includes(search.toLowerCase())
            : flight,
        )
        .map(flight => {
          return (
            <ul key={flight.id} className="flights__table flight">
              <li
                className={classNames('flight__terminal', {
                  flight__terminal_D: flight.terminal === 'D',
                })}
              >
                {flight.terminal}
              </li>
              <li className="flight__item ">
                {departure
                  ? moment(flight.departureDate).locale('uk').format('LT')
                  : moment(flight.arrivalDate).locale('uk').format('LT')}
              </li>
              <li className="flight__item flight__item_status">
                {flight.arrivalCity || flight.departureCity}
              </li>
              <li className="flight__item_status">
                {departure
                  ? `Вилетів о ${moment(flight.departureDateExpected).locale('uk').format('LT')}`
                  : `Прибув о ${moment(flight.arrivalDateExpected).locale('uk').format('LT')}`}
              </li>
              <li className="flight__item_airline flight__airline">
                <img className="flight__airline-logo" src={flight.airlineLogo} alt="logo" />
                <span>{flight.airlineName}</span>
              </li>
              <li className="flight__item">{flight.codeShare}</li>
              <li className="flight__item flight__item_status">
                <a className="flight__item_details" href="#">
                  Деталі рейсу
                </a>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

const mapState = state => {
  return {
    shedule: sheduleSelector(state),
  };
};

Shedule.propTypes = {
  shedule: PropTypes.object,
};

Shedule.defaultProps = {
  shedule: {},
};

export default connect(mapState, null)(Shedule);
