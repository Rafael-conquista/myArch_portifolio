import './skills.css'
import autocad from '../images/autocad.png';
import sketch from '../images/sketchup.png';
import arch from '../images/arch.png';
import vray from '../images/vray.png';

function Skills() {
    return(
        <div className='skills_body'>
            <div className="project_button_menu">
                HABILIDADES
            </div>
            <div className="skills_display">
                <div className='skills_image_div' ><img src={autocad} alt='vazio' className='skills_image' /></div>
                <div className='skills_image_div' ><img src={sketch} alt='vazio' className='skills_image' /></div>
                <div className='skills_image_div' ><img src={arch} alt='vazio' className='skills_image' /></div>
                <div className='skills_image_div' ><img src={vray} alt='vazio' className='skills_image' /></div>
            </div>
        </div>
    )
}

export default Skills;