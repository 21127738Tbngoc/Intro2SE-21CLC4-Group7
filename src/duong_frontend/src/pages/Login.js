import React, { useEffect, useState } from 'react'
import { Helmet } from './../components/helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import axios from 'axios';


const Login = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  })
  const navigate = useNavigate();
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginData={
      username,
      password,
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login/', loginData);


      const  token  = response.data.accessToken;

      console.log(token);


      setLoading(false);
      toast.success("Successfully logged in");
      navigate('');
    } catch (error) {
      setLoading(false);
      toast.error(error.message || 'Login failed');
    }
  };

  return (
    <Helmet title='login'>
      <section>
        <Container>
          <Row>
            {loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading...</h5></Col> : (<Col lg="6" className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Login</h3>
              <form action="" className="auth__form" onSubmit={loginHandler}>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Username' value={username} onChange={(e) => { setEmail(e.target.value) }} />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="password" placeholder='Password' autoComplete='current password' onChange={(e) => { setPassword(e.target.value) }} />
                </FormGroup>
                <button type='submit' className="buy__btn auth__btn">
                  Login
                </button>
                <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
              </form>
            </Col>)}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
