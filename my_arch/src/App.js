import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Slider from './components/slider';
import ProjetoAcess from './components/projetos_acess';
import AboutMe from './components/sobre_mim';
import Skills from './components/skills';
import Download from './components/download';

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <ProjetoAcess/>
      <AboutMe/>
      <Skills/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
