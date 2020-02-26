import React from 'react';
import { shallow } from 'enzyme';
import { Market } from './Market';
import { addSelectedMarket } from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn()
}));

describe('Market', () => {
  let dispatch = useDispatch();
  let mockAddSelectedMarket = jest.fn();
  let mockId = '321';
  let mockName = 'Frog Leap Farm';
  let wrapper;

  it('should match the snapshot with the id and name passed in', () => {
    wrapper = shallow(<Market
        id={mockId}
        name={mockName}
        addSelectedMarket={mockAddSelectedMarket}
        />);

      expect(wrapper).toMatchSnapshot()
  });

  it.skip('should invoke addSelectedMarket with an id on click', () => {
    wrapper = shallow(<Market
        id={mockId}
        name={mockName}
        addSelectedMarket={mockAddSelectedMarket}
        />);
    wrapper.find('.market-article').simulate('click');
    expect(dispatch).toHaveBeenCalled();
  });

})
