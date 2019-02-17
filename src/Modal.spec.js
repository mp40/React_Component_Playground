import React from 'react';
import {shallow, mount} from 'enzyme';
import Modal from './Modal';
import App from './App'

describe("Modal works",()=>{
    it('should render',()=>{
        const wrapper = shallow(<Modal/>)
    })
})
describe("the modal buttons",()=>{
    it('should close when the close button is clicked',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('button').simulate('click')
        wrapper.find('#closeModal').simulate('click')
        expect(wrapper.text()).not.toContain('Modal displayed')
    })
})
