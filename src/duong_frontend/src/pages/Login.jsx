import React, { useEffect, useState } from 'react';
import { Helmet } from '../components/helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css'; 
import '../components/common.css'; 
import '../components/navbar/navbar.css';

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginData = {
      username,
      password,
    };
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login/', loginData);

      const token = response.data.accessToken;
      localStorage.setItem('Token', token);

      console.log(token);

      setLoading(false);
      toast.success('Successfully logged in');
      navigate('');
    } catch (error) {
      setLoading(false);
      toast.error(error.message || 'Login failed');
    }
  };

  return (
    <Helmet title="login">
      <section>
            {loading ? (
              <Col xxl="12" className="text-center">
                <h5 className="fw-bold">Loading...</h5>
              </Col>
            ) : (
              // Login
              <div className="container-fluid d-flex">
                  <img src="/imgs/login/Img.jpg" className="modal-img" alt="login-img" />
                  <div className="container">
                    <div className="modal-content-login">
                      <h3 className="mb-5">Sign In</h3>
                      <div className="social-login-btn">
                        <a href="#">
                          <img src="/imgs/login/Google.svg" className="me-3" alt="" />
                        </a>
                        <a href="#">
                          <img src="/imgs/login/Facebook.svg" alt="" />
                        </a>
                      </div>
                      <p className="title2" id="login-or">
                        Or, sign in with your username
                      </p>
                      <form>
                        {/* Email */}
                        <div className="mb-3">
                          <label for="email" className="form-label label1">
                            Username
                          </label>
                          <div className="input-with-icon">
                            <img src="/imgs/login/user.svg" alt="username" className="leading-icon" />
                            <input
                              type="text"
                              placeholder="Enter your username" 
                              className="form-control form-md-icon"
                              value={username}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        {/* Password */}
                        <div className="mb-3">
                          <label for="password" className="form-label label1">
                            Password
                          </label>
                          <div className="input-with-icon">
                            <img src="/imgs/login/lock.svg" alt="password" className="leading-icon" />
                            <input
                              type="password"
                              className="form-control form-md-icon"
                              placeholder="•••••••••••••••••"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <img src="/imgs/login/eye-open.svg" alt="password" className="trailing-icon" />
                          </div>
                        </div>
                      </form>
                      <button onClick={loginHandler} className="prim-btn btn-md login-btn w-100">
                          SIGN IN
                      </button>
                      <p className="signup-link">
                          Not yet registered? <Link to="/signup" className="slide-border">Sign Up</Link> now!
                      </p>
                    </div>
                  </div>
              </div>
              
            )}
          
        
      </section>
    </Helmet>
  );
};

export default Login;
