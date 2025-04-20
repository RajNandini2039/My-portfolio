import { useState } from 'react'
import './App.css'

import './css/navbar.css';
import Navbar from './component/Navbar';

import './css/home.css';
import Hme from './component/Hme';

import './css/about.css'
import About from './component/About';

import './css/skill.css'
import Skill from './component/Skill';

import './css/project.css'
import Project from './component/Project';

import './css/contact.css'
import Contact from './component/Contact';

import './css/footer.css';
import Footer from './component/Footer';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Hme  isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <About isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Skill isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Project isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Contact isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Footer />
    </>
  )
}

export default App