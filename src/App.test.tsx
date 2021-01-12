import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everthing is OK', () => {
  beforeEach(() => {
    render(<App />);
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
