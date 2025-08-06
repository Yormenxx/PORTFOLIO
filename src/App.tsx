
import Hero from "./components/Hero.tsx"
import Navbar from "./components/Navbar.tsx"
import Services from "./components/Services.tsx"
import Projects from "./components/Projects.tsx"
import Slider from "./components/Slider.tsx"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"


function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Slider />
        <Services />
        <Projects />
        {/* <Contact />
        <Footer /> */}
      </div>



    </>
  )
}

export default App
