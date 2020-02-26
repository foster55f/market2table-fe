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
  let mockAddZipCode = jest.fn();
  let mockAddMarkets = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ZipCodeForm
        path='/markets'
        opacity={0}
        zipCode={mockState.zipCode}
        addMarkets={mockAddMarkets}
        addZipCode={mockAddZipCode}
      />);
  });

  it('should match the ZipCodeForm snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the ZipCodeForm snapshot', () => {
    wrapper = shallow(<ZipCodeForm
      path='/foster'
      opacity={.9}
      zipCode={mockState.zipCode}
      addMarkets={mockAddMarkets}
      addZipCode={mockAddZipCode}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should have a default state on zipCode input of ''", () => {
    expect(wrapper.find('.zip-code-input').prop('value')).toEqual('');
  });

  it("Should invoke handleChange and update state if value is less than 6 on zip code input", () => {
    wrapper.find('.zip-code-input').simulate('change', {target: {value: '80401'}});
    expect(wrapper.find('.zip-code-input').prop('value')).toEqual('80401');
  });

  it("Should onKeyDown invoke handlesubmit and reset zip code input to '' if input.length is 5", () => {
    wrapper.find('.zip-code-input').simulate('change', {target: {value: '80401'}});
    expect(wrapper.find('.zip-code-input').prop('value')).toEqual('80401');
    wrapper.find('.zip-code-input').simulate('keyDown', {key: 'Enter', preventDefault: jest.fn()});
    expect(wrapper.find('.zip-code-input').prop('value')).toEqual('');
  });

  it("Should onKeyDown invoke handlesubmit and reset zip code input to '' if input.length is 5", () => {
    wrapper.find('.zip-code-input').simulate('change', {target: {value: '80'}});
    expect(wrapper.find('.zip-code-input').prop('value')).toEqual('80');
    wrapper.find('.zip-code-input').simulate('keyDown', {key: 'Enter', preventDefault: jest.fn()});
    expect(wrapper.find('.zip-code-input').prop('value')).toEqual('');
    expect(wrapper.find('.error-message').prop('hidden')).toEqual(false);
  });

  it("should have a default value of false for hasError", () => {
    expect(wrapper.find('.error-message').prop('hidden')).toEqual(true);
  });

  it("Should onClick invoke handlesubmit and reset zip code input to '' if input.length is 5", () => {
    wrapper.find('.zip-code-input').simulate('change', {target: {value: '80401'}});
    expect(wrapper.find('.zip-code-input').prop('value')).toEqual('80401');
    wrapper.find('.submit-zip-code-button').simulate('click');
    expect(wrapper.find('.zip-code-input').prop('value')).toEqual('');
  });

  it("Should onKeyDown invoke handlesubmit and reset zip code input to '' if input.length is 5", () => {
    wrapper.find('.zip-code-input').simulate('change', {target: {value: '80'}});
    expect(wrapper.find('.zip-code-input').prop('value')).toEqual('80');
    wrapper.find('.submit-zip-code-button').simulate('click');
    expect(wrapper.find('.zip-code-input').prop('value')).toEqual('');
    expect(wrapper.find('.error-message').prop('hidden')).toEqual(false);
  });

  it("should have a value of true for hasError when not length of 5 and then set to false on input change", () => {
    wrapper.find('.zip-code-input').simulate('change', {target: {value: '80'}});
    wrapper.find('.submit-zip-code-button').simulate('click');
    expect(wrapper.find('.error-message').prop('hidden')).toEqual(false);
    wrapper.find('.zip-code-input').simulate('change', {target: {value: '80401'}});
    expect(wrapper.find('.error-message').prop('hidden')).toEqual(true);
  });
});
