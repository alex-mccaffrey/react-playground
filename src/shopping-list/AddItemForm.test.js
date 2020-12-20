import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddItemForm from './AddItemForm';


// And the AddItemForm.test.js has an input and submit button that doesn't change with props.


describe(`AddItemForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<AddItemForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

