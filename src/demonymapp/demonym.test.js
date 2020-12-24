import React from 'react';
import ReactDOM from 'react-dom';
import Demonym from './demonym';
//import renderer from 'react-test-renderer'
//import { shallow } from 'enzyme'
//import toJson from 'enzyme-to-json'



  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demonym />, div);
    ReactDOM.unmountComponentAtNode(div);
  })