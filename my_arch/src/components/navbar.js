import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import { IoMdDownload } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import './navbar.css'
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
                    <h2>logo</h2>
                    <h1 className="menu_title" href="#"><a href="#" className="menu_link">Mylena Cargerani</a></h1>
                    <CgMenuRight className='burguer_menu' onClick={handleShow} />
                </div>
                <Offcanvas show={show} placement='end' onHide={handleClose} className="offcanvas">
                    <Offcanvas.Header>
                        <h2 className='menu_title'>Menu</h2>
                        <IoIosClose className='x_menu' onClick={handleClose} />
                    </Offcanvas.Header>
                    <ul>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#" className="menu_link"> Início</a></li>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#" className="menu_link">Sobre mim</a></li>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#" className="menu_link">Habilidades</a></li>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#" className="menu_link">Projetos</a></li>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#" className="menu_link">Entrar em contato</a></li>
                        <li className="menu_item_nav"><a className="menu_link">Baixar meu currículo <IoMdDownload /></a></li>
                    </ul>
                </Offcanvas>
            </nav>
            <div className='fine_line'></div>
        </div>
    );
}

export default Navbar;