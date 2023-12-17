import React, { useEffect, useState } from 'react'
// import { Helmet } from './../components/helmet/Helmet';
// import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import axios from 'axios';

// import Img from "../../public/imgs/"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

const button1Style = "background: var(--scheme-background);border: 1.5px solid var(--tone-primary-40, #46692A);"
const formControl = "background: var(--scheme-background);border: 1px solid var(--scheme-outline, #A1B096);"

const Login = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  const navigate = useNavigate();
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginData = {
      username,
      password,
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login/', loginData);


      const token = response.data.accessToken;

      localStorage.setItem("Token", token);

      console.log(token);


      setLoading(false);
      toast.success("Successfully logged in");
      navigate('');
    } catch (error) {
      setLoading(false);
      toast.error(error.message || 'Login failed');
    }
  };

  // 
  return (
    <div class="container-fluid">
      <div class="container-xxl p-0">
        <div class="d-flex">
          <div class="col-xxl-3 d-inline-flex">
            <img src="/login/Img.jpg" />
          </div>
          <div class="col-xxl-9 d-inline-flex flex-grow-1 flex-shrink-0 align-items-center justify-content-center">
            <div class="align-items-start">
              <div class="d-flex flex-column justify-content-center gap-4">
                {/* // <!-- SIGN IN --> */}
                <div class="row g-4">
                  <h3>Sign In</h3>
                </div>
                {/*//<!-- Other sign in method --> */}
                <div class="row g-4">
                  <div class="d-flex justify-content-around">
                    <button class="button1" style={{ button1Style }}>
                      <p> Sign in with Google</p>
                    </button>
                    <button class="button1" style={{ button1Style }}>
                      <p> Sign in with Facebook</p>
                    </button>
                  </div>
                </div>
                {/* <!-- Sign in by email --> */}
                <div class="row g-4">
                  <div class="d-flex justify-content-center">
                    {/* <div class="title2">
                      Or, sign in with your email
                    </div> */}

                  </div>
                </div>
                <div class="row g-4">
                  {/* <!-- Email --> */}
                  <div class="d-flex flex-column gap-2">
                    <label class="label1">Email</label>
                    {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#46692A" />
                  </svg> --> */}
                    <span>
                      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="nguyenvana@gmail.com" style={{formControl}} />

                    </span>
                  </div>

                  {/* <!-- Password --> */}
                  <div class="d-flex flex-column gap-2">
                    <label class="label1">Password</label>
                    <span>
                      <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" placeholder="•••••••••••••••••" style={{formControl}}/>
                    </span>
                  </div>
                </div>
                {/* <!-- Sign in button --> */}
                <div class="row g-4">
                  <button class="button2 btm-nm prim-btn ">
                    SIGN IN
                  </button>
                </div>
                <div class="row g-4">
                  <div class="d-inline-flex">
                    <span>
                      <p class="d-inline-flex">Not yet Registered?</p>
                      <label class="label2 d-inline-flex">Sign up now!</label>
                    </span>

                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}
export default Login;