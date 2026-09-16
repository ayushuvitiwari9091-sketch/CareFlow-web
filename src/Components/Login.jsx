import React from 'react'
import './CSS/Login.css'
import loginImg from'../images/login.png'
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const backpage = ()=>{
    navigate('/')
  }
  return (
    <>
     <div className="login-page">
      <div className="login-box">

        <div className="login-left">
          <img
            src={loginImg}
            alt="Hospital"
          />
        </div>

        <div className="login-right">
          <div className="cut-arrow" onClick={backpage}><RxCross2 /></div>
          <div className="login-logo">
            <span>♥</span> CareFlow
          </div>

          <h1>Welcome Back!</h1>

          <p className="login-subtitle">
            Login to continue to your account
          </p>

          <form>
            <label>Email or Phone Number</label>
            <input
              type="text"
              placeholder="Enter your email or phone"
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
            <div className="login-options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">
              Login
            </button>
          </form>
          <div className="signup-text">
            Don't have an account?
            <a href="/signup"> Create Account</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login