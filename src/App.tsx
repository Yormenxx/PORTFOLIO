import GlowCursor from './components/GlowCursor';
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


      <GlowCursor
        color="#10b981"
        intensity={1.3}
        trailWidth={3}
        linger={1.4}
        glow={1.2}
        theme="dark"
        clickBurst

      >
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
      </GlowCursor>





    </>
  );
}

export default App
