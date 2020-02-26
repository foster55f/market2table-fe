import React from 'react';
import { shallow } from 'enzyme';
import { VendorMarketList } from './VendorMarketList';

const mockState = {
  selectedVendor: {name: 'Rolling in the dough', description: 'just a little bakery rolling in some dough', image_link: 'rollthatdough.png'}
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState,
  useDispatch: () => jest.fn()
}));

describe('VendorMarketList', () => {

  let wrapper;
  let mockAddSelectedVendor = jest.fn();
  let mockAddZipCode = jest.fn();
  let mockAddMarkets = jest.fn();
  let mockMarketsLinked;
  let mockSetMarketsLinked = jest.fn();

  it('should match the snapshot with marketsLinked', () => {
    mockMarketsLinked = [{name: 'Golden Farmers Market', id:'456'}, {name: 'Arvada Farmers Market', id:'8372'}];
    wrapper = shallow(<VendorMarketList
      addSelectedVendor={mockAddSelectedVendor}
      addZipCode={mockAddZipCode}
      addMarkets={mockAddMarkets}
      marketsLinked={mockMarketsLinked}
      setMarketsLinked={mockSetMarketsLinked}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot without marketsLinked', () => {
    mockMarketsLinked = [];
    wrapper = shallow(<VendorMarketList
      addSelectedVendor={mockAddSelectedVendor}
      addZipCode={mockAddZipCode}
      addMarkets={mockAddMarkets}
      marketsLinked={mockMarketsLinked}
      setMarketsLinked={mockSetMarketsLinked}
    />);

    expect(wrapper).toMatchSnapshot();
  });

});
