import { zipCode } from '../reducers/zipCode';
import { markets } from '../reducers/markets';
import { selectedMarket } from '../reducers/selectedmarket';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  zipCode,
  markets,
  selectedMarket
});
