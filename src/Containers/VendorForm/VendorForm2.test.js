import React from 'react';
import { shallow } from 'enzyme';
import { VendorForm } from './VendorForm';
import { deleteAllVendorProducts, createProduct, updateVendorInfo } from '../../apiCalls';

jest.mock('../../apiCalls.js');

const mockState = {name: 'farm farm', description: 'a farm', id: '123'};

jest.mock("react-redux", () => ({
  useSelector: () => mockState,
  useDispatch: () => jest.fn()
}));

describe('VendorForm', () => {

  let wrapper;
  let mockAddVendors = jest.fn();
  let mockAddSelectedVendor = jest.fn();
  let mockHistory = {push: jest.fn()}

  beforeEach(() => {
    wrapper = shallow(<VendorForm
      addVendors={mockAddVendors}
      addSelectedVendor={mockAddSelectedVendor}
      history={mockHistory}
    />);
  });

  it("it should invoke handle submit form and reset local states when inputs have values", async () => {
    updateVendorInfo.mockImplementation(() => {
      return Promise.resolve(
        { data: {updateInfo: {id: 7122}} }
      );
    });
    deleteAllVendorProducts.mockImplementation(() => {
      return Promise.resolve(
        { data: 'succesful delete' }
      );
    });
    createProduct.mockImplementation(() => {
      return Promise.resolve(
        { data: {addProduct: {id: 1231}} }
      );
    });
    wrapper.find('.vendor-name-input').simulate('change', {target: {value: 'Rolling Hills Farms'}});
    wrapper.find('.vendor-description-textarea').simulate('change', {target: {value: 'Just a farm among some rolling hills'}});
    wrapper.find('#update-vendor').simulate('click');
    expect(wrapper.find('.vendor-name-input').prop('value')).toEqual('');
    expect(wrapper.find('.vendor-description-textarea').prop('value')).toEqual('');
  });

});
