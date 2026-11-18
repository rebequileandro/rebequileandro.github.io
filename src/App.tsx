import { TelemetryBackground } from './components/ui/Background';
import { Noise } from './components/ui/Noise';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { LiveTelemetry } from './components/sections/LiveTelemetry';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Visual Foundation */}
      <TelemetryBackground />
      <Noise />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Projects />
        <LiveTelemetry />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
