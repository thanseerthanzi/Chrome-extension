import React, { useState } from 'react';
import './login.css'; // Import CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Your backend API endpoint for user authentication
    const apiEndpoint = 'https://your-backend-api.com/login';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successfully logged in, you can redirect the user or perform other actions
        console.log('Login successful');
      } else {
        // Handle login failure, show error message or perform other actions
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
  
    <div className="bg1 ">
      <div className="row flex">
        <div className=" mx-auto">
          <div id="first">
            <div className="myform form">
              <div className="logo mb-3">
                <div className="img1">
                  <img className="clickcloth1" src={require('./icon.png')} alt="" />
                </div>
              </div>
              <form onSubmit={handleLogin} name="login">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="form-group">
                <p className="text-center">By signing up you accept our <span>Terms Of Use</span></p>
                </div>
                <div className="col-md-12 text-center ">
                  <button type="submit" className="loginbtn1 btn btn-block mybtn btn-primary tx-tfm">
                    Login
                  </button>
                </div>
                <div className="col-md-12 ">
                  <div className="login-or align">
                    <hr className="hr-or" />
                    <span className="span-or ">or</span>
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <p className="text-center">
                    <a href="javascript:void();" className="google btn mybtn">
                      <i className="fa fa-google-plus"></i> Signup using Google
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
