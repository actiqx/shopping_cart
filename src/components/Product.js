import React, { useState } from 'react';
import EditProductModal from './EditProductModal';

const Product = ({ product, removeProduct }) => {
  const initialState = {
    modal: false
  };
  const [modalState, setModalstate] = useState(initialState);

  const editModalOpen = () => {
    setModalstate({
      modal: !modalState.modal
    });
  };
  return (
    <tr key={product.id}>
      <th>
        <div className="product_cont">
          <div className="cart_img">
            <img src={product.image} alt="" />
          </div>
          <div>
            <div className="title">{product.title}</div>
            <div className="style">Style # :{product.style}</div>
            <div className="color">Color: {product.color}</div>
            <div className="action">
              <input
                type="button"
                value="Edit"
                className="btn btn-link"
                onClick={editModalOpen}
              />
              <input
                type="button"
                value="X Remove"
                className="btn btn-link"
                onClick={() => removeProduct(product)}
              />
              <input
                type="button"
                value="SAVE FOR LATER"
                className="btn btn-link"
              />
            </div>
          </div>
        </div>
      </th>
      <th>{product.size}</th>
      <th>
        <input type="text" className="quantity" />
      </th>
      <th>
        {product.disc_price === 0 ? (
          `$ ${product.mrp}`
        ) : (
          <div>
            <s>${product.mrp}</s>${product.disc_price}
          </div>
        )}
      </th>
      <EditProductModal
        isOpen={modalState.modal}
        product={product}
        toggle={editModalOpen}
      />
    </tr>
  );
};

export default Product;
