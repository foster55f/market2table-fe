import React from 'react';
import { shallow } from 'enzyme';
import VendorSelectContainer from './VendorSelectContainer';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

const mockState = {
    vendors: [{name:'vendorA', description:'selling', products:'apples'},{name:'vendorB', description:'sellin', products:'oranges'}],
  }
jest.mock("react-redux", () => ({
    useSelector: () => mockState,
    useDispatch: () => jest.fn()
}));

describe('VendorSelectContainer', () => {
    let mockAddVendors = jest.fn()
    it('should match the VendorSelectContainer snapshot', () => {
        let wrapper = shallow(<VendorSelectContainer
            vendors={mockState.vendors}
            addVendors={mockAddVendors}
          />);
        expect(wrapper).toMatchSnapshot();
    });

    it("Should load with an initial state of '' for the search vendors input", () => {
      let wrapper = shallow(<VendorSelectContainer
          vendors={mockState.vendors}
          addVendors={mockAddVendors}
        />);

      expect(wrapper.find('.search-vendors-input').text()).toEqual('');
    });

    it("Should set input to '' on clear button click", () => {
      let wrapper = shallow(<VendorSelectContainer
          vendors={mockState.vendors}
          addVendors={mockAddVendors}
        />);
      wrapper.find('.search-vendors-input').simulate('change', {target: { value: 'Farm'}});
      wrapper.find('.search-clear-button').simulate('click');
      expect(wrapper.find('.search-vendors-input').text()).toEqual('');
    });

});
