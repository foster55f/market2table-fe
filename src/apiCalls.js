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
  const mutation = {"query":`mutation{addVendor(name: "${name}", description: "${description}", image_link: "${image}"){id}}`}
  const options = {
    method: 'POST',
    body: JSON.stringify(mutation),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }

  return fetch(process.env.REACT_APP_BACKEND_URL + `/graphql`, options)
    .then(response => {
        if (!response.ok) {
            throw Error('Error creating vendors');
        }
        return response.json();
    });
}

export const createProduct = (name, description, price, vendorId) => {
  const mutation = {"query":`mutation{addProduct(name: "${name}", description: "${description}", price: ${price}, vendor_id: ${vendorId}){id}}`}

  const options = {
    method: 'POST',
    body: JSON.stringify(mutation),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }

  return fetch(process.env.REACT_APP_BACKEND_URL + `/graphql`, options)
    .then(response => {
        if (!response.ok) {
            throw Error('Error creating product');
        }
        return response.json();
    });
}
