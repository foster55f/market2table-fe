import React from 'react';
import { shallow } from 'enzyme';
import VendorSelectCard from './VendorSelectCard';
import { useSelector, useDispatch } from 'react-redux';


jest.mock("react-redux", () => ({
    useDispatch: () => jest.fn()
}));

describe('VendorSelectCard', () => {
    let mockAddSelectedVendor = jest.fn();
    let mockId = 2;
    let mockName = 'foster';
    let mockVendor = 'fosters booth';
    
    it('should match the VendorSelectCard snapshot', () => {
        let wrapper = shallow(<VendorSelectCard
            id={mockId}
            name={mockName}
            vendor={mockVendor}
            addSelectedVendor={mockAddSelectedVendor}
          />);
        expect(wrapper).toMatchSnapshot();
    })

});