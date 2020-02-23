export const addZipCode = zipCode => ({
  type: 'ADD_ZIP_CODE',
  zipCode
});

export const addMarkets = markets => ({
  type: 'ADD_MARKETS',
  markets
});

export const addSelectedMarket = id => ({
  type: 'ADD_SELECTED_MARKET',
  id
});

export const addVendors = vendors => ({
  type: 'ADD_VENDORS',
  vendors
});

export const addSelectedVendor = id => ({
  type: 'ADD_SELECTED_VENDOR',
  id
});
