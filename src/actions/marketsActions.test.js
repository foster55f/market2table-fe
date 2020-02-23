import * as actions from '../actions';

describe('actions', () => {
    it('should have a type of ADD_MARKETS', () => {
      // Setup
        const mockMarkets = [
        {
            id: 2,
            name:'oranges',
            description:'orange',
    
        },
        {
        id: 3,
        name:'apple market',
        description:'apples',
  
        },
    ]
        const expectedAction = {
        type: 'ADD_MARKETS',
        markets: [
        {
            id: 2,
            name:'oranges',
            description:'orange',
    
        },
        {
            id: 3,
            name:'apple market',
            description:'apples',
      
        }]
        };
  
      // Execution
      const result = actions.addMarkets(mockMarkets);
  
      // Expectation
      expect(result).toEqual(expectedAction);
    });
  });