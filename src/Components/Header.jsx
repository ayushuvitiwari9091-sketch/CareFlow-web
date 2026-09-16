import React from 'react'
import './CSS/Header.css'
import Logo from '../images/Navbar-logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="top-header-outer">

                <div className="top-header-left">
                    <p>Your Health, Our Priority — Welcome to CareFlow Hospital</p>
                </div>

                <div className="top-header-line"></div>

                <div className="top-header-right">
                    <p>Experience Smarter Healthcare with CareFlow Hospital.</p>
                </div>
            </div>
            <div className="navbar-outer">

                <div className="navbar-left">
                    <img src={Logo} alt="" />
                </div>

                <div className="navbar-menu">
                    <ul className='menu-section-navbar'>
                        <li> <NavLink to='/' className={({isActive})=>`navLink ${isActive ? "active" : ""}`}>Home</NavLink></li>
                        <li> <NavLink to='/services' className={({isActive})=>`navLink ${isActive ? "active" : ""}`}>Services</NavLink></li>
                        <li> <NavLink to='/treatment' className={({isActive})=>`navLink ${isActive ? "active" : ""}`}>Treatment</NavLink></li>
                        <li> <NavLink to='/tokens' className={({isActive})=>`navLink ${isActive ? "active" : ""}`}>Tokens</NavLink></li>
                        <li> <NavLink to='/about' className={({isActive})=>`navLink ${isActive ? "active" : ""}`}>About</NavLink></li>
                        <li> <NavLink to='/contact' className={({isActive})=>`navLink ${isActive ? "active" : ""}`}>Contact</NavLink></li>
                    </ul>

                </div>

                <div className="navbar-right">
                <NavLink to='/login'><button>Login</button></NavLink>
                </div>

            </div>
        </>
    )
}

export default Header