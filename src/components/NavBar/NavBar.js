import { React } from "react";
import { Link } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="logo"></div>
                <div className="links">
                <Link to="/site">Home</Link>
                <Link to="/site/about">About</Link>
                <Link to="/site/projects">Projects</Link>
                <Link to="/site/contact">Contact me</Link>
            </div>
        </nav>
    );
}

export default NavBar;