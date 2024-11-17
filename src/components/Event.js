import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li>
      <h3>{event.summary}</h3>
      <p>{event.location}</p>
      <p>{event.start.dateTime}</p>
      <button onClick={handleDetailsClick}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div>
          <p data-testid="event-description">{event.description}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
