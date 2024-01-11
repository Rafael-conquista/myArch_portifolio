import perfil from '../images/perfil.jpeg'
import './sobre_mim.css'

function AboutMe(){
    return(
        <div className="projects_menu_body" id="sobre">
            <div className="project_button_menu">SOBRE MIM</div>
            <div className='teste'>
            <h3 className='about_title'>Olá, eu sou a Mylena Dorna Cargerani!</h3>
            <div className='about_body'>
                <div className='about_grid'>
                    <div className='about_image_div'>
                        <img src={perfil} alt='vazio' className='about_image' />
                    </div>
                    <div className='about_text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec condimentum risus.
                        Maecenas at tempus ante. Suspendisse luctus sit amet nulla ac consequat. Mauris
                        imperdiet velit dui, nec venenatis tortor venenatis ut. Nullam turpis lacus, vehicula quis sem
                        et, volutpat varius enim. In vulputate dui a accumsan rhoncus. Aliquam nec ullamcorper
                        libero, ut facilisis erat. Donec in tellus scelerisque, rhoncus magna at, fermentum mauris.
                        Duis quis tortor vel risus laoreet vehicula ac ut velit. Mauris lacinia, erat ut mollis faucibus,
                        diam neque vestibulum turpis, a luctus massa nunc ac risus. Nunc maximus lacus ultrices,
                        tristique metus a, ornare lacus. Vestibulum lorem nibh, semper id dui porta, tempus
                        condimentum elit. Sed convallis lobortis vehicula. Nulla facilisis nibh a sapien egestas
                        maximus.</p>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default AboutMe;