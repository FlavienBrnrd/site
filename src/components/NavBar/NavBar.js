import { React } from "react";
import { Link } from "react-router-dom";

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

    );
}

export default NavBar;