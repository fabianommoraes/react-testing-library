import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('When everthing is OK', () => {
  beforeEach(async () => {
    // render(<App />);
    // await waitFor(() => expect(mockGetUser).toHaveBeenCalled());
  });

  test('should  call the onChange callback handler when using the fireEvent function', () => {
    const onChange = jest.fn();
    render(
      <Input value="" onChange={onChange}>
        Input:
      </Input>,
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Moraes' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should  call the onChange callback handler when using the userEvent API', () => {
    const onChange = jest.fn();
    render(
      <Input value="" onChange={onChange}>
        Input:
      </Input>,
    );
    userEvent.type(screen.getByRole('textbox'), 'Moraes');
    expect(onChange).toHaveBeenCalledTimes(6);
  });
});
