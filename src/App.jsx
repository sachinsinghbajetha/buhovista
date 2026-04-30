import Navbar from "./common/Navbar";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Ready from "./components/Ready";
import WhatWeSolve from "./components/WhatWeSolve";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Ready />
      <GetStarted />
      <WhatWeSolve />
    </main>
  );
}

export default App;
