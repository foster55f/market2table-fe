import { zipCode } from '../reducers/zipCode';
import { markets } from '../reducers/markets';
import { selectedMarket } from '../reducers/selectedmarket';
import { selectedVendor } from '../reducers/selectedVendor';
import { vendors } from '../reducers/vendors';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  zipCode,
  markets,
  selectedMarket,
  vendors,
  selectedVendor
});
