import React, { useContext, useRef, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../context/userContext';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const App = () => {
  const cookies = new Cookies(null, { path: '/' });
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [endPoint, header] = useContext(UserContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const regNameRef = useRef();
  const regSnameRef = useRef();
  const regNumRef = useRef();
  const regEmailRef = useRef();
  const regPassRef = useRef();

  const loginSubmit = (e) => {
    e.preventDefault();
    axios.post(`${endPoint}/auth`, {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }, header)
      .then(res => {
        if (res.status === 201 || res.status === 200) {
          cookies.set("x-auth-token", res.data);
          localStorage.setItem("user", 'true');
          Swal.fire({
            title: "Login is successfull",
            icon: "success",
            preConfirm: () => { navigate('/') }
          })
        }
        console.log(res.data)
      })
      .catch(err => console.log(err))
    }

  const registerSubmit = (e) => {
    e.preventDefault();
    axios.post(`${endPoint}/register`, {
      name: regNameRef.current.value,
      surname: regSnameRef.current.value,
      email: regEmailRef.current.value,
      phone: regNumRef.current.value,
      password: regPassRef.current.value
    }, header)
      .then(res => {
        if (res.status === 201 || res.status === 200) {
          cookies.set("x-auth-token", res.data);
          localStorage.setItem("user", 'true');
          Swal.fire({
            title: "Register is successfull",
            icon: "success",
            preConfirm: () => { navigate('/') }
          })
        }
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);

        if (err.status === 400 || err.status === 401) {
          let alertText = "";
          if (err.response.data.match("password")) {
            alertText = err.response.data
          } else if (err.response.data.match("empty")) {
            alertText = err.response.data
          } else if (err.response.data.match("email")) {
            alertText = err.response.data
          }
          else if (err.response.data.match("already")) {
            alertText = err.response.data
          }
          Swal.fire({
            title: alertText,
            icon: "error"
          })
        }
      })
  }

  return (
    <div className='account-info'>
      <div className={active ? "active container" : "container"}>

        <div className="form-container sign-up">
          <form onSubmit={registerSubmit}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
            </div>
            <span>or use your email for registeration</span>
            <input ref={regNameRef} type="text" placeholder="Name" />
            <input ref={regSnameRef} type="text" placeholder="Surname" />
            <input ref={regNumRef} type="phone" placeholder="Phone" />
            <input ref={regEmailRef} type="email" placeholder="Email" />
            <input ref={regPassRef} type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={loginSubmit}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
            </div>
            <span>or use your email password</span>
            <input type="email" ref={emailRef} placeholder="Email" />
            <input type="password" ref={passwordRef} placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" onClick={() => setActive(false)}>Sign In</button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" onClick={() => setActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App