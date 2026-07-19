
import { ReactLenis } from 'lenis/react'
import Hero from "./components/Hero.tsx"
import Navbar from "./components/Navbar.tsx"
import Services from "./components/Services.tsx"
import Projects from "./components/Projects.tsx"
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import Transition from './components/Transition.tsx'




function App() {


  return (
    <>
      <ReactLenis root>
        <Transition />
        <Navbar />

        <main id="main-content">
          <Hero />
          <Services />
          <Projects />
          <Contact />
        </main>

        <Footer />
    
    </ReactLenis >
    </>
  );
}

export default App
