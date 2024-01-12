import './projetos_acess.css';
import { useNavigate } from 'react-router-dom';

function ProjetoAcess() {
  const navigate = useNavigate();
  const projects_classes = ['Living', 'Cozinha', 'lavanderia', 'Dormitório', 'Lavabo', 'Banho', 'Escritório', 'Externo'];

  const handleRedirect = (key) => {
    const newPath = `/${key.toLowerCase()}`;
    navigate(newPath);
  };

  return (
    <div className='projects_menu_body' id='projeto'>
      <div className="project_button_menu">PROJETOS</div>
      <div className='projects_grid'>
        {projects_classes.map((key) => (
          <div key={key} id={key} onClick={() => handleRedirect(key)} className='projects_button'>
            <span>{key.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjetoAcess;