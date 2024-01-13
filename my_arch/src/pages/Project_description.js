import Navbar from '../components/navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import imagemTeste from '../images/slider/slider3.jpeg'
import slider1 from '../images/slider/slider1.jpeg';
import slider2 from '../images/slider/slider2.jpeg';
import slider4 from '../images/slider/slider4.jpeg';
import './project_description.css'
import Footer from '../components/footer';

function ProjectDescrition() {
    const [image, setImage] = useState(imagemTeste)
    const imagens = [imagemTeste,slider1, slider2, slider4]

    const changeImage = (e) =>{
        const id = e.target.id
        console.log(id)
        setImage(imagens[id])
    }
    useEffect(() => {
        // Garanta que a página sempre inicia no topo quando o componente é montado
        window.scrollTo(0, 0);
    }, []);

    //adicionar template do content como grid para descer os conteudos e reajustar a tela
    const handleRedirect = (key) => {
        const newPath = `/${key}`;
        navigate(newPath);
    };
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = decodeURIComponent(
        location.pathname.slice(1).split('/')
    );
    const paths = pathname.split(',');
    return (
        <div className='desc_body'>
            <Navbar />
            <div className='directory_title'>
                <span className='paths link_path' onClick={() => handleRedirect(paths[0])}>{paths[0]}/</span><span className='paths'>{paths[1]}</span>
            </div>
            <div className="container1">
                <div className="left-column">
                    <img src={image} alt="Imagem Principal" className='img_left' />
                </div>
                <div className="middle-column">
                    <img src={imagemTeste} className='img_center' onClick={changeImage} id='0' alt="Imagem 1" />
                    <img src={slider1} className='img_center'  onClick={changeImage} id='1' alt="Imagem 2" />
                    <img src={slider2} className='img_center' onClick={changeImage} id='2' alt="Imagem 3" />
                    <img src={slider4} className='img_center' onClick={changeImage} id='3' alt="Imagem 4" />
                </div>
                <div className="right-column">
                    <p>Nullam porttitor faucibus ligula, ac viverra
                        metus tristique ac. Sed efficitur, mi non
                        sagittis suscipit, metus lacus cursus
                        mauris, vitae interdum leo urna et mauris.
                        Ut id risus imperdiet, elementum sem
                        non, interdum ligula. Phasellus felis
                        sapien, scelerisque sit amet convallis vel,
                        eleifend quis velit.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectDescrition;