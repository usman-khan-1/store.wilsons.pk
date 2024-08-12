import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Button } from "react-bootstrap";

function RegistrationSuccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="success-box">
        <h1>Thanks For Registration</h1>
        <p>Please Check Your Email For Account Verifictaion</p>
        <Button href="/login">Login</Button>
      </div>
    </Layout>
  );
}

export default RegistrationSuccess;
