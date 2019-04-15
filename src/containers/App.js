import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Your Shopping Cart</h3>
        <small>
          If the cart is completely empty then we shall again add back the
          products for you
        </small>
        <hr />
        <ProductsContainer />
        <hr />
      </div>
    );
  }
}

export default App;
