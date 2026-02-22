import react from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './index.css'

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
    </>
  )
}

export default App;