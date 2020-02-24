import images from "./images/images";

export const getMarketsByZip = (zipCode) => {
    return fetch(process.env.REACT_APP_BACKEND_URL + `/markets?zip=${zipCode}`)
        .then(response => {
            if (!response.ok) {
                throw Error('Error fetching markets');
            }
            return response.json();
        });
}

// export const getVendorsByMarketId = (marketId) => {
//     return fetch(process.env.REACT_APP_BACKEND_URL + `/graphql?query=/`)
//         .then(response => {
//             if (!response.ok) {
//                 throw Error('Error fetching markets');
//             }
//             return response.json();
//         });
// }

export const getAllVendors = () => {
    return fetch(process.env.REACT_APP_BACKEND_URL + '/graphql?query=query{vendors{id name description image_link products{id name description price}}}')
        .then(response => {
            if (!response.ok) {
                throw Error('Error fetching vendors');
            }
            return response.json();
        });
}

export const createVendor = (name, description, image) => {
  return fetch(process.env.REACT_APP_BACKEND_URL + `/graphql?query=mutation{addVendor(name:"${name}",description: "${description}",image_link: "${image}"){id name description image_link products {id name description price}}}`)
    .then(response => {
        if (!response.ok) {
            throw Error('Error creating vendors');
        }
            return response.json();
        });
}

export const getVendorsByMarketId = (marketId) => {
    return fetch(process.env.REACT_APP_BACKEND_URL + `/graphql?query=query {
        market(id: ${marketId}) {
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
      }`)
        .then(response => {
            if (!response.ok) {
                throw Error('Error fetching markets');
            }
            return response.json();
        });
}

