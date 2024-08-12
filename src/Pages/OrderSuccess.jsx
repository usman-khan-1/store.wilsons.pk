import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Button } from "react-bootstrap";

function OrderSuccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="success-box">
        <h1>Thanks For Your Order</h1>
        <p>Your Order ID is WM/*********</p>
        <p>Please Use Your Account To Get Update On Your Product</p>
        <Button href="/category">Continue Shopping</Button>
      </div>
    </Layout>
  );
}

export default OrderSuccess;
