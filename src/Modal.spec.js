import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Modal from './Modal';

describe("Modal works",()=>{
    it('should render a title',()=>{
        const wrapper = shallow(<Modal/>)
    })
})
