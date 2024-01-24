// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Login.css'; // Import your CSS file for styling
import fendu from "./../Components/Chess.jpg";
const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src={fendu} alt='' className='bg'/>
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form>
            {/* <label htmlFor="username">Username:</label> */}
            <input type="text" id="username" name="username" placeholder='username' />

            {/* <label htmlFor="password">Password:</label> */}
            <input type="password" id="password" name="password" placeholder='password' />

            <button type="submit" className='Loginbutton'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
