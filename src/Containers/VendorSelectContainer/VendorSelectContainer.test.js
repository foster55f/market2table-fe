import React, { useEffect } from 'react';
import { shallow } from 'enzyme';
import VendorSelectContainer from './VendorSelectContainer';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { getAllVendors } from '../../apiCalls';

jest.mock('../../apiCalls.js');

const mockState = [{name:'vendorA', description:'selling', products:'apples', id:'123'},{name:'vendorB', description:'sellin', products:'oranges', id: '9898'}]

jest.mock("react-redux", () => ({
    useSelector: () => mockState,
    useDispatch: () => jest.fn()
}));

describe('VendorSelectContainer', () => {
    let mockAddVendors = jest.fn()
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<VendorSelectContainer
        addVendors={mockAddVendors}
      />);
    });

    it('should match the VendorSelectContainer snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("Should load with an initial state of '' for the search vendors input", () => {
      expect(wrapper.find('.search-vendors-input').text()).toEqual('');
    });

    it("Should load with an initial state of false for searchError", () => {
      expect(wrapper.find('.vendor-search-error').prop('hidden')).toEqual(true);
    });

    it("Should set input to '' on clear button click", () => {
      wrapper.find('.search-vendors-input').simulate('change', {target: { value: 'Farm'}});
      wrapper.find('.search-clear-button').simulate('click');
      expect(wrapper.find('.search-vendors-input').text()).toEqual('');
    });

    it("Should set state on change of input", () => {
      wrapper.find('.search-vendors-input').simulate('change', {target: { value: 'Farm'}});
      expect(wrapper.find('.search-vendors-input').prop('value')).toEqual('Farm');
    });

    it("Should set search error to false on change of input", () => {
      wrapper.find('.search-vendors-input').simulate('change', {target: { value: 'Farm'}});
      expect(wrapper.find('.vendor-search-error').prop('hidden')).toEqual(true);
    });

    it('should invoke searchInputHandler when pressing enter', () => {
      wrapper.find('.search-vendors-input').simulate('change', {target: {value: ''}});
      expect(wrapper.find('.search-vendors-input').prop('value')).toEqual('');
      wrapper.find('.search-vendors-input').simulate('keyDown', {key: 'Enter', preventDefault: jest.fn()});
      expect(wrapper.find('.vendor-search-error').prop('hidden')).toEqual(false);
    });

    it("Should set hidden to false if button is clicked with no info in input", () => {
      expect(wrapper.find('.search-vendors-input').text()).toEqual('');
      wrapper.find('.search-vendors-submit-button').simulate('click');
      expect(wrapper.find('.vendor-search-error').prop('hidden')).toEqual(false);
    });

    it("Should set search error to false on clear button click", () => {
        expect(wrapper.find('.search-vendors-input').text()).toEqual('');
        wrapper.find('.search-vendors-submit-button').simulate('click');
        expect(wrapper.find('.vendor-search-error').prop('hidden')).toEqual(false);
        wrapper.find('.search-clear-button').simulate('click');
        expect(wrapper.find('.vendor-search-error').prop('hidden')).toEqual(true);
    });

});
