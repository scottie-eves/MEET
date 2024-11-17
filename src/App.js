import React, { useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

const App = () => {

  const [eventCount, setEventCount] = useState(32);

  const handleUpdateEventCount = (newCount) => {
    setEventCount(newCount);
  };

  return (
    <div className='App'>
      <CitySearch />
      <EventList />
      <NumberOfEvents updateEventCount={handleUpdateEventCount} />
      <p>Events to show: {eventCount}</p>
    </div>
  );
}

export default App;
