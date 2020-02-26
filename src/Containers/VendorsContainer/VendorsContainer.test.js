import React from 'react';
import { shallow } from 'enzyme';
import VendorsContainer from './VendorsContainer';
import { useSelector, useDispatch } from 'react-redux';

const mockState = {
    vendors: [{name:'vendorA', description:'selling', products:'apples'},{name:'vendorB', description:'sellin', products:'oranges'}],
  }

jest.mock("react-redux", () => ({
    useSelector: () => mockState,
}));

describe('VendorsContainer', () => {
    let mockHistory = {
        path:'/markets'
    };
    
    it('should match the VendorsContainer snapshot', () => {
        let wrapper = shallow(<VendorsContainer
            vendors={mockState.vendors}
            history={mockHistory}
          />);
        expect(wrapper).toMatchSnapshot();
    })

});