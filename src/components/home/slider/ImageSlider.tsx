import { useEffect, useState } from "react";
import slide1 from "../../../assets/confernnce day 1 edited.png";
import slide2 from "../../../assets/confernce day 2.png";
import slide3 from "../../../assets/ai hecathon edited.png";

const slides = [slide1, slide2, slide3];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden ">
      {/* SLIDES */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((img, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* OPTIONAL OVERLAY (like tafsol) */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
    </section>
  );
};

export default ImageSlider;
