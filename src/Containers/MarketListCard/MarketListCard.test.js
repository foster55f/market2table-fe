import React from 'react';
import { shallow } from 'enzyme';
import { MarketListCard } from './MarketListCard';
import { createMarketVendorLink, deleteMarketVendorLink, getAllMarketVendors } from '../../apiCalls';

jest.mock('../../apiCalls.js');

describe('MarketListCard', () => {

  let wrapper;
  let mockvendorId = '234';
  let mockName = 'Golden Farmers Market';
  let mockId = '456';
  let mockMarketsLinked = [{name: 'Golden Farmers Market', id:'456'}, {name: 'Arvada Farmers Market', id:'8372'}];
  let mockSetMarketsLinked = jest.fn();
  let mockVendorDescription = 'A farm specializing in miniture sized produce';

  it('should match the snapshot with a vendor description', () => {
    wrapper = shallow(<MarketListCard
      vendorId={mockvendorId}
      name={mockName}
      id={mockId}
      marketsLinked={mockMarketsLinked}
      setMarketsLinked={mockSetMarketsLinked}
      vendorDescription={mockVendorDescription}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke handleSubmitAdd on add button click', async () => {
    wrapper = shallow(<MarketListCard
      vendorId={mockvendorId}
      name={mockName}
      id={mockId}
      marketsLinked={mockMarketsLinked}
      setMarketsLinked={mockSetMarketsLinked}
      vendorDescription={mockVendorDescription}
    />);
    createMarketVendorLink.mockImplementation(() => {
      return Promise.resolve(
        { data: {id: '13212'} }
      );
    });
    wrapper.find('.market-list-card-add-button').simulate('click');
    await tick();
    expect(mockSetMarketsLinked).toHaveBeenCalledWith([
      { name: 'Golden Farmers Market', id: '456' },
      { name: 'Arvada Farmers Market', id: '8372' },
      { id: '456', name: 'Golden Farmers Market' }
    ]);
  });

  it('should match the snapshot without a vendor description', () => {
    wrapper = shallow(<MarketListCard
      vendorId={mockvendorId}
      name={mockName}
      id={mockId}
      marketsLinked={mockMarketsLinked}
      setMarketsLinked={mockSetMarketsLinked}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke handleSubmitAdd on add button click', async () => {
    wrapper = shallow(<MarketListCard
      vendorId={mockvendorId}
      name={mockName}
      id={mockId}
      marketsLinked={mockMarketsLinked}
      setMarketsLinked={mockSetMarketsLinked}
    />);
    getAllMarketVendors.mockImplementation(() => {
      return Promise.resolve(
        { data: {market_vendors: [{market: {id: '456'}, vendor: {id: '234'}, id: '1231'}, {market: {id: '546'}, vendor: {id: '686'}, id: '9876'}]} }
      );
    });
    deleteMarketVendorLink.mockImplementation(() => {
      return Promise.resolve(
        'Successful delete'
      );
    });
    wrapper.find('.market-list-card-remove-button').simulate('click');
    await tick();
    expect(mockSetMarketsLinked).toHaveBeenCalledWith([ { name: 'Arvada Farmers Market', id: '8372' } ])
  });

  function tick() {
    return new Promise(resolve => {
      setTimeout(resolve, 0);
    })
  }
});
