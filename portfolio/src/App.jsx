import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Background />
      <ScrollProgress />

      <div className="relative min-h-screen w-full text-white overflow-x-hidden">

        <Navbar />

        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />

      </div>
    </>
  );
}

export default App;