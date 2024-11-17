import { useState } from 'react';

const NumberOfEvents = ({ updateEventCount }) => {
  const [eventCount, setEventCount] = useState(32);

  const handleChange = (event) => {
    // Check if the input value is a number
    const value = event.target.value;
    setEventCount(value);
    updateEventCount(value);
  };

  return (
      <input
        type="number"
        id="number-of-events"
        className="event-number-input"
        value={eventCount}
        onChange={handleChange}
        role="textbox"
      />
  );
};

export default NumberOfEvents;
