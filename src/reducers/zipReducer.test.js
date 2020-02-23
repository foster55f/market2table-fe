import { vendors } from '../reducers/vendors';
import { zipCode } from './zipCode';

describe('zipCode', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = '';

    // Execution
    const result = zipCode('', '');

    // Expectation
    expect(result).toEqual(expected);
  });
});

it('should return a zipcode string', () => {
    const mockAction = {
      type: 'ADD_ZIP_CODE',
      zipCode: '80211',
    }
    const expected = mockAction.zipCode;
    const result = zipCode('', mockAction);
    expect(result).toEqual(expected);
  });