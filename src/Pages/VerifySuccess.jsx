import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Button } from "react-bootstrap";

function VerifySuccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="success-box">
        <h1>Your Account Verify Successfully</h1>
        <p>Now You Can Login</p>
        <Button href="/login">Login</Button>
      </div>
    </Layout>
  );
}

export default VerifySuccess;
