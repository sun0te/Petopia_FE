import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import LoginComponent from "../Components/LoginComponent.js";

const Login = () => {
  return (
    <>
      <BgLeft />
      <main>
        <Header />
        <section>
          <LoginComponent />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Login;
