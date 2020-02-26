import React from 'react';
import { shallow } from 'enzyme';
import { VendorProductContainer } from './VendorProductContainer';

const mockState = {
  selectedVendor: {
    name: 'Rolling in the dough',
    description: 'just a little bakery rolling in some dough',
    image_link: 'rollthatdough.png',
    products: [{name: 'plain ol dough', price: '5', description: 'some good white bread', id: '2342'}]
  }
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState
}));

describe('VendorProductContainer', () => {

  let wrapper;
  let mockProducts;
  let mocksetProducts = jest.fn();

  it('should match the snapshot with products', () => {
    mockProducts = [{name: 'plain ol dough', price: '5', description: 'some good white bread', id: '2342'}];
    wrapper = shallow(<VendorProductContainer
      products={mockProducts}
      setProducts={mocksetProducts}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot without products', () => {
    mockProducts = [];
    wrapper = shallow(<VendorProductContainer
      products={mockProducts}
      setProducts={mocksetProducts}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
