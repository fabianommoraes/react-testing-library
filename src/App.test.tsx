import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getUser } from './get-user';
import { mocked } from 'ts-jest/utils';

jest.mock('./get-user.ts');
const mockGetUser = mocked(getUser, true);

describe('When everthing is OK', () => {
  beforeEach(async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalled());
  });

  test('should render the App component without crashing', () => {
    // render(<App />); //using beforeEach
    screen.debug();
  });

  test('should render Input label text and Input children', () => {
    // render(<App />); //using beforeEach
    screen.getByText('Input:');
    screen.getByText(/Input/);
    // expect(screen.getByText('Input:')).toBeInTheDocument();

    // testing errors
    let error;
    try {
      screen.getByText('Input');
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  });

  test('should select the input element by its role', () => {
    // render(<App />); //using beforeEach
    screen.getByRole('textbox');
    // expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should select a label element by its texts', () => {
    // render(<App />); //using beforeEach
    screen.getByLabelText('Input:');
  });

  test('should select input element by placeholder text', () => {
    // render(<App />); //using beforeEach
    screen.getByPlaceholderText('Example');
  });

  test('should not find the role whatever', () => {
    expect(screen.queryByRole('whatever')).toBeNull();
  });
});
