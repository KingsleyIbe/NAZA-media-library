import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import ShowMedia from '../component/ShowMedia';

describe('Render components', () => {
  test('render Show media component', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><ShowMedia /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
