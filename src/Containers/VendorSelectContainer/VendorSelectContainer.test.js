import React from 'react';
import { shallow } from 'enzyme';
import VendorSelectContainer from './VendorSelectContainer';
import { useSelector, useDispatch } from 'react-redux';

const mockState = {
    vendors: [{name:'vendorA', description:'selling', products:'apples'},{name:'vendorB', description:'sellin', products:'oranges'}],
  }
jest.mock("react-redux", () => ({
    useSelector: () => mockState,
    useDispatch: () => jest.fn()
}));

describe('VendorSelectContainer', () => {
    let mockAddVendors = jest.fn()
    it('should match the ZipCodeForm snapshot', () => {
        let wrapper = shallow(<VendorSelectContainer
            vendors={mockState.vendors}
            addVendors={mockAddVendors}
          />);
        expect(wrapper).toMatchSnapshot();
    })

});