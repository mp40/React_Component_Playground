import React from 'react';
import {shallow} from 'enzyme';
import Modal from './Modal';

describe("Modal works",()=>{
    it('should render',()=>{
        const wrapper = shallow(<Modal/>)
    })
})
