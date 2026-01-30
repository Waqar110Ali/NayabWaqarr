import FloatingCard from "./FloatingCard";
import WaterBackground from "./WaterBackground";
import SocialBar from "./SocialBar";

import aiImg from "../../../assets/AI edited.png";
import MernImg from "../../../assets/MERN edited.png";

const Hero = () => {
  return (
    <section
      className="
        relative min-h-screen flex items-center justify-center overflow-hidden
       dark:bg-slate-950
        transition-colors duration-300
      "
    >
      {/* WATER BACKGROUND */}
      <WaterBackground />

      {/* Left Floating Card */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block z-20">
        <FloatingCard image={aiImg} direction="right" />
      </div>

      {/* Right Floating Card */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block z-20">
        <FloatingCard image={MernImg} direction="left" />
      </div>

      {/* CENTER BRAND */}
      <div className="relative text-center z-10 select-none">

        <div className="flex items-end justify-center">

          {/* GRADIENT S */}
          <span
            className="
              text-[120px] md:text-[160px]
              font-extrabold leading-none
              bg-gradient-to-b
              from-blue-900 via-blue-700 to-black
              dark:from-blue-400 dark:via-blue-500 dark:to-blue-700
              bg-clip-text text-transparent
            "
          >
            S
          </span>

          {/* HEHWA */}
          <span
            className="
              text-[64px] md:text-[130px]
              font-semibold tracking-wide
              ml-1 leading-none
              text-slate-900 m-auto dark:text-white
            "
          >
            HEHWA
          </span>
        </div>

        {/* TECHNOLOGIES */}
        <div
          className="
            mt-3
            text-[18px] md:text-[24px]
            tracking-[0.35em]
            font-medium
            text-slate-500 m-auto dark:text-white
          "
        >
          TECHNOLOGIES
        </div>
      </div>
      {/* SOCIAL BAR */}
<SocialBar />
    </section>
  );
};

export default Hero;
