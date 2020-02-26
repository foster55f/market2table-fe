import React from 'react';
import { shallow } from 'enzyme';
import { VendorMarketSearch } from './VendorMarketSearch';

const mockState = {
  selectedVendor: {name: 'Rolling in the dough', description: 'just a little bakery rolling in some dough', image_link: 'rollthatdough.png'},
  zipCode: '80401',
  markets: [{name: 'Friendly Famrs', address: '1234 Hillsbury Lane', schedule: 'M-F ALL DAY', google_link: 'google.com', id:'1923782'}]
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState,
  useDispatch: () => jest.fn()
}));

describe('VendorMarketSearch', () => {

  let wrapper;
  let mockAddZipCode = jest.fn();
  let mockAddMarkets = jest.fn();
  let mockMarketsLinked;
  let mockSetMarketsLinked = jest.fn();

  it('should match the snapshot', () => {
    mockMarketsLinked = [{name: 'Friendly Famrs', address: '1234 Hillsbury Lane', schedule: 'M-F ALL DAY', google_link: 'google.com', id:'1923782'}, {name: 'farm farm', address: '1234 Hillsbury Lane', schedule: 'M-F ALL DAY', google_link: 'google.com', id:'1923782'}];
    wrapper = shallow(<VendorMarketSearch
      addZipCode={mockAddZipCode}
      addMarkets={mockAddMarkets}
      marketsLinked={mockMarketsLinked}
      setMarketsLinked={mockSetMarketsLinked}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with no match', () => {
    mockMarketsLinked = [];
    wrapper = shallow(<VendorMarketSearch
      addZipCode={mockAddZipCode}
      addMarkets={mockAddMarkets}
      marketsLinked={mockMarketsLinked}
      setMarketsLinked={mockSetMarketsLinked}
    />);

    expect(wrapper).toMatchSnapshot();
  });
  it("Should have a default state on zipCode input of ''", () => {
    expect(wrapper.find('.vendor-market-input').prop('value')).toEqual('');
  });

  it("Should invoke onChange and update state if value is less than 6 on zip code input", () => {
    wrapper.find('.vendor-market-input').simulate('change', {target: {value: '80401'}});
    expect(wrapper.find('.vendor-market-input').prop('value')).toEqual('80401');
  });

  it("Should onClick invoke handleZipCodeSubmit and reset zip code input to '' if input.length is 5", () => {
    wrapper.find('.vendor-market-input').simulate('change', {target: {value: '80401'}});
    expect(wrapper.find('.vendor-market-input').prop('value')).toEqual('80401');
    wrapper.find('.vendor-market-search-button').simulate('click', {preventDefault: jest.fn()});
    expect(wrapper.find('.vendor-market-input').prop('value')).toEqual('');
  });

  it("Should onClick invoke handleZipCodeSubmit and reset zip code input to '' if input.length is 5", () => {
    wrapper.find('.vendor-market-input').simulate('change', {target: {value: '80'}});
    expect(wrapper.find('.vendor-market-input').prop('value')).toEqual('80');
    wrapper.find('.vendor-market-search-button').simulate('click', {preventDefault: jest.fn()});
    expect(wrapper.find('.vendor-market-input').prop('value')).toEqual('');
    expect(wrapper.find('.error-message').prop('hidden')).toEqual(false);
  });

  it("should have a default value of false for hasError", () => {
    expect(wrapper.find('.error-message').prop('hidden')).toEqual(false);
  });

  it("Should onClick invoke handleZipCodeSubmit and reset zip code input to '' if input.length is 5", () => {
    wrapper.find('.vendor-market-input').simulate('change', {target: {value: '80401'}});
    expect(wrapper.find('.vendor-market-input').prop('value')).toEqual('80401');
    wrapper.find('.vendor-market-search-button').simulate('click');
    expect(wrapper.find('.vendor-market-input').prop('value')).toEqual('');
  });

  it("should have a value of true for hasError when not length of 5 and then set to false on input change", () => {
    wrapper.find('.vendor-market-input').simulate('change', {target: {value: '80'}});
    wrapper.find('.vendor-market-search-button').simulate('click');
    expect(wrapper.find('.error-message').prop('hidden')).toEqual(false);
    wrapper.find('.vendor-market-input').simulate('change', {target: {value: '80401'}});
    expect(wrapper.find('.error-message').prop('hidden')).toEqual(true);
  });

});
