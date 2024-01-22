import Navbar from '../components/navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './projects_directory.css'
import slider1 from '../images/slider/slider1.jpeg';
import b1 from '../images/banheiro1/b1_1.jpeg'
import Footer from '../components/footer';

function Directory (){
  const navigate = useNavigate();

  useEffect(() => {
    // Garanta que a página sempre inicia no topo quando o componente é montado
    window.scrollTo(0, 0);
  }, []);

    const projects_classes = ['living', 'cozinha', 'lavanderia', 'dormitório', 'lavabo', 'banho', 'escritório', 'externo'];
    const cozinha_projects = {
        'Cozinha integrada com área de serviço': slider1,
    }
    const banheiro_projects = {
        'Estilo de banheiro 1': b1,
    }
    
    let is_project_available = true
    let projects = []
    const location = useLocation();
    const pathname = decodeURIComponent(location.pathname.replace('/', ''));
    console.log(pathname)
    if(projects_classes.includes(pathname)){
        if (pathname === 'cozinha'){
            projects = cozinha_projects
        }
        if(pathname === 'banho'){
            projects = banheiro_projects
        }
    }else{
        is_project_available = false
    }
    const handleRedirect = (key) => {
        const newPath = `${key}`;
        navigate(newPath);
    };

    return(
        <div>  
            <Navbar/>
            {is_project_available ? 
                <div className='dir_body'>
                <div className='directory_title'>
                    <h1>{pathname.toUpperCase()}</h1>
                </div>
                <div className='directory_grid'>
                {
                    Object.keys(projects).map((key) => {
                        return (
                            <div className='projects_card'>
                                <p>{key}</p>
                                <div className='imagem'>
                                    <img src={projects[key]} alt='vazio' id={key} onClick={() => handleRedirect(key)} className='imagem_setup'/>
                                </div>  
                            </div>
                        )
                    })
                }
                </div>
            </div>
            : <div className='not_project'>
                <h1>Página não encontrada :(</h1>
            </div>
            }
            <Footer/>
        </div>
    )
}

export default Directory;