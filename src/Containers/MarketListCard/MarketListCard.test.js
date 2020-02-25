import React from 'react';
import { shallow } from 'enzyme';
import { MarketListCard } from './MarketListCard';

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
});
