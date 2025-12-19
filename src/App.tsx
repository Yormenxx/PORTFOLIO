
import { ReactLenis } from 'lenis/react'
import Hero from "./components/Hero.tsx"
import Navbar from "./components/Navbar.tsx"
import Services from "./components/Services.tsx"
import Projects from "./components/Projects.tsx"
import Slider from "./components/Slider.tsx"
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./components/ui/scroll-based-velocity.tsx"
import Transition from './components/Transition.tsx'
import SecondaryProjects from './components/SecondaryProjects.tsx'

function App() {

  return (
    <>
      <ReactLenis root>
        <div >

          <Transition/>
          <Navbar />
          <Hero />

          <Services />




          <Projects />
          <SecondaryProjects/>

         

          <Contact />
          <Footer />




        </div>
      </ReactLenis>




    </>
  )
}

export default App
