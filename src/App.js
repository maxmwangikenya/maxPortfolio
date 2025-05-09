import './App.scss';
import { Routes, Route , useLocation } from 'react-router-dom';
import Home from './containers/home'
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import './index.css';
import  {loadFull} from "tsparticles";
import Navbar from './components/navBar';


function App() {
  const location = useLocation();
  console.log(location)
  const handleInit= async (main) =>{
    await loadFull(main)
}
  return (
    <div className="App">
      <particles id = "particles" init={handleInit}/>
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;