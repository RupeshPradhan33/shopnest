import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src="/logo.png" alt="ShopNest Logo" className="navbar-logo"/>
                    ShopNest
                </Link>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/profile">Profile</Link></li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;