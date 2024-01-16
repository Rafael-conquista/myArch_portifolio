import Navbar from '../components/navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ci1 from '../images/cozinha_integrada/ci1.jpeg'
import ci2 from '../images/cozinha_integrada/ci2.jpeg';
import ci3 from '../images/cozinha_integrada/ci3.jpeg';
import ci4 from '../images/cozinha_integrada/ci4.jpeg';
import autocad from '../images/autocad.png';
import sketch from '../images/sketchup.png';
import arch from '../images/arch.png';
import vray from '../images/vray.png';
import './project_description.css'
import Footer from '../components/footer';

function ProjectDescrition() {
    const cozinha_integrada = [ci1, ci2, ci3, ci4]
    let habilidades = []
    let imagens = []
    let is_project_available = true
    const projetos = ['Cozinha integrada com área de serviço']
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = decodeURIComponent(
        location.pathname.slice(1).split('/')
    );
    const paths = pathname.split(',');
    if (projetos.includes(paths[1])) {
        if (paths[1] === projetos[0]) {
            imagens = cozinha_integrada
            habilidades = [sketch, vray, autocad]
        }
    }else{
        is_project_available = false
    }
    const [image, setImage] = useState(imagens[0])

    const changeImage = (e) => {
        const id = e.target.id
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
    return (
        <div className='desc_body'>
            <Navbar />
            {is_project_available ? 
                <div className='desc_body_effect'>
                    <div className='directory_title'>
                        <span className='paths link_path' onClick={() => handleRedirect(paths[0])}>{paths[0]} /</span><span className='paths'> {paths[1].toLowerCase()}</span>
                    </div>
                    <div className="container1">
                        <div className="left-column">
                            <img src={image} alt="Imagem Principal" className='img_left' />
                        </div>
                        <div className="middle-column">
                            <img src={imagens[0]} className='img_center' onClick={changeImage} id='0' alt="Imagem 1" />
                            <img src={imagens[1]} className='img_center'  onClick={changeImage} id='1' alt="Imagem 2" />
                            <img src={imagens[2]} className='img_center' onClick={changeImage} id='2' alt="Imagem 3" />
                            <img src={imagens[3]} className='img_center' onClick={changeImage} id='3' alt="Imagem 4" />
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
                                <div className='skills_desc'>
                                {habilidades.map((key) => {
                                    return(
                                        <div>
                                            <img src={key} className='skills_image'/>
                                        </div>
                                    )
                                })}
                                </div>
                        </div>
                    </div>
                </div>
                : <div className='not_project'><h1>Projeto não existe :(</h1></div>
            }

            <Footer />
        </div>
    )
}

export default ProjectDescrition;