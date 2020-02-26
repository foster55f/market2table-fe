import React from 'react';
import { shallow } from 'enzyme';
import VendorProductForm from './VendorProductForm';
import { useSelector, useDispatch } from 'react-redux';


describe('VendorProductForm', () => {
    let mockproducts = [{ name: 'apples', description: 'lots', price: 1.99 }, { name: 'oranges', description: 'lots', price: 4 }]
    let mockSetProducts = jest.fn();
    
    it('should match the VendorProductForm snapshot', () => {
        let wrapper = shallow(<VendorProductForm
            setProducts={mockSetProducts}
            products={mockproducts}
          />);
        expect(wrapper).toMatchSnapshot();
    })

});