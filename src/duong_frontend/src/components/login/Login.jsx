import React, { useEffect, useState } from 'react';
import { Helmet } from '../helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../button/buttons.css'; 
import '../common.css'; 
import '../navbar/navbar.css';
import '../form/form.css';


const LoginImage =  '/imgs/login/Img.jpg'
const lock ="/imgs/login/lock.svg"
const eye_open = "/imgs/login/eye-open.svg"
const email = "/imgs/login/email.svg"
const gg = "/imgs/login/Google.svg"
const fb = "/imgs/login/Facebook.svg"

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
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading...</h5>
              </Col>
            ) : (
              // <Col lg="6" className="m-auto text-center">
                <div class="container-fluid d-flex">
                  <img src={LoginImage} class="modal-img" alt="login-img" />
                  <div class="container">
                    <div class="modal-content-login">
                      <h3>Sign In</h3>
                      <div class="social-btn">
                        <a href="#">
                          <img src={gg} class="me-3" alt="" />
                        </a>
                        <a href="#">
                          <img src={fb} alt="" />
                        </a>
                      </div>
                      <p class="title2" id="login-or">
                        Or, sign in with your email
                      </p>
                      <form>
                        {/* Email */}
                        <div class="mb-3">
                          <label for="email" class="form-label label1">
                            Email
                          </label>
                          <div class="input-with-icon">
                            <img src={email} alt="email" class="leading-icon" />
                            <input
                              type="text"
                              placeholder="Username" // Assuming username is equivalent to email in this context
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
                            <img src={lock} alt="password" class="leading-icon" />
                            <input
                              type="password"
                              class="form-control form-md-icon"
                              placeholder="•••••••••••••••••"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <img src={eye_open} alt="password" class="trailing-icon" />
                          </div>
                        </div>
                      </form>
                      <button onClick={loginHandler} class="prim-btn btn-md login-btn w-100">
                        SIGN IN
                      </button>
                      <p class="signup-link">
                        Not yet registered? <Link to="/signup">Sign Up</Link> now!
                      </p>
                    </div>
                  </div>
                </div>
              // </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
