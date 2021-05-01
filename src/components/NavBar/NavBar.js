import { React } from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const NavBar = () => {
    return (

        <div className="NavBar">
            <h3>Flavien BERNARD</h3>
            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
=======
import './NavBar.css';
>>>>>>> master

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