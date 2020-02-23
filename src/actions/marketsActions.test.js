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
  
describe('actions', () => {
    it('should have a type of ADD_ZIP_CODE', () => {
      // Setup
        const zipCode = '80211'
        const expectedAction = {
            type: 'ADD_ZIP_CODE',
            zipCode: '80211'
        }
  
      // Execution
        const result = actions.addZipCode(zipCode);
  
      // Expectation
      expect(result).toEqual(expectedAction);
    });
});
  
describe('actions', () => {
    it('should have a type of ADD_SELECTED_MARKET', () => {
      // Setup
        const selectedMarketId =   2
        const expectedAction = {
            type: 'ADD_SELECTED_MARKET',
            id: 2
        }
  
      // Execution
        const result = actions.addSelectedMarket(selectedMarketId);
  
      // Expectation
      expect(result).toEqual(expectedAction);
    });
});
  
describe('actions', () => {
    it('should have a type of ADD_VENDORS', () => {
        // Setup
        const mockVendors = [
            {
                id: 1,
                name: 'Honey Farm',
                description: 'Making the best honey',
                image: 'https://imgur.com/a/rkU6TOd',
                products: [{
                    id: 1,
                    name: 'apples',
                    description: 'red',
                    price: 1.99
                },
                {
                    id: 2,
                    name: 'oranges',
                    description: 'orange',
                    price: 2.99
                }]
          
            },
            {
                id: 2,
                name: 'Cheese Creamery',
                description: 'The best curddled cheese around',
                image: 'https://imgur.com/a/rkU6TOd',
                products: [{
                    id: 1,
                    name: 'apples',
                    description: 'red',
                    price: 1.99
                },
                {
                    id: 2,
                    name: 'oranges',
                    description: 'orange',
                    price: 2.99
                }]
            },
        ]
        const expectedAction = {
            type: 'ADD_VENDORS',
            vendors: mockVendors
        }
  
      // Execution
        const result = actions.addVendors(mockVendors);
  
      // Expectation
      expect(result).toEqual(expectedAction);
    });
  });