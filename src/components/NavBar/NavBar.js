import { React } from "react";
import { Link } from "react-router-dom";

const NavBar =  () => {
    return (

        <div className="NavBar">
            <h1>Flavien BERNARD</h1>
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
        </div>

    );
}

export default NavBar;