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
  vendors: [{name: 'Rolling in the dough', description: 'just a little bakery rolling in some dough', image_link: 'rollthatdough.png'}]
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState
}));

describe('VendorPage', () => {

  let wrapper;
  let mockaddSelectedMarket = jest.fn();
  let mockaddVendors = jest.fn();

  it('should match the snapshot', () => {
    wrapper = shallow(<VendorPage
      addSelectedMarket={mockaddSelectedMarket}
      addVendors={mockaddVendors}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
