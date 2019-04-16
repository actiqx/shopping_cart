import React from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
const EditProductModal = props => {
  const { product, isOpen, toggle } = props;
  return (
    <MDBModal isOpen={isOpen}>
      <MDBModalHeader toggle={toggle}>Edit Product</MDBModalHeader>
      <MDBModalBody>
        <div className="row">
          <div className="col-md-6">
            <div className="center">
              <div className="etitle">{product.title}</div>
              <div className="emrp">${product.mrp}</div>
              <div className="estyle">{product.style}</div>
              <div className="ecolor">Color:{product.color}</div>
              <select name="" id="" className="dropdown">
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
              </select>
              <input type="text" className="quantity" />
              <MDBBtn color="primary">Save changes</MDBBtn>
              <input
                type="button"
                value={product.quantity}
                className="btn btn-link"
              />
            </div>
          </div>
          <div className="col-md-6">image</div>
        </div>
      </MDBModalBody>
    </MDBModal>
  );
};

export default EditProductModal;
