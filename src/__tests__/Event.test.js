import { render, fireEvent } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
  
  const event = mockData[0];
  
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });

  test('renders event summary', () => {
    expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
  });

  test('renders event location', () => {
    expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
  });

  test('renders event start time', () => {
    const startTime = event.start.dateTime;
    expect(EventComponent.queryByText(startTime)).toBeInTheDocument();
  });

  test('renders the "Show Details" button', () => {
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });

  test('displays event details when "Show Details" is clicked', () => {
    const showDetailsButton = EventComponent.queryByText('Show Details');
    
    // Assert that the button is initially present
    expect(showDetailsButton).toBeInTheDocument();
    
    // Click the button
    fireEvent.click(showDetailsButton);
    
    // Verify the presence of the description after clicking the button
    const descriptionElement = EventComponent.queryByText(event.description);
    
  });

  test('hides event details when "Hide Details" is clicked', () => {
    const showDetailsButton = EventComponent.queryByText('Show Details');
    fireEvent.click(showDetailsButton);
    
    // Check if the "Hide Details" button appears after expanding
    const hideDetailsButton = EventComponent.queryByText('Hide Details');
    expect(hideDetailsButton).toBeInTheDocument();

    // Click the "Hide Details" button to collapse
    fireEvent.click(hideDetailsButton);

    // Check if the description is not visible after collapsing
    expect(EventComponent.queryByText(event.description)).not.toBeInTheDocument();
  });
});
