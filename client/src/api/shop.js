/**
 * Mocking client-server processing
 */
// import _products from './products.json'
import API from '../utils/API';

const TIMEOUT = 100

const _products = () => {
    API.getItems()
}

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
