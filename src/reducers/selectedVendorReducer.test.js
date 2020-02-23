import { selectedVendor } from './selectedVendor';

describe('selectedVendor', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = '';

    // Execution
    const result = selectedVendor('', '');

    // Expectation
    expect(result).toEqual(expected);
  });
});

it('should return a selectedvendor id string', () => {
    const mockAction = {
      type: 'ADD_SELECTED_VENDOR',
      id: 2,
    }
    const expected = mockAction.id;
    const result = selectedVendor('', mockAction);
    expect(result).toEqual(expected);
  });