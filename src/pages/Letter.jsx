import { useState } from "react";
import { LETTER_CONTENT } from "../constants/index";
import { FaEnvelope, FaEnvelopeOpenText } from "react-icons/fa";
import seal from "../assets/images/1000000970.jpg"; // use your round photo as seal

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="letter"
      className="min-h-screen animate-fade-in-down flex items-center justify-center px-4 py-16"
    >
      {!isOpen ? (
        <div
          className="relative  cursor-pointer hover:scale-105 transition duration-300"
          onClick={() => setIsOpen(true)}
        >
          <h2 className="text-4xl font-bold justify-center items-center flex text-pink-600 ">Tap Here Baby</h2>
          <FaEnvelope className="md:text-[400px] text-[200px] text-pink-600 drop-shadow-xl " />

          
          <img
            src={seal}
            alt="Seal"
            className="md:w-24 md:h-24 w-10 h-10 rounded-full border-4 border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md"
          />
          
        </div>
      ) : (
        <div className="max-w-2xl bg-white/90 px-6 py-10 rounded-3xl shadow-2xl text-center animate-fadeIn">
          <FaEnvelopeOpenText className="text-5xl text-pink-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-pink-500 mb-6">My Letter to You</h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line italic font-[Caveat]">
            {LETTER_CONTENT}
          </p>

        </div>
      )}
    </section>
  );
};

export default Letter;
