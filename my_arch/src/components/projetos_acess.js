import './projetos_acess.css'
import { useState } from 'react'

function ProjetoAcess() {
    const projects_classes = ['Living', 'Cozinha', 'lavanderia', 'Dormitório', 'Lavabo', 'Banho', 'Escritório', 'Externo']

    const [show, setshow] = useState(false)
    const handleSkill = () => {
        if (!show) {
            setshow(true)
        } else {
            setshow(false)
        }
    }

    return (
        <div className='projects_menu_body' id='projeto'>
            <div className="project_button_menu">PROJETOS</div>
                <div className='projects_grid'>
                    {
                        projects_classes.map((key) => {
                            return(
                                <div className='projects_button'>
                                    <span>{key.toUpperCase()}</span>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default ProjetoAcess;