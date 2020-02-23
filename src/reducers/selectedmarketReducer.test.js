import { selectedMarket } from './selectedmarket';

describe('selectedmarket', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = '';

    // Execution
    const result = selectedMarket('', '');

    // Expectation
    expect(result).toEqual(expected);
  });
});

it('should return a selectedmarket id string', () => {
    const mockAction = {
      type: 'ADD_SELECTED_MARKET',
      id: 2,
    }
    const expected = mockAction.id;
    const result = selectedMarket('', mockAction);
    expect(result).toEqual(expected);
  });