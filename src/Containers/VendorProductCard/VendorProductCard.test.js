import React from 'react';
import { shallow } from 'enzyme';
import { VendorProductCard } from './VendorProductCard';

describe('VendorProductCard', () => {

  let wrapper;
  let mockProducts = [{name: 'plain ol dough', price: '5', description: 'some good white bread', id: '2342'}];
  let mocksetProducts = jest.fn();
  let mockName = 'plain ol dough';
  let mockPrice = '6';
  let mockDescription = 'yummy food';
  let mockId = '23423';

  it('should match the snapshot', () => {
    wrapper = shallow(<VendorProductCard
      products={mockProducts}
      setProducts={mocksetProducts}
      name={mockName}
      price={mockPrice}
      description={mockDescription}
      id={mockId}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
