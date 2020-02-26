import React from 'react';
import { shallow } from 'enzyme';
import { VendorPage } from './VendorPage';

const mockState = {
  selectedVendor: {
    name: 'Rolling in the dough',
    description: 'just a little bakery rolling in some dough',
    image_link: 'rollthatdough.png',
    products: [{name: 'plain ol dough', price: '5', description: 'some good white bread', id: '2342'}]
  },
  selectedMarket: '12345'
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState
}));

describe('VendorPage', () => {

  let wrapper;
  let mockaddSelectedMarket = jest.fn();
  let mockaddVendors = jest.fn();
  let mockHistory = {push: jest.fn()}

  beforeEach(() => {
    wrapper = shallow(<VendorPage
      addSelectedMarket={mockaddSelectedMarket}
      addVendors={mockaddVendors}
      history={mockHistory}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should evoke handleBackToMarket on button click', () => {
    wrapper.find('.vendor-page-button').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(`/markets/${mockState.selectedMarket}/vendors/`);
  });
});
