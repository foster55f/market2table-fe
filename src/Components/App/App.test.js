import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { useSelector, useDispatch } from 'react-redux';

const mockState = {
  zipCode: '80401'
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState,
}));

describe('App', () => {

  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot()
  });
});
