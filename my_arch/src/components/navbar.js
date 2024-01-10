import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../images/logo.jpeg'
import perfil from '../images/perfil.jpeg'
import { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import { IoMdDownload } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GiFamilyHouse } from "react-icons/gi";
import { IoNewspaperSharp } from "react-icons/io5";
import './navbar.css'
import { Row, Col } from 'react-bootstrap';
//import curriculo_rafael_conquista from '../img/curriculo.pdf';

function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*
    const iniciarDownload = () => {
        const link = document.createElement('a');
        link.href = curriculo_rafael_conquista;
        link.setAttribute('download', ''); // Isso força o download ao invés de abrir o arquivo no navegador
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    */
    //adicionar o onclick de download dps

    return (
        <div>
            <nav className="navbar navbar-light shadow navbar_view">
                <div className="container-fluid">
                    <img src={logo} alt='vazio' className='logo' />
                    <h1 className="menu_title" href="#"><a href="#" className="menu_link">MYARCH</a></h1>
                    <CgMenuRight className='burguer_menu' onClick={handleShow} />
                </div>
                <Offcanvas show={show} placement='end' onHide={handleClose} className="offcanvas">
                    <Offcanvas.Header>
                        <h2 className='menu_title'>Menu</h2>
                        <IoIosClose className='x_menu' onClick={handleClose} />
                    </Offcanvas.Header>
                    <ul>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#" className="link_text">Sobre mim</a></li>
                    </ul>
                    <Row className='navbar_description'>
                        <Col className='col-3'>
                            <img src={perfil} alt='vazio' className='perfil' />
                        </Col>
                        <Col className='navbar_text'>
                            <span>
                                Olá, eu me chamo Mylena
                                Dorna Cargerani!
                                Vem saber mais sobre
                                mim!
                            </span>
                        </Col>
                    </Row>
                    <ul>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#" className="link_text">Projetos</a></li>
                    </ul>
                    <Row className='navbar_description'>
                        <Col className='col-3'>
                            <GiFamilyHouse className='navbar_icon'/>
                        </Col>
                        <Col className='navbar_text'>
                            <span>
                                Venha ver mais projetos!
                            </span>
                        </Col>
                    </Row>
                    <ul>
                        <li className="menu_item_nav"><a className="link_text">Currículo <IoMdDownload /></a></li>
                    </ul>
                    <Row className='navbar_description'>
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
                        <li className="menu_item_nav" onClick={handleClose}><a href="#" className="link_text">Entre em contato</a></li>
                    </ul>
                </Offcanvas>
            </nav>
            <div className='fine_line'></div>
        </div>
    );
}

export default Navbar;