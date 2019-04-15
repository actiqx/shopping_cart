import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import { connect } from 'react-redux';

import Product from './Product';
import {
  getAllProducts,
  removeItem,
  addQuantity,
  subtractQuantity
} from '../actions';
import { getVisibleProducts } from '../reducers/product_reducer';
const ProductList = ({ products }) => {
  return (
    <div>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>Items</th>
            <th>SIZE</th>
            <th>QTY</th>
            <th>PRICE</th>
          </tr>
        </MDBTableHead>
        <tbody>
          {products.map(product => (
            <Product product={product} />
          ))}
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
            <input type="button" value="CHECKOUT" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    products: getVisibleProducts(state.products)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    },
    getAllProducts: () => {
      dispatch(getAllProducts());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
