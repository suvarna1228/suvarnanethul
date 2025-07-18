import { OURSTORY_CONTENT } from "../constants/index";
import loveImg from "../assets/images/love_circle.png"; // Optional decorative image

const OurStory = () => {
  return (
    <section
      id="ourstory"
      className="min-h-screen bg-gradient-to-br px-4 py-20 flex flex-col items-center justify-center"
    >
      <div className="relative animate-fade-in-down max-w-3xl w-full bg-white/90 border-4 border-pink-300 rounded-3xl shadow-xl p-8 sm:p-12 text-neutral-700 text-center">
        
        {/* Optional floating image at top center */}
        <img
          src={loveImg}
          alt="Love"
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-md bg-white object-cover"
        />

        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-6">Our Story</h2>
        
        <p className="whitespace-pre-line text-lg leading-relaxed">
          {OURSTORY_CONTENT}
        </p>
      </div>
    </section>
  );
};

export default OurStory;
