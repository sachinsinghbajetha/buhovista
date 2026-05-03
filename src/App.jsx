import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import MeetBuho from "./components/MeetBuho";
import Ready from "./components/Ready";
import Results from "./components/Results";
import WhatWeSolve from "./components/WhatWeSolve";
import About from "./components/About";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Ready />
      <GetStarted />
      <WhatWeSolve />
      <MeetBuho />
      <Results />
      <About />
      <Footer />
    </main>
  );
}

export default App;
