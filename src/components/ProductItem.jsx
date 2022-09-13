import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const [ cart, setCart] = useState([]);
  const handleCart = () => {
    setCart([]);
  }
  return (
    <div className="ProductItem-card">
      <img src={product.images[0]} alt={product.title} />
      <div className="ProductItem-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleCart}>
          <img src={addToCartIcon} alt />
        </figure>
      </div>
    </div>
  );
}
export default ProductItem;