import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Layout from "../containers/Layout.jsx";
import Login from "../pages/Login.jsx";
import NewPassword from "../pages/NewPassword.jsx";
import SendEmail from "../pages/SendEmail.jsx";
import MyAccount from "../pages/MyAccount.jsx";
import NewAccount from "../pages/NewAccount.jsx";
import Checkout from "../containers/Checkout.jsx";
import OrderHistory from "../pages/OrderHistory.jsx";

import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/password-recovery" element={<NewPassword />}/>
            <Route exact path="/send-email" element={<SendEmail />}/>
            <Route exact path="/account" element={<MyAccount />}/>
            <Route exact path="/signup" element={<NewAccount />}/>
            <Route exact path="/checkout" element={<Checkout />}/>
            <Route exact path="/orders" element={<OrderHistory />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;