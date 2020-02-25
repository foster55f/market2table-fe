import React from 'react';
import { shallow } from 'enzyme';
import { MarketPage } from './MarketPage';

const mockState = {
  markets: [{name: 'Friendly Famrs', address: '1234 Hillsbury Lane', schedule: 'M-F ALL DAY', google_link: 'google.com', id:'1923782'}],
  selectedMarket: '1923782'
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState,
  useDispatch: () => jest.fn()
}));

describe('MarketPage', () => {

  let wrapper;
  let mockAddSelectedMarket = jest.fn();
  let mockAddVendors = jest.fn();
  let mockhistory = {push: jest.fn()};

  it('should match the snapshot', () => {
    wrapper = shallow(<MarketPage
      history={mockhistory}
      addSelectedMarket={mockAddSelectedMarket}
      addVendors={mockAddVendors}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
