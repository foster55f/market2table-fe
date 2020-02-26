import React from 'react';
import { shallow } from 'enzyme';
import ZipCodeForm from './ZipCodeForm';
import { useSelector, useDispatch } from 'react-redux';

const mockState = {
    zipCode: '80211',
  }
jest.mock("react-redux", () => ({
    useSelector: () => mockState,
    useDispatch: () => jest.fn()
}));

describe('ZipCodeForm', () => {
    let mockAddZipCode = jest.fn()
    let mockAddMarkets = jest.fn()
    it('should match the ZipCodeForm snapshot', () => {
        let wrapper = shallow(<ZipCodeForm
            path='/markets'
            opacity={0}
            zipCode={mockState.zipCode}
            addMarkets={mockAddMarkets}
            addZipCode={mockAddZipCode}
          />);
        expect(wrapper).toMatchSnapshot();
    })

    it('should match the ZipCodeForm snapshot', () => {
        let wrapper = shallow(<ZipCodeForm
            path='/foster'
            opacity={.9}
            zipCode={mockState.zipCode}
            addMarkets={mockAddMarkets}
            addZipCode={mockAddZipCode}
          />);
        expect(wrapper).toMatchSnapshot();
    })
});
