import Navbar from '../components/navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './projects_directory.css'
import imagemTeste from '../images/slider/slider3.jpeg'
import Footer from '../components/footer';

function Directory (){
  const navigate = useNavigate();

  useEffect(() => {
    // Garanta que a página sempre inicia no topo quando o componente é montado
    window.scrollTo(0, 0);
  }, []);

    const projects_classes = ['Living', 'Cozinha', 'lavanderia', 'Dormitório', 'Lavabo', 'Banho', 'Escritório', 'Externo'];
    const projects = {
        'Projeto1': imagemTeste, 'Projeto2': imagemTeste, 'Projeto3': imagemTeste, 'Projeto4': imagemTeste, 'Projeto5': imagemTeste, 'Projeto6': imagemTeste, 'Projeto7': imagemTeste,
    }
    const location = useLocation();
    const pathname = decodeURIComponent(location.pathname.replace('/', ''));
    
    const handleRedirect = (key) => {
        const newPath = `${key}`;
        navigate(newPath);
    };

    return(
        <div>  
            <Navbar/>
            <div className='directory_title'>
                <h1>{pathname.toUpperCase()}</h1>
            </div>
            <div className='directory_grid'>
            {
                Object.keys(projects).map((key) => {
                    //console.log(projects[key])
                    return (
                        <div className='projects_card'>
                            <p>Clique aqui para ver o {key}</p>
                            <div className='imagem'>
                                <img src={projects[key]} alt='vazio' id={key} onClick={() => handleRedirect(key)} className='imagem_setup'/>
                            </div>  
                        </div>
                    )
                })
            }
            </div>
            <Footer/>
        </div>
    )
}

export default Directory;