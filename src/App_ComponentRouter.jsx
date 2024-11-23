import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TerminalAppProject from './pages/TerminalAppProject';
import Navbar from './components/Navbar';
import ProjectLayout from './pages/_Templates/ProjectLayout';

function App() {
  return (
    <div className="App">
      {/* Routes are declared within this component */}
      <BrowserRouter>
        <Navbar />
        {/* Declare individual route components here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectLayout />} />
          <Route path='/projects/terminalApp' element={<TerminalAppProject />} />
          <Route path='terminalApp' element={<TerminalAppProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
