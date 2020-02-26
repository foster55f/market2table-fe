import React from 'react';
import { shallow } from 'enzyme';
import { VendorProductCard } from './VendorProductCard';

describe('VendorProductCard', () => {

  let wrapper;
  let mockProducts = [{name: 'plain ol dough', price: '5', description: 'some good white bread', id: '234'}];
  let mockSetProducts = jest.fn();
  let mockName = 'plain ol dough';
  let mockPrice = '6';
  let mockDescription = 'yummy food';
  let mockId = '23423';

  beforeEach(() => {
    wrapper = shallow(<VendorProductCard
      products={mockProducts}
      setProducts={mockSetProducts}
      name={mockName}
      price={mockPrice}
      description={mockDescription}
      id={mockId}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke handleDelete on button click', () => {
    wrapper.find('.delete-product-button').simulate('click');
    expect(mockSetProducts).toHaveBeenCalledWith(mockProducts);
  });
});
