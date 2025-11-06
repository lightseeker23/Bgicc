import React from "react";
import ServiceTimes from "../components/Servicetimes.jsx";
import Carousel from "../components/Carousel.jsx";
import AboutUs from "../components/AboutUs.jsx";
import newImg from "/assets/new.jpg";
import programmes from "/assets/programmes.jpg";
import partnership from "/assets/partnership.jpg";
import Membership from "../components/Membership.jsx"


export default function Home() {
  return (
       <>
        <Carousel />
        <ServiceTimes />
        <AboutUs />
        
        {/*This is for the Block for New members*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#FBD38D] px-10 py-12">
  {[
    { title: "I'm New Here", img : newImg },
    { title: "Upcoming Programmes", img : programmes },
    { title: "BGICC NAPHTALI Partnership", img: partnership },
  ].map((item, index) => (
    <div
      key={index}
      className="relative overflow-hidden rounded-t-[20px] rounded-b-[20px] group cursor-pointer"
    >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#003479]/0 group-hover:bg-[#003479]/60 transition-all duration-300"></div>

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white font-bold text-lg transition-all duration-300 group-hover:scale-125">
              {item.title}
            </h2>
          </div>
        </div>
      ))}
      </div>
     <Membership/>
     </>
  );
}