// import React from "react";
import { Link } from "react-router-dom";
import React from "react";
const UserLogin = () => {
  return (
    <div>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <form>
        <div className="container">
          <h1>User Login</h1>
          <div className="input-field">
            <input type="text" placeholder="Email" required />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" required />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="forgot-link">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forgot password?">Forgot Password?</Link>
          </div>
          <button className="btn">Login</button>
          <div className="register-link login-link">
            <p>Don't have an account?</p>
            <Link to="/userregistration">Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
