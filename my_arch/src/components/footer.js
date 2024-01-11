import React from "react";
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import {
    SiGmail
} from "react-icons/si";
function Footer() {
    return (
        <>
            <div className="body" id="contato">
                <footer className="footer">
                    <h1>Contato</h1>
                    <span>
                        Sinta-se à vontade para entrar em contato comigo pelo Instagram ou através
                        do meu e-mail. Além disso, convido você a explorar minhas redes sociais
                        para acompanhar as últimas atualizações e informações exclusivas. Estou
                        ansiosa para receber sua mensagem!
                    </span>
                    <div className="icons_grid">
                        <div className="icons_content">
                            <a href="mailto:" className="link" target="blank"><SiGmail /></a>
                            <a href="mailto:arq.mylenacargerani@gmail.com" target="blank">
                                <span className="icon_title">Email</span>
                                <div>
                                    <p className="icon_text">arq.mylenacargerani@gmail.com</p>
                                </div>
                            </a>
                        </div>
                        <div className="icons_content">
                            <a href="https://www.instagram.com/arq.mylenacargerani/" className="link" target="blank"><RiInstagramFill/></a>
                            <a href="https://www.instagram.com/arq.mylenacargerani/" target="blank">
                                <span className="icon_title">Instagram</span>
                                <div>
                                    <p className="icon_text">@arq.mylenacargerani</p>
                                </div>
                            </a>
                        </div>
                        <div className="icons_content">
                            <a href="https://www.linkedin.com/in/mylenacargerani/" className="link" target="blank"><FaLinkedin /></a>
                            <a href="https://www.linkedin.com/in/mylenacargerani/" target="blank">
                                <span className="icon_title">linkedIn</span>
                                <div>
                                    <p className="icon_text">https://www.linkedin.com/in/mylenacargerani/</p>
                                </div>
                            </a>
                            
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;