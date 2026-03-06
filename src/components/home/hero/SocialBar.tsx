import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <a
    href="#"
    className="
      w-10 h-10 mx-1 flex items-center justify-center
      rounded-full
      bg-slate-100 dark:bg-slate-950
      text-slate-900 dark:text-white
      hover:bg-blue-600 hover:text-white
      transition-all duration-300
    "
  >
    {children}
  </a>
);

const SocialBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        z-50 transition-all duration-500 ease-in-out
         dark:bg-slate-800 shadow-xl

        ${isSticky
          ? "fixed right-0 top-1/2 -translate-y-1/2 flex flex-col  px-3 py-6"
          : "absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-row social-iconss px-6 py-3"}
      `}
    >
      <SocialIcon><FaFacebookF /></SocialIcon>
      <SocialIcon><FaInstagram /></SocialIcon>
      <SocialIcon><FaLinkedinIn /></SocialIcon>
      <SocialIcon><FaTwitter /></SocialIcon>
      <SocialIcon><FaWhatsapp /></SocialIcon>
    </div>
  );
};

export default SocialBar;
