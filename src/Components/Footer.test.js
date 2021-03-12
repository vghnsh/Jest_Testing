import { render, screen } from '@testing-library/react';
import { shallow,mount } from 'enzyme';
import Footer from './Footer';

describe ('Basic test Cases',() =>{

  // Before every enzyme test we need 
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Footer/>);
  })
  
  //Testing Button using Enzyme
  test('Testing A Footer', () => {
      expect(wrapper.find("h5").text()).toBe('This is My Footer for testing!');
  });
  
});

