import { useState, useEffect } from "react";
const slide1 = "/assets/slide 1.jpg";
const slide2 = "/assets/slide 2.jpg";
const slide3 = "/assets/slide 3.jpg";


const images = [
 slide1,
  slide2,
  slide3,
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(timer);
  }, [length]);

  // Manual navigation
  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="relative w-full h-[700px] overflow-hidden rounded-lg shadow-lg ">
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
