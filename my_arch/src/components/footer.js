import React from "react";
import './footer.css'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";

import {
    SiGithub,
    SiGmail
} from "react-icons/si";
function Footer() {
    return (
        <>
            <div className="body">
                <footer className="footer">
                    <ul className="social_icons">
                        <li className="social_list"><a href="https://www.linkedin.com/in/rafael-conquista/" className="link" target="blank"><FaLinkedin /></a></li>
                        <li className="social_list"><a href="https://github.com/Rafael-conquista" className="link" target="blank"><SiGithub /></a></li>
                        <li className="social_list"><a href="mailto:https://criarmeulink.com.br/u/1703287673" className="link" target="blank"><SiGmail /></a></li>
                    </ul>
                    <ul className="menu" id="footer">
                        <li className="menu_item"><a href="#" className="link">Início</a></li>
                        <li className="menu_item"><a href="#about" className="link">Sobre mim</a></li>
                        <li className="menu_item"><a href="#skills" className="link">Habilidades</a></li>
                        <li className="menu_item"><a href="#projetos" className="link">Projetos</a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer;