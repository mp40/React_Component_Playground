import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme'

describe('rendering components',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe('the modal button',()=>{
  it('should open the modal when button is clicked',()=>{
    const wrapper = mount(<App/>)
    wrapper.find('button').simulate('click')
    expect(wrapper.text()).toContain('Modal displayed')
  })
})
