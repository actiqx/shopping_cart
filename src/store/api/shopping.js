import _products from './products.json';

const TIMEOUT = 300;

export default {
  getProducts: (cb, timeout) =>
    setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
};
