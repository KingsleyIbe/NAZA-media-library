import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Search from '../component/Search';

describe('Render components', () => {
  test('render Search component', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Search /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
