import { useState } from "react";
import { GALLERY } from "../constants/index";

const sections = Object.keys(GALLERY);

const Gallery = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <section id="gallery" className="md:py-16 p-2 md:px-20 text-center">
      <h2 className="text-4xl font-bold text-pink-600 mb-10">Our Gallery</h2>

      
      <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-down">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`md:px-4 md:py-2 px-1 py-1 rounded-lg border-2 font-semibold transition-colors duration-300 ${
              activeSection === section
                ? "bg-pink-600 text-white border-pink-500"
                : "bg-white text-pink-600 border-pink-300 hover:bg-pink-100"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-0 overflow-visible">
        {GALLERY[activeSection].map((img, index) => (
          <div
            key={index}
            className="group relative overflow-visible md:aspect-[4/3] aspect-[5/3] z-0"
          >
           
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-600  group-hover:scale-125 group-hover:z-10"
            />
            
            <div />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
