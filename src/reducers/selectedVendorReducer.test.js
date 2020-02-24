import { selectedVendor } from './selectedVendor';

describe('selectedVendor', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = {};

    // Execution
    const result = selectedVendor({}, {});

    // Expectation
    expect(result).toEqual(expected);
  });
});

it('should return a selectedvendor object', () => {
    const mockAction = {
      type: 'ADD_SELECTED_VENDOR',
      vendor:{name:'farmer', description:'selling'}
    }
    const expected = mockAction.vendor;
    const result = selectedVendor({name:'farmer', description:'selling'}, mockAction);
    expect(result).toEqual(expected);
  });