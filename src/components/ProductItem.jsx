import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
  const [ cart, setCart] = useState('Hola');
  const handleCart = () => {
    setCart('Hola Mundo');
  }
  return (
    <div className="ProductItem-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt />
      <div className="ProductItem-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleCart}>
          <img src={addToCartIcon} alt />
        </figure>
        {cart}
      </div>
    </div>
  );
}
export default ProductItem;