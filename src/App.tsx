
import { ReactLenis } from 'lenis/react'
import Hero from "./components/Hero.tsx"
import Navbar from "./components/Navbar.tsx"
import Services from "./components/Services.tsx"
import Projects from "./components/Projects.tsx"
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import Transition from './components/Transition.tsx'
import SecondaryProjects from './components/SecondaryProjects.tsx'

function App() {

  return (
    <>
      <ReactLenis root>
        <div>
          <Transition />
         
          <Navbar />

        
          <main id="main-content">
            <Hero />
            <Services />
            <Projects />
            <SecondaryProjects />
            <Contact />
          </main>

          
          <Footer />
        </div>
      </ReactLenis>
    </>
  )
}

export default App
