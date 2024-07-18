import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Education from './sections/Education/Education'



function App() {
  return (
    <>
      <Hero />
      <Education />
      <Projects />
      
      <Skills />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
