import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Experience from "./components/Experience.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="bg-black text-white pb-10 min-h-screen">
      <div className="max-w-2xl mx-auto px-5 py-10">
        <About />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;
