import Navbar from '../components/navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import imagemTeste from '../images/slider/slider3.jpeg'
import './project_description.css'
import Footer from '../components/footer';

function ProjectDescrition() {
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
            <div className="container">
                <div className="left-column">
                    <img src={imagemTeste} alt="Imagem Principal" className='img_left' />
                </div>
                <div className="middle-column">
                    <img src={imagemTeste} className='img_center' alt="Imagem 1" />
                    <img src={imagemTeste} className='img_center' alt="Imagem 2" />
                    <img src={imagemTeste} className='img_center' alt="Imagem 3" />
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
            <Footer/>
        </div>
    )
}

export default ProjectDescrition;