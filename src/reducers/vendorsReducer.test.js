import { vendors } from '../reducers/vendors';

describe('vendors', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = vendors(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });
});

it('should return an array of vendors', () => {
    const mockAction = {
      type: 'ADD_VENDORS',
      vendors: [
        {id:1,
          name: 'Honey Farm',
          description: 'Making the best honey',
          image: 'https://imgur.com/a/rkU6TOd',
          products: [{
            id: 1,
            name:'apples',
            description:'red',
            price: 1.99
          },
          {
            id: 2,
            name:'oranges',
            description:'orange',
            price:2.99}]
      
        }],
    }
    const expected = mockAction.vendors;
    const result = vendors([], mockAction);
    expect(result).toEqual(expected);
  });