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
    expect(screen.getByText('Input:')).toBeInTheDocument();
  });
});
