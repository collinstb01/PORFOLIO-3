import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white pb-10 min-h-screen">
      <div className="max-w-2xl mx-auto px-5 py-10">
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
