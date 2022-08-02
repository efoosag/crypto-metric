/* eslint-disable comma-dangle */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByPlaceholderText(/SEARCH CRYPTO COIN/i);
  expect(linkElement).toBeInTheDocument();
});
