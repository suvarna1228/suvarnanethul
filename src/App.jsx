import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import MemoryMap from "./pages/MemoryMap";
import Gallery from "./pages/Gallery";
import Letter from "./pages/Letter";
import { useEffect, useState } from "react";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // Auto-close after 5 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-500">
      
      {/* 🎉 Splash Alert */}
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white text-pink-600 font-semibold px-6 py-4 rounded-2xl shadow-2xl animate-bounce">
            <p className="text-lg text-center">
              I have used <span className="text-yellow-500 font-bold">ChatGPT</span>.
              <br />
              Otherwise, you’ll tease my grammar mistakes 😅
            </p>
            <button
              onClick={() => setShowSplash(false)}
              className="mt-4 mx-auto block bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-full transition-all"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      </div>

      <Navbar />
      <Home />
      <OurStory />
      <Gallery />
      <MemoryMap />
      <Letter />
    </div>
  );
}

export default App;
