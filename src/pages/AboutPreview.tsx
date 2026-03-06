// import { Link } from "react-router-dom";
import shehwaImg from "../assets/shehwa.jpg";

const AboutPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* LEFT IMAGE */}
      <div className="relative rounded-3xl overflow-hidden shadow-soft w-80 h-80">
        <img
          src={shehwaImg}
          alt="About Tafsol"
          className="w-full h-full object-cover"
        />

        {/* CTA BUTTON */}
        <div className="absolute bottom-6 left-6">
          <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium shadow hover:scale-105 transition">
            Explore SHEHWA
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold tracking-tight">WE ARE SHEHWA</h2>

        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
          We build smarter futures. Fusing cutting-edge AI with world-class
          software, we turn bold visions into powerful realities.
        </p>
      </div>
    </div>
  );
};

export default AboutPreview;
