import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everthing is OK', () => {
  test('should render the App component without crashing', () => {
    render(<App />);
    screen.debug();
  });

  test('should render Input label text and Input children', () => {
    render(<App />);
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
    render(<App />);
    screen.getByRole('textbox');
    // expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should select a label element by its texts', () => {
    render(<App />);
    screen.getByLabelText('Input:');
  });

  test('should select input element by placeholder text', () => {
    render(<App />);
    screen.getByPlaceholderText('Example');
  });
});
