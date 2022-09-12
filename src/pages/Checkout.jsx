import React from 'react';
import ShoppingCartItem from '@components/ShoppingCartItem.jsx';
import '@styles/Checkout.scss'

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
          <ShoppingCartItem />//As I think here must be the shopping cart item, let's c why shows me Order Item
        </div>
      </div>
    </div>
  );
}

export default Checkout;