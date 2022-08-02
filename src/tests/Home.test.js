/* eslint-disable comma-dangle */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/Home';

describe('Home Component test', () => {
  it('Home Page', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
