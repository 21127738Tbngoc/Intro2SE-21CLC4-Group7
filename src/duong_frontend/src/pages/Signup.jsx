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
import '../components/form/form.css';

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signupHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const signupData = {
      fullname,
      username,
      password,
    };
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup/', signupData);

      const token = response.data.accessToken;
      localStorage.setItem('Token', token);

      console.log(token);

      setLoading(false);
      toast.success('Successfully signed up');
      navigate('');
    } catch (error) {
      setLoading(false);
      toast.error(error.message || 'Signup failed');
    }
  };

  return (
    <Helmet title="signup">
      <section>
            {loading ? (
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              // Signup
              <div class="container-fluid d-flex">
                  <img src="/imgs/signup/Img.jpg" class="modal-img" alt="signup-img" />
                  <div class="container">
                    <div class="modal-content-signup">
                      <h3>Sign Up</h3>
                      <div class="social-signup-btn">
                        <a href="#">
                          <img src="/imgs/signup/Google.svg" class="me-3" alt="" />
                        </a>
                        <a href="#">
                          <img src="/imgs/signup/Facebook.svg" alt="" />
                        </a>
                      </div>
                      <p class="title2" id="signup-or">
                        Or, sign up with your email
                      </p>
                      <form>
                        {/* Full name */}
                        <div class="mb-3">
                          <label for="fullName" class="form-label label1">
                            Full name
                          </label>
                          <div class="input-with-icon">
                            <img src="/imgs/signup/user.svg" alt="fullName" class="leading-icon" />
                            <input
                              type="text"
                              placeholder="Enter your full name here"
                              class="form-control form-md-icon"
                              value={username}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        {/* Email */}
                        <div class="mb-3">
                          <label for="email" class="form-label label1">
                            Email
                          </label>
                          <div class="input-with-icon">
                            <img src="/imgs/signup/email.svg" alt="email" class="leading-icon" />
                            <input
                              type="text"
                              placeholder="Enter your email address" // Assuming username is equivalent to email in this context
                              class="form-control form-md-icon"
                              value={username}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        {/* Password */}
                        <div class="mb-3">
                          <label for="password" class="form-label label1">
                            Password
                          </label>
                          <div class="input-with-icon">
                            <img src="/imgs/signup/lock.svg" alt="password" class="leading-icon" />
                            <input
                              type="password"
                              class="form-control form-md-icon"
                              placeholder="•••••••••••••••••"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <img src="/imgs/signup/eye-open.svg" alt="password" class="trailing-icon" />
                          </div>
                        </div>
                      </form>
                      <button onClick={signupHandler} class="prim-btn btn-md signup-btn w-100">
                        SIGN IN
                      </button>
                      <p class="signup-link">
                        Not yet registered? <Link to="/signup">Sign Up</Link> now!
                      </p>
                    </div>
                  </div>
              </div>
              
            )}
          
        
      </section>
    </Helmet>
  );
};

export default Signup;
