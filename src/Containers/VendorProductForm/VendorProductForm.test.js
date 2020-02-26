import React from 'react';
import { shallow } from 'enzyme';
import VendorProductForm from './VendorProductForm';
import { useSelector, useDispatch } from 'react-redux';


describe('VendorProductForm', () => {
    let mockproducts = [{ name: 'apples', description: 'lots', price: 1.99 }, { name: 'oranges', description: 'lots', price: 4 }]
    let mockSetProducts = jest.fn();
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<VendorProductForm
        setProducts={mockSetProducts}
        products={mockproducts}
      />);
      const mockMath = Object.create(global.Date);
      mockMath.now = () => 15;
      global.Date = mockMath;
    });

    it('should match the VendorProductForm snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should have a default value of '' for the product name input", () => {
      expect(wrapper.find('.product-name-input').prop('value')).toEqual('');
    });

    it("should update productName state on change of product name input", () => {
      wrapper.find('.product-name-input').simulate('change', {target: {value: 'Celery'}})
      expect(wrapper.find('.product-name-input').prop('value')).toEqual('Celery');
    });

    it("should have a default value of '' for the product price input", () => {
      expect(wrapper.find('.product-price-input').prop('value')).toEqual('');
    });

    it("should update productPrice state on change of product price input", () => {
      wrapper.find('.product-price-input').simulate('change', {target: {value: '5'}});
      expect(wrapper.find('.product-price-input').prop('value')).toEqual('5');
    });

    it("should have a default value of '' for the product description textarea", () => {
      expect(wrapper.find('.product-description-textarea').prop('value')).toEqual('');
    });

    it("should update productPrice state on change of product price input", () => {
      wrapper.find('.product-description-textarea').simulate('change', {target: {value: 'The crunchiest celery around'}});
      expect(wrapper.find('.product-description-textarea').prop('value')).toEqual('The crunchiest celery around');
    });

    it("should invoke setproducts on button click with new product and current products", () => {
      wrapper.find('.product-name-input').simulate('change', {target: {value: 'Celery'}});
      wrapper.find('.product-price-input').simulate('change', {target: {value: '5'}});
      wrapper.find('.product-description-textarea').simulate('change', {target: {value: 'The crunchiest celery around'}});
      wrapper.find('.submit-new-product-button').simulate('click');
      expect(mockSetProducts).toHaveBeenCalledWith([...mockproducts, {name: 'Celery', price: '5', description: 'The crunchiest celery around', id: 15}])
    });

    it("should invoke setproducts on button click with new product and current products", () => {
      wrapper.find('.product-name-input').simulate('change', {target: {value: 'Celery'}});
      wrapper.find('.product-price-input').simulate('change', {target: {value: '5'}});
      wrapper.find('.product-description-textarea').simulate('change', {target: {value: 'The crunchiest celery around'}});
      wrapper.find('.submit-new-product-button').simulate('click');
      expect(wrapper.find('.product-description-textarea').prop('value')).toEqual('');
      expect(wrapper.find('.product-price-input').prop('value')).toEqual('');
      expect(wrapper.find('.product-name-input').prop('value')).toEqual('');
    });
});
