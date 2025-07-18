import { useState } from "react";

const MemoryMap = () => {
  const [mapInteractive, setMapInteractive] = useState(false);

  return (
    <section id="memorymap" className="w-full md:py-16 p-2 md:px-20 animate-fade-in-down">
      
      <h2 className="text-4xl font-bold text-center text-pink-600 mb-6">
        Memory Map
      </h2>

      {/* Embedded Map */}
      <div
        className="relative h-[80vh] w-full overflow-hidden shadow-lg"
        onClick={() => setMapInteractive(true)}
        onMouseLeave={() => setMapInteractive(false)}
      >
        {/* Transparent overlay to block scroll zoom */}
        <div
          className={`absolute top-0 left-0 w-full h-full z-10 ${
            mapInteractive ? "pointer-events-none" : "pointer-events-auto"
          }`}
        ></div>

        <iframe
          title="Our Memory Map"
          className="w-full h-full grayscale-[40%] brightness-[90%]"
          src="https://www.google.com/maps/d/embed?mid=16PnmBgPupGa2Gf12AB9qv6iGSmZQr1g&ehbc=2E312F"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default MemoryMap;
