import React from "react";
import pastor1 from "/assets/pastor1.jpg";

export default function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-2">About Us</h2>
      <div className="w-20 h-1 bg-[#f5de12] mx-auto mb-12 rounded-full"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl shadow-sm overflow-hidden px-8 py-10 gap-10">
        {/* Left Text Section */}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Welcome to Beautiful Gate International Christian Centre
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Beautiful Gate International Christian Centre, we are a family of believers
            who come together to worship God, grow in faith, and serve our community. 
            Our mission is to glorify Jesus Christ by making disciples, spreading His love,
            and equipping people to live out their God-given purpose.
          </p>
          <a href="/Who_we_are" className="bg-[#003479] text-white px-6 py-2 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-900">
            Read More
          </a>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img
            src={pastor1}
            alt="Pastor preaching"
            className="rounded-[40px] rounded-tr-[150px] rounded-tl-[150px] w-full h-[350px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
