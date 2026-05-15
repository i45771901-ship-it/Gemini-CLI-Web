import { Hero } from './components/Hero';
import { OriginStory } from './components/OriginStory';
import { Timeline } from './components/Timeline';
import { ModernAdidas } from './components/ModernAdidas';
import { Financials } from './components/Financials';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center p-6 lg:px-12 mix-blend-difference pointer-events-none">
        <div className="font-bold text-2xl tracking-tighter uppercase pointer-events-auto">adidas</div>
        <div className="three-stripes h-5 pointer-events-auto">
          <div className="stripe h-full bg-white"></div>
          <div className="stripe h-full bg-white"></div>
          <div className="stripe h-full bg-white"></div>
        </div>
      </header>

      <main>
        <Hero />
        <OriginStory />
        <Timeline />
        <ModernAdidas />
        <Financials />
      </main>

      <footer className="bg-black border-t border-zinc-900 py-12 px-6 text-center text-zinc-600 text-xs font-mono uppercase tracking-widest">
         &copy; {new Date().getFullYear()} adidas. Built for demonstration purposes.
      </footer>
    </div>
  );
}

export default App;
