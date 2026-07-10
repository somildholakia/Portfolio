import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Background from "./components/Background";

function App() {
  return (
    <>
     <ScrollProgress />
      <Background />

      <div className="relative text-white">

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

        <Footer />

      </div>
    </>
  );
}

export default App;