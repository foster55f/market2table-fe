import React from 'react';
import { shallow } from 'enzyme';
import { VendorForm } from './VendorForm';

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

  it('should match the snapshot', () => {
    wrapper = shallow(<VendorForm
      addVendors={mockAddVendors}
      addSelectedVendor={mockAddSelectedVendor}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
