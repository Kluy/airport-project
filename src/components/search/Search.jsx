import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { flightNumberAction } from '../../store/actions/shedule.actions';
// import PropTypes from 'prop-types';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import moment from 'moment';

import './search.scss';

const Search = () => {
  const { isDeparture } = useParams();
  const [searchParams] = useSearchParams({});
  const params = Object.fromEntries([...searchParams]);
  const [input, setInput] = useState(params.search || '');
  const today = moment(new Date()).format('DD-MM-YYYY');
  const navigate = useNavigate();

  const search = input ? `&search=${input}` : '';

  return (
    <section className="search">
      <div className="search__title">ПОШУК РЕЙСУ</div>
      <form action="">
        <input
          className="search__input"
          type="text"
          placeholder="Номер рейсу або місто"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            navigate({
              pathname: `/${isDeparture || 'departure'}`,
              search: `?date=${params.date || today}${search}`,
            });
          }}
          className="search__button"
        >
          ЗНАЙТИ
        </button>
      </form>
    </section>
  );
};

// const mapDispatch = {
//   saveFlightNumber: flightNumberAction,
// };

// Search.propTypes = {
//   saveFlightNumber: PropTypes.func.isRequired,
// };

// export default connect(null, mapDispatch)(Search);
export default Search;
