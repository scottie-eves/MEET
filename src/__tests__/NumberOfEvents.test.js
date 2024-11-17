import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  let mockUpdateEventCount;

  beforeEach(() => {
    mockUpdateEventCount = jest.fn(); // Mock the updateEventCount function
    NumberOfEventsComponent = render(<NumberOfEvents updateEventCount={mockUpdateEventCount} />);
  });

  // Test: Renders the NumberOfEvents component
  test('renders the NumberOfEvents component', () => {
    const numberInput = screen.getByRole('textbox');
    expect(numberInput).toBeInTheDocument();
  });

  // Test: Contains an element with role 'textbox'
  test('contains an element with role of "textbox"', () => {
    const numberInput = screen.getByRole('textbox');
    expect(numberInput).toBeInTheDocument();
  });

  // Test: Default value is 32
  test('default value is 32', () => {
    const numberInput = screen.getByRole('textbox');
    expect(numberInput.value).toBe('32');
  });

  // Test: Changes value when the user types
  test('changes value when the user types', async () => {
    const numberInput = screen.getByRole('textbox');
    const user = userEvent.setup();
    
    // Explicitly clear the input field and type '10'
    await user.clear(numberInput);
    await user.type(numberInput, '10');

    // Check if the value is now '10'
    expect(numberInput.value).toBe('10');
    
    // Check if the mock function is called with the correct argument
    expect(mockUpdateEventCount).toHaveBeenCalledWith('10');
  });
});
