import React from 'react';
import { shallow } from 'enzyme';
import { MarketPage } from './MarketPage';
import { getVendorsByMarketId } from '../../apiCalls';

jest.mock('../../apiCalls.js');

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

  beforeEach(() => {
    wrapper = shallow(<MarketPage
      history={mockhistory}
      addSelectedMarket={mockAddSelectedMarket}
      addVendors={mockAddVendors}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke handleSubmit and history.push on button click', () => {
    getVendorsByMarketId.mockImplementation(() => {
      return Promise.resolve(
        { data: {market: {vendors: [{name: 'farm time'}]}} }
      );
    });
    wrapper.find('.find-vendors-button').simulate('click');
    expect(mockhistory.push).toHaveBeenCalledWith('1923782/vendors')
  });
});
