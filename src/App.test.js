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
    wrapper = shallow(<App/>);
  })

  //Testing using Enzyme
  test('renders learn react link', () => {
    expect(wrapper.find("h1").text()).toContain('This is basic Test')
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
      expect(wrapper.find("#btn").text()).toBeTruthy();
  });
  
});

