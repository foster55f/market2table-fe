import React from 'react';
import { shallow } from 'enzyme';
import { VendorForm } from './VendorForm';
import { createVendor, createProduct } from '../../apiCalls';

jest.mock('../../apiCalls.js');

const mockState = {
  selectedVendor: {name: 'Rolling in the dough', description: 'just a little bakery rolling in some dough', image_link: 'rollthatdough.png'}
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState,
  useDispatch: () => jest.fn()
}));

describe('VendorForm', () => {

  let wrapper;
  let mockAddVendors = jest.fn();
  let mockAddSelectedVendor = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<VendorForm
      addVendors={mockAddVendors}
      addSelectedVendor={mockAddSelectedVendor}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default vendorName of '' ", () => {
    expect(wrapper.find('.vendor-name-input').prop('value')).toEqual('');
  });

  it("should update state of vendorName when the input is changed ", () => {
    wrapper.find('.vendor-name-input').simulate('change', {target: {value: 'Rolling Hills Farms'}});
    expect(wrapper.find('.vendor-name-input').prop('value')).toEqual('Rolling Hills Farms');
  });

  it("should have a default VendorDescription of '' ", () => {
    expect(wrapper.find('.vendor-description-textarea').prop('value')).toEqual('');
  });

  it("should update state of VendorDescription when the input is changed ", () => {
    wrapper.find('.vendor-description-textarea').simulate('change', {target: {value: 'Just a farm among some rolling hills'}});
    expect(wrapper.find('.vendor-description-textarea').prop('value')).toEqual('Just a farm among some rolling hills');
  });

  it("it should invoke handle submit form on click and if nothing in inputs setHasError to true", () => {
    wrapper.find('.submit-vendor-info-button').simulate('click');
    expect(wrapper.find('.vendor-form-error').prop('hidden')).toEqual(false);
  });

  it("it should invoke handle submit form and reset local states when inputs have values", () => {
    createVendor.mockImplementation(() => {
      return Promise.resolve(
        { data: {addVendor: {id: 7122}} }
      );
    });
    createProduct.mockImplementation(() => {
      return Promise.resolve(
        { data: {addProduct: {id: 1231}} }
      );
    });
    wrapper.find('.vendor-name-input').simulate('change', {target: {value: 'Rolling Hills Farms'}});
    wrapper.find('.vendor-description-textarea').simulate('change', {target: {value: 'Just a farm among some rolling hills'}});
    wrapper.find('.submit-vendor-info-button').simulate('click');
    expect(wrapper.find('.vendor-name-input').prop('value')).toEqual('');
    expect(wrapper.find('.vendor-description-textarea').prop('value')).toEqual('');
  });

  it("it should invoke handle submit form on click and if nothing in inputs setHasError to true and reset on input change", () => {
    wrapper.find('.submit-vendor-info-button').simulate('click');
    expect(wrapper.find('.vendor-form-error').prop('hidden')).toEqual(false);
    wrapper.find('.vendor-name-input').simulate('change', {target: {value: 'Rolling Hills Farms'}});
    expect(wrapper.find('.vendor-form-error').prop('hidden')).toEqual(true);
  });

  it("it should invoke handle submit form on click and if nothing in inputs setHasError to true and reset on input change", () => {
    wrapper.find('.submit-vendor-info-button').simulate('click');
    expect(wrapper.find('.vendor-form-error').prop('hidden')).toEqual(false);
    wrapper.find('.vendor-description-textarea').simulate('change', {target: {value: 'Just a farm among some rolling hills'}});
    expect(wrapper.find('.vendor-form-error').prop('hidden')).toEqual(true);
  });
});
