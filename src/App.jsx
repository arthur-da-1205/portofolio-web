import About from "./sections/About";
import { Clients } from "./sections/Clients";
import { Contact } from "./sections/Contact";
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
      <Contact />
    </>
  );
}

export default App;
