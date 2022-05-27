import About from "./sections/About";
import { Clients } from "./sections/Clients";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Portfolio from "./sections/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
    </>
  );
}

export default App;
