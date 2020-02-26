import React from 'react';
import { shallow } from 'enzyme';
import VendorLinkContainer from './VendorLinkContainer';

describe('VendorLinkContainer', () => {

  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<VendorLinkContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});
