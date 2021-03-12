import { render, screen } from '@testing-library/react';
import { shallow,mount } from 'enzyme';

import Counter from './Counter';


describe ('Basic test Cases',() =>{

  // Before every enzyme test we need 
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Counter name={'Hello I am Counter !!!'}/>);
  })
  
  test('testing counter name', ()=>{
    expect(wrapper.find('#name').text()).toBe('Hello I am Counter !!!')
  })

  {/*
    ***********React testing*************
     test('renders button', () => {
       const {getByTestId}= render(<App />);
       const linkElement = getByTestId('btn');
       expect(linkElement).toBeInTheDocument();
  })
  */}

  //Testing Button using Enzyme
  test('Testing A button', () => {
      expect(wrapper.find("#incree").text()).toBeTruthy();
  });
  test('Testing A button', () => {
    expect(wrapper.find("#decree").text()).toBeTruthy();
  });
  
  test('testing initial count',()=>{
    expect(wrapper.find("#counter").text()).toEqual("0")
  })

  test('Increment and decrement' ,()=>{
      wrapper.find('#incree').simulate('click')
      expect(wrapper.find('#counter').text()).toBe('1')
      wrapper.find('#decree').simulate('click')
      expect(wrapper.find('#counter').text()).toBe('0')
  })
});

