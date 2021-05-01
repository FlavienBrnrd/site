import { React } from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Footer.css';

const Footer = () => {
    return (

        <div className="Footer">
            <p>Flavien BERNARD 2021</p>
            <a href="https://linkedin.com/in/flavien-bernard-899970164"><LinkedInIcon/></a>
            <a href="https://github.com/FlavienBrnrd"><GitHubIcon/></a>
        </div>

    );
}

export default Footer;