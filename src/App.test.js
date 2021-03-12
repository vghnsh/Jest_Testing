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
    expect(wrapper.find("h2").text()).toBe('This is basic Test')
  });

});

