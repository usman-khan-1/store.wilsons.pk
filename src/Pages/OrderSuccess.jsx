import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function OrderSuccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
console.log("location",location.state)
const { order_id } = location.state || {};
  return (
    <Layout>
      <div className="success-box">
        <h1>Thanks For Your Order</h1>
        <p>Your Order ID  </p>
        <h1 className="text-primary">{order_id}</h1>
        <p>Please Use Your Account To Get Update On Your Product</p>
        <Button href="/">Continue Shopping</Button>
      </div>
    </Layout>
  );
}

export default OrderSuccess;
