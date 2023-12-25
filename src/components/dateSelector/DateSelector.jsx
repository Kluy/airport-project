import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const DateSelector = ({ selectDate, day }) => {
  const { isDeparture } = useParams();

  const date = selectDate.format('DD-MM-YYYY');
  const [searchParams] = useSearchParams({
    date: moment(new Date()).format('DD-MM-YYYY'),
  });
  const params = Object.fromEntries([...searchParams]);

  const navigate = useNavigate();
  const search = params.search ? `&search=${params.search}` : '';

  return (
    <div
      className={classNames('calendar__item', {
        calendar__item_selected: date === params.date,
      })}
      onClick={() => {
        navigate({
          pathname: `/${isDeparture || 'departure'}`,
          search: `?date=${date}${search}`,
        });
      }}
    >
      <div>{selectDate.format('DD/MM')}</div>
      <span className="calendar__item-text">{day}</span>
    </div>
  );
};

DateSelector.propTypes = {
  selectDate: PropTypes.instanceOf(moment).isRequired,
};

export default DateSelector;
