const axios = require('axios').default;

export const FakeStoreClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
});
