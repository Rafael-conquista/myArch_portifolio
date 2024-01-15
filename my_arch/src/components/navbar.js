import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../images/logo.jpeg'
import perfil from '../images/perfil.jpeg'
import logo_curriculo from '../images/logo_curriculo.png'
import { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";
import { GiFamilyHouse } from "react-icons/gi";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaDraftingCompass } from "react-icons/fa";
import './navbar.css'
import { Row, Col } from 'react-bootstrap';
import DownloadCurriculo from "../utils/download_curriculo";

function Navbar() {
    const [show, setShow] = useState(false);

    const actionsDownload = () =>{
        DownloadCurriculo()
        handleClose()
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <nav className="navbar navbar-light shadow navbar_view">
                <div className="container-fluid">
                    <a href="/#" className="menu_link">
                        <img src={logo} alt='vazio' className='logo' href="/#"/>
                    </a>
                    <h1 className="menu_title" href="/#"><a href="/#" className="menu_link">MYARCH</a></h1>
                    <CgMenuRight className='burguer_menu' onClick={handleShow} />
                </div>
                <Offcanvas show={show} placement='end' onHide={handleClose} className="offcanvas">
                    <Offcanvas.Header>
                        <h2 className='menu_title'>Menu</h2>
                        <IoIosClose className='x_menu' onClick={handleClose} />
                    </Offcanvas.Header>
                    <ul>
                        <li className="menu_item_nav" onClick={handleClose}><a href="/#sobre" className="link_text">Sobre mim</a></li>
                    </ul>   
                    <Row className='navbar_description' onClick={handleClose}>
                        <Col className='col-3'>
                            <a href="/#sobre">
                                <img src={perfil} alt='vazio' className='perfil' />
                            </a>
                        </Col>
                        <Col className='navbar_text'>
                            <a href="/#sobre">
                                <span>
                                    Olá, eu me chamo Mylena
                                    Dorna Cargerani!
                                    Vem saber mais sobre
                                    mim!
                                </span>
                            </a>
                        </Col>
                    </Row>
                    <ul>
                        <li className="menu_item_nav" onClick={handleClose}><a href="/#projeto" className="link_text">Projetos</a></li>
                    </ul>
                    <Row className='navbar_description' onClick={handleClose}>
                        <Col className='col-3'>
                            <a href="/#projeto">
                                <FaDraftingCompass className='navbar_icon'/>
                            </a>
                        </Col>
                        <Col className='navbar_text'>
                            <a href="/#projeto">
                                <span>
                                    Venha ver mais projetos!
                                </span>
                            </a>
                        </Col>
                    </Row>
                    <ul>
                        <li className="menu_item_nav" onClick={actionsDownload}><a className="link_text">Currículo </a></li>
                    </ul>
                    <Row className='navbar_description' onClick={actionsDownload}>
                        <Col className='col-3'>
                            <IoNewspaperSharp className='navbar_icon'/>
                        </Col>
                        <Col className='navbar_text'>
                            <span>
                                Baixe meu currículo!
                            </span>
                        </Col>
                    </Row>
                    <ul>
                        <li className="menu_item_nav" onClick={handleClose}><a href="/#contato" className="link_text">Entre em contato</a></li>
                    </ul>
                </Offcanvas>
            </nav>
            <div className='fine_line'></div>
        </div>
    );
}

export default Navbar;