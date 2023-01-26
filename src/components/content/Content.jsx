import React from 'react';
import Calendar from '../calendar/Calendar';
import Flights from '../flights/Flights';
import Search from '../search/Search';
import Shedule from '../shedule/Shedule';
import './content.scss';

const Content = () => {
  return (
    <div className="content-wrapper">
      <Search />
      <Shedule />
    </div>
  );
};

export default Content;