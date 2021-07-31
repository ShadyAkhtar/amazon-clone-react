import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import loginLogo from "./img/Amazon_logo.svg";
function Login() {
  return (
    <div className="login">
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" className="login__logo" /> */}
      <Link to="/">
        <img src={loginLogo} alt="" className="login__logo" />
      </Link>
      <div className="login__container">
          <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" name="" id="" />
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>
          By Siging-in you agree to AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, Our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
