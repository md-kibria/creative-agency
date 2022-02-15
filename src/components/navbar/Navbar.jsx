import React, {useState} from 'react'
import './navbar.css'

function Navbar() {

    // mobile menu show hide state
    const [close, setClose] = useState(false)

    // mobile menu show hide handler
    const handleClose  = () => {
        setClose(!close)
    }

    return (
        <nav className="navbar">
            {/* Navbar Logo */}
            <h1 className="navLogo">
                Logo
            </h1>
            {/* nav menus */}
            <div className="navComp">
                <i className={close ? "fa fa-times icon" : "fa fa-bars icon"} onClick={handleClose} ></i>
                <ul className={close ? "navItems show" : "navItems"}>
                    {/* nav menu */}
                    <li className="navItem">
                        <p className="navLink">Home</p>
                    </li>
                    {/* nav menu */}
                    <li className="navItem">
                        <p className="navLink">Services</p>
                    </li>
                    {/* nav menu */}
                    <li className="navItem">
                        <p className="navLink">Feedback</p>
                    </li>
                    {/* nav menu */}
                    <li className="navItem">
                        <p className="navLink">Contact</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
