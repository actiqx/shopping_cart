import React, { Component } from 'react';
import { MDBTable, MDBTableHead } from 'mdbreact';

import { connect } from 'react-redux';

import Product from './Product';
import { loadCart, removeProduct } from '../store/actions';

class ProductList extends Component {
  componentDidMount() {
    this.props.loadCart();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }
  removeProduct = product => {
    const { products, updateCart } = this.props;
    const index = products.findIndex(p => p.id === product.id);
    if (index >= 0) {
      products.splice(index, 1);
    }
  };
  render() {
    const { products, total, removeProduct } = this.props;

    return (
      <div>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>{total}Items</th>
              <th>SIZE</th>
              <th>QTY</th>
              <th>PRICE</th>
            </tr>
          </MDBTableHead>
          <tbody>
            {products.length > 0 ? (
              products.map(product => (
                <Product
                  product={product}
                  removeProduct={removeProduct}
                  key={product.id}
                />
              ))
            ) : (
              <tr>
                <td> OOPS !!! Something Went wrong</td>
              </tr>
            )}
          </tbody>
        </MDBTable>
        <div className="horizontal" />
        <div className="row">
          <div className="col-md-2 cust">
            <div className="">Need help or have questions?</div>
            <div className="cc">
              <p>Call CustomerService at</p>
              <p>1-800-555-555</p>
              <p>Chat with one of our stylist</p>
              <a href="#">See return or exchange policy</a>
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6">ENTER PROMOTION CODE OR GIFT CARD</div>
              <div className="col-md-6">
                <input type="text" />
                <input type="button" value="APPLY" />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">SUBTOTAL</div>
              <div className="col-md-6">59</div>
              <div className="col-md-6">PROMO CODE APPLIED</div>
              <div className="col-md-6">$5.9</div>
              <div className="col-md-6">ESTIMATED SHIPPING*</div>
              <div className="col-md-6">FREE</div>
              <div className="col-md-6">ESTIMATED TOTAL</div>
              <div className="col-md-6">$53</div>
            </div>
            <div className="horizontal" />
            <div>
              <input
                type="button"
                value="CONTINUE SHOPPING"
                className="btn btn-link"
              />
              <input
                type="button"
                value="CHECKOUT"
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products.products,
    productToRemove: state.products.productToRemove
  };
};

export default connect(
  mapStateToProps,
  { loadCart, removeProduct }
)(ProductList);
