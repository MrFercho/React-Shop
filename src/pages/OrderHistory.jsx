import React from 'react';
import Order from '../components/Order';
import '../styles/OrderHistory.scss';

const OrderHistory = () => {
  return (
    <div className="OrderHistory">
      <div className="OrderHistory-container">
        <h1 className="title">My orders</h1>
        <div className="OrderHistory-content">
          <Order />
        </div>
      </div>
    </div>

  );
}

export default OrderHistory;