import { getMarketsByZip, getAllVendors, getAllMarketVendors } from './apiCalls';



describe('getMarketsByZip', () => {
    let mockZip='80211'
    let mockResponse = [{
        id: "1002312",
        name: "Highland Farmers Market",
        address: "1500 Boulder Street, Denver, Colorado, 80211",
        google_link: "http://maps.google.com/?q=39.758540%2C%20-105.011230%20(%22Highland+Farmers+Market%22)",
        latitude: "39.758540",
        longitude: "-105.011230",
        schedule: "June 2, 2012 to October 13, 2012 Sat:9:00 AM - 1:00 PM;<br> <br> <br> "
    },
    {
        id: "1002344",
        name: "Farmers Market",
        address: "1500 hello Street, Denver, Colorado, 80211",
        google_link: "http://maps.google.com/?q=39.758540%2C%20-105.011230%20(%22Highland+Farmers+Market%22)",
        latitude: "39.785540",
        longitude: "-105.012130",
        schedule: "June 4, 2012 to October 13, 2012 Sat:9:00 AM - 1:00 PM;<br> <br> <br> "
    }
    ]


  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should be passed the correct url', () => {
    getMarketsByZip(mockZip)
    expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + `/markets?zip=${mockZip}`);
  })

  it('should return an array of farmers markets', () => {
    expect(getMarketsByZip()).resolves.toEqual(mockResponse);
  })

  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getMarketsByZip()).rejects.toEqual(Error('Error fetching markets'))
  })
})

describe('getAllVendors', () => {
    let mockResponse = [{
        name: "Highland Farmers",
        description: "1500 Boulder Street, Denver, Colorado, 80211"
    },
    {
        name: "Farmers",
        address: "1500 hello Street, Denver, Colorado, 80211"
    }
    ]


  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

    it('should be passed the correct url', () => {
        getAllVendors()
        expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + '/graphql?query=query{vendors{id name description image_link products{id name description price}}}');
        })

        it('should return an array of farmers markets', () => {
            expect(getAllVendors()).resolves.toEqual(mockResponse);
        })

        it('should return an error for response that is not ok', () => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: false
                });
            });
            expect(getAllVendors()).rejects.toEqual(Error('Error fetching vendors'))
        })
})
    
describe('getAllMarketVendors', () => {
    let mockResponse = [{
        name: "Highland Farmers",
        description: "1500 Boulder Street, Denver, Colorado, 80211"
    },
    {
        name: "Farmers",
        address: "1500 hello Street, Denver, Colorado, 80211"
    }
    ]


  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

    it('should be passed the correct url', () => {
        getAllMarketVendors()
        expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + '/graphql?query=query{market_vendors{id market{id name}vendor{id name}}}');
        })

        it('should return an array of farmers markets', () => {
            expect(getAllMarketVendors()).resolves.toEqual(mockResponse);
        })

        it('should return an error for response that is not ok', () => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: false
                });
            });
            expect(getAllMarketVendors()).rejects.toEqual(Error('Error fetching vendors'))
        })
    })

