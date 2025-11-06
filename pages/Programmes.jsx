import React from "react";
import img1 from "/assets/img1.jpg";
import img2 from "/assets/img2.jpg";
import img3 from "/assets/img3.jpg";
import img4 from "/assets/img4.jpg";

export default function Programmes() {
  const images = [img1, img2, img3, img4];

  return (
    <div className="bg-white py-10 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-[20px]">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-[300px] h-[350px] object-cover rounded-[20px]"
            />
          </div>
        ))}
      </div>
      <section className="text-center py-16 bg-white px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Upcoming Events & Programmes
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Stay connected to the power, glory, and blessings at Beautiful Gate
        International Christian Centre! Join us for upcoming life-changing
        events designed to ignite your faith, renew your spirit, and transform
        your life.
      </p>
    </section>
    </div>
    
  );
}
