import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// First test notes
// 1. render and screen is used to perform the test
// 2. test and expect in this case are globally provided 

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
