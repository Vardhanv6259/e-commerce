import React from "react";
import { Link } from "react-router-dom";

const UserRegistration = () => {
  return (
    <div>
      <form>
        <div className="container">
          <h1>Register</h1>
          <div className="input-field">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Email" required />
          </div>
          <div className="input-field">
            <input type="number" placeholder="Phone" required />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Re-enter Password" required />
          </div>
          <div className="gend">
            <label>
              <input type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" />
              Female
            </label>
          </div>
          <div className="verify-merchant">
            <center>
              <input type="checkbox" />
              Merchant?
            </center>
          </div>
          <button type="submit" className="btn">
            SignUp
          </button>
          <div className="register-link">
            <p>Already have an account!</p>
            <Link to="/">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
