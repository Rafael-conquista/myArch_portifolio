import React from "react";
import './footer.css'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhoneSquareAlt } from "react-icons/fa";

import {
    SiGmail
} from "react-icons/si";
function Footer() {
    return (
        <>
            <div className="body">
                <footer className="footer">
                    <ul className="social_icons">
                        <li className="social_list"><a href="https://www.linkedin.com/in/rafael-conquista/" className="link" target="blank"><FaLinkedin /></a></li>
                        <li className="social_list"><a href="https://github.com/Rafael-conquista" className="link" target="blank"><RiInstagramFill/></a></li>
                        <li className="social_list"><a href="mailto:https://criarmeulink.com.br/u/1703287673" className="link" target="blank"><SiGmail /></a></li>
                        <li className="social_list"><a href="mailto:https://criarmeulink.com.br/u/1703287673" className="link" target="blank"><FaPhoneSquareAlt /></a></li>
                    </ul>
                    <ul className="menu" id="footer">
                        <li className="menu_item"><a href="#" className="link">Sobre mim</a></li>
                        <li className="menu_item"><a href="#" className="link">Meus Projetos</a></li>
                        <li className="menu_item"><a href="#" className="link">Voltar ao topo</a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer;