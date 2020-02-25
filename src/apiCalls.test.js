import { getMarketsByZip, getAllVendors, getAllMarketVendors, getMarketsByVendor, deleteMarketVendorLink, getVendorsByMarketId, createVendor } from './apiCalls';



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

  it('should return an array of farmers markets by zip codes', () => {
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

        it('should return an array vendors', () => {
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

        it('should return an vendors by market', () => {
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
    
describe('getMarketsByVendor', () => {
    let mockId = 1
    let mockResponse = [{
        id:1,
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
        getMarketsByVendor(mockId)
        expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + `/graphql?query=query{vendor(id: ${mockId}){markets{id name}}}`);
        })

        it('should return an array of farmers markets', () => {
            expect(getMarketsByVendor()).resolves.toEqual(mockResponse);
        })

        it('should return an error for response that is not ok', () => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: false
                });
            });
            expect(getMarketsByVendor()).rejects.toEqual(Error('Error fetching markets'))
        })
})
    
    describe('deleteMarketVendorLink', () => {
        let mockId = 1
        let mockResponse = [{
            id:2,
            name: "Highland Farmers",
            description: "1500 Boulder Street, Denver, Colorado, 80211"
        },
        {   id:1,
            name: "Farmers",
            address: "1500 hello Street, Denver, Colorado, 80211"
        }
        ]

        const mutation = {
            "query": `
        mutation{deleteMarketVendor(id: ${mockId})}`
        }

        let mockOptions =  {
            method: 'POST',
            body: JSON.stringify(mutation),
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }
          }
    
    
      beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
      });
    
        it.skip('should be passed the correct url', () => {
            deleteMarketVendorLink(mockId)
            expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + `/graphql`, mockOptions);
            })
    
        it('should delete vendor markets', () => {
            expect(deleteMarketVendorLink()).resolves.toEqual(mockResponse);
            })
    
        it('should return an error for response that is not ok', () => {
                window.fetch = jest.fn().mockImplementation(() => {
                    return Promise.resolve({
                        ok: false
                    });
                });
                expect(deleteMarketVendorLink()).rejects.toEqual(Error('Error deleting'))
            })
        })
    
    describe('getVendorsByMarketId', () => {
        let mockId = 1
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
    
        it.skip('should be passed the correct url', () => {
            getVendorsByMarketId(mockId)
            expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + `/graphql?query=query {
                market(id: ${mockId}) {
                vendors {
                  id
                  name
                  description
                  image_link
                  products{
                      id
                      name
                      description
                      price
                    }
                  }
                }
              }`);
            })
    
            it('should return an array of farmers markets', () => {
                expect(getVendorsByMarketId()).resolves.toEqual(mockResponse);
            })
    
            it('should return an error for response that is not ok', () => {
                window.fetch = jest.fn().mockImplementation(() => {
                    return Promise.resolve({
                        ok: false
                    });
                });
                expect(getVendorsByMarketId()).rejects.toEqual(Error('Error fetching markets'))
            })
    })

    describe('createVendor', () => {
        let mockId = 1
        let mockVendor = {
            name: "Highland Farmers",
            description: "1500 Boulder Street, Denver, Colorado, 80211",
            image: 'http'
        }

        const mutation = {
            "query": `
        mutation{deleteMarketVendor(id: ${mockId})}`
        }

        let options =  {
            method: 'POST',
            body: JSON.stringify(mutation),
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }
        }
    
      beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
      });
    
        it.skip('should be passed the correct url', () => {
            createVendor(mockVendor.name, mockVendor.description, mockVendor.image)
            expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + `/graphql`, options);
            })
    
            it('should create a vendor', () => {
                expect(createVendor()).resolves.toEqual(mockVendor);
            })
    
            it('should return an error for response that is not ok', () => {
                window.fetch = jest.fn().mockImplementation(() => {
                    return Promise.resolve({
                        ok: false
                    });
                });
                expect(createVendor()).rejects.toEqual(Error('Error creating vendor'))
            })
    })
    
