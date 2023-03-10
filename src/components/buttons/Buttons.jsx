import React from 'react';
// import { connect } from 'react-redux';
// import { toggleAction } from '../../store/actions/shedule.actions';
// import { departureStatusSelector } from '../../store/selectors/shedule.selectors';
import { Link, useParams, useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import './buttons.scss';

const Buttons = () => {
  const { isDeparture } = useParams();
  const departure = isDeparture === 'arrival' ? true : false;
  const [searchParams] = useSearchParams();

  return (
    <div className="select">
      <Link to={`/departure?${searchParams}`}>
        <button
          className={classNames('select__btn select__btn_departure', {
            select__btn_unactive: departure,
          })}
          disabled={!departure}
        >
          ВИЛІТ
        </button>
      </Link>
      <Link to={`/arrival?${searchParams}`}>
        <button
          className={classNames('select__btn select__btn_arrival', {
            select__btn_unactive: !departure,
          })}
          disabled={departure}
        >
          ПРИЛІТ
        </button>
      </Link>
    </div>
  );
};
export default Buttons;
