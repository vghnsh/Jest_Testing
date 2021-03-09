import { render, screen } from '@testing-library/react';
import { shallow,mount } from 'enzyme';
import App from './App';

describe ('Basic test Cases',() =>{

  {/*
    ***********React testing*************
    test('renders learn react link', () => {
      const {getByText}= render(<App />);
      const linkElement = getByText('This is basic Test');
      expect(linkElement).toBeInTheDocument();
  })
  */}

  // Before every enzyme test we need 
  let wrapper;
  beforeEach(()=>{
    wrapper = mount(<App/>);
  })

  //Testing using Enzyme
  test('renders learn react link', () => {
    expect(wrapper.find("h2").text()).toBe('This is basic Test')
  });

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

