import React from 'react';
import { shallow } from 'enzyme';
import { VendorCard } from './VendorCard';
import { useSelector, useDispatch } from 'react-redux';

const mockState = {
  zipCode: '80401',
  selectedMarket: '1923782',
  vendors: [{name: 'Friendly Famrs', id:'1923782', image_link: 'image.png'}]
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState,
  useDispatch: () => jest.fn()
}));

describe('VendorCard', () => {

  let wrapper;
  let mockAddSelectedVendor = jest.fn();
  let mockId = '1231';
  let mockName = 'Friendly Farms';
  let mockDescription = 'A very friendly farm';
  let mockImage = 'friendlyfarm.png';
  let mockHistory = {push: jest.fn()};

  it('should match the snapshot', () => {
    wrapper = shallow(<VendorCard
        addSelectedVendor={mockAddSelectedVendor}
        id={mockId}
        name={mockName}
        description={mockDescription}
        image={mockImage}
        history={mockHistory}
      />);

    expect(wrapper).toMatchSnapshot();
  });
  it("Should onClick invoke history.push and push to path", () => {
    wrapper.find('.vendor-card').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith("/markets/1923782/vendors/1231")
  });
});
