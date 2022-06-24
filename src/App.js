
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Experience from './pages/Experience/Experience';
import Home from './pages/Home/Home';
import ProjectDisplay from './pages/Projects/ProjectDisplay';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/project/:id' element={<ProjectDisplay/>}/>
        <Route path='/experience' element={<Experience/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
