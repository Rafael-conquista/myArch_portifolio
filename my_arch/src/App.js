import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Directory from './pages/projects_directory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:comodo" element={<Directory />} />
      </Routes>
    </Router>
  );
}

export default App;