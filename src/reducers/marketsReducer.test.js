import { markets } from '../reducers/markets';

describe('markets', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = markets(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });
});

it('should return an array of markets', () => {
    const mockAction = {
      type: 'ADD_MARKETS',
      markets: [{title: 'market1'}, {title: 'market2'}]
    }
    const expected = mockAction.markets;
    const result = markets([], mockAction);
    expect(result).toEqual(expected);
  });
