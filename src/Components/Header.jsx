import React, { useState } from 'react'
import './CSS/Header.css'
import Logo from '../images/Navbar-logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <>
            {/* Top Header */}
            <div className="top-header-outer">

                <div className="top-header-left">
                    <p>Your Health, Our Priority — Welcome to CareFlow Hospital</p>
                </div>

                <div className="top-header-line"></div>

                <div className="top-header-right">
                    <p>Experience Smarter Healthcare with CareFlow Hospital.</p>
                </div>

            </div>


            {/* Navbar */}
            <div className="navbar-outer">

                <div className="navbar-left">
                    <img src={Logo} alt="CareFlow Hospital" />
                </div>


                {/* Hamburger */}
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>


                {/* Menu */}
                <div className={`navbar-menu ${menuOpen ? "show-menu" : ""}`}>

                    <ul className="menu-section-navbar">

                        <li>
                            <NavLink
                                to="/"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `navLink ${isActive ? "active" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/services"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `navLink ${isActive ? "active" : ""}`
                                }
                            >
                                Services
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/treatment"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `navLink ${isActive ? "active" : ""}`
                                }
                            >
                                Treatment
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/tokens"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `navLink ${isActive ? "active" : ""}`
                                }
                            >
                                Tokens
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `navLink ${isActive ? "active" : ""}`
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `navLink ${isActive ? "active" : ""}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li className="mobile-login">
                            <NavLink to="/login" onClick={closeMenu}>
                                <button>Login</button>
                            </NavLink>
                        </li>

                    </ul>

                </div>


                {/* Desktop Login */}
                <div className="navbar-right">
                    <NavLink to="/login">
                        <button>Login</button>
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default Header