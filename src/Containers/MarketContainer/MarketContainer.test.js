import React from 'react';
import { shallow } from 'enzyme';
import { MarketContainer } from './MarketContainer';
import { useSelector, useDispatch } from 'react-redux';

const mockState = {
  markets: [{name: 'Friendly Famrs', id:'1923782', image_link: 'image.png'}]
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState
}));

describe('MarketContainer', () => {

  let wrapper;

  it('should match the snapshot with markets', () => {
    wrapper = shallow(<MarketContainer
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
