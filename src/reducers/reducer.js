import { zipCode } from '../reducers/zipCode';
import { markets } from '../reducers/markets';
import { selectedMarket } from '../reducers/selectedmarket';
import { vendors } from '../reducers/vendors';
import { selectedVendor } from '../reducers/selectedVendor';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  zipCode,
  markets,
  selectedMarket,
  vendors,
  selectedVendor
});
