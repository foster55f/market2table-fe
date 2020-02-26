import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { useSelector, useDispatch } from 'react-redux';

const mockState = {
  zipCode: '80401',
  selectedMarket: '1923782',
  vendors: [{name: 'Friendly Famrs', id:'1231', image_link: 'image.png'}]
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState,
  useDispatch: () => jest.fn()
}));

describe('Header', () => {

  let wrapper;
  let mockAddZipCode = jest.fn();
  let mockAddVendors = jest.fn();
  let mockAddSelectedMarket = jest.fn();
  let mockAddMarkets = jest.fn();
  let mockAddSelectedVendor = jest.fn();
  let mockHistory = {push: jest.fn()};
  let mockPath;

  it('should match the snapshot with a path that includes markets', () => {
    mockPath = '/markets/234124'
    wrapper = shallow(<Header
      addZipCode={mockAddZipCode}
      addVendors={mockAddVendors}
      addSelectedMarket={mockAddSelectedMarket}
      addMarkets={mockAddMarkets}
      addSelectedVendor={mockAddSelectedVendor}
      history={mockHistory}
      path={mockPath}
       />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke history.push on back to markets button', () => {
    mockPath = '/markets/234124'
    wrapper = shallow(<Header
      addZipCode={mockAddZipCode}
      addVendors={mockAddVendors}
      addSelectedMarket={mockAddSelectedMarket}
      addMarkets={mockAddMarkets}
      addSelectedVendor={mockAddSelectedVendor}
      history={mockHistory}
      path={mockPath}
       />);
    wrapper.find('#back-to-markets-button').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith('/markets');
  });

  it('should match the snapshot with a path that includes account', () => {
    mockPath = '/account/234124'
    wrapper = shallow(<Header
      addZipCode={mockAddZipCode}
      addVendors={mockAddVendors}
      addSelectedMarket={mockAddSelectedMarket}
      addMarkets={mockAddMarkets}
      addSelectedVendor={mockAddSelectedVendor}
      history={mockHistory}
      path={mockPath}
       />);

    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot with a path that includes markets and vendors', () => {
    mockPath = '/markets/234124/vendors'
    wrapper = shallow(<Header
      addZipCode={mockAddZipCode}
      addVendors={mockAddVendors}
      addSelectedMarket={mockAddSelectedMarket}
      addMarkets={mockAddMarkets}
      addSelectedVendor={mockAddSelectedVendor}
      history={mockHistory}
      path={mockPath}
       />);

    expect(wrapper).toMatchSnapshot()
  });

  it('should invoke history.path on button click', () => {
    mockPath = '/markets/234124/vendors'
    wrapper = shallow(<Header
      addZipCode={mockAddZipCode}
      addVendors={mockAddVendors}
      addSelectedMarket={mockAddSelectedMarket}
      addMarkets={mockAddMarkets}
      addSelectedVendor={mockAddSelectedVendor}
      history={mockHistory}
      path={mockPath}
       />);

    wrapper.find('#back-to-market-button').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith('/markets/1923782');
  });
});
