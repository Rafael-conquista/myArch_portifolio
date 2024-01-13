import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Directory from './pages/projects_directory';
import ProjectDescrition from './pages/Project_description'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:comodo" element={<Directory />} />
        <Route path="/:comodo/:projeto" element={<ProjectDescrition />} />
      </Routes>
    </Router>
  );
}

export default App;