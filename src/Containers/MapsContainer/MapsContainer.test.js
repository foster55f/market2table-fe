import React from 'react';
import { shallow } from 'enzyme';
import { MapsContainer } from './MapsContainer';
import { useSelector, useDispatch } from 'react-redux';

let mockState = {
  zipCode: '80401',
  selectedMarket: '1923782',
  markets: [{name: 'Friendly Farms Market', id:'1923782'}]
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState
}));

describe('MapsContainer', () => {

  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<MapsContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});
