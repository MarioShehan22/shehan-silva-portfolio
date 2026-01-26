import Hero from "./component/Hero.tsx";
import NavigationHeader from "./component/NavigationHeader.tsx";
import AboutSection from "./component/AboutSection.tsx";
import "./App.css"
import ProjectsSection from "./component/ProjectsSection.tsx";
import ContactSection from "./component/ContactSection.tsx";
import Footer from "./component/Footer.tsx";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <NavigationHeader/>
        <Hero/>
        <AboutSection/>
        <ProjectsSection/>
        {/*<TestimonialsSection/>*/}
        <ContactSection/>
        <Footer/>
    </>
  )
}

export default App
