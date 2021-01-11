import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('When everthing is OK', () => {
  test('should render the App component without crashing', () => {
    render(<App />);
  });
});
