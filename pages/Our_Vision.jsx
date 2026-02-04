import React from "react";
import visionImg from "/assets/vision.jpg";
import missionImg from "/assets/mission.jpg";
import goalImg from "/assets/goal.jpg";

export default function OurVision() {
  const aboutSections = [
    {
      title: "Our Vision",
      img: visionImg,
      text: "At Beautiful Gate International Christian Centre, we are a family of believers who come together to worship God, grow in faith, and serve our community. Our vision is to guide lives into Christ’s transforming purpose, spreading His love and empowering people to live out their God-given potential."
    },
    {
      title: "Our Mission",
      img: missionImg,
      text: "Our mission is to raise and equip believers to walk in power, purpose, and prosperity, fulfilling God’s divine plan for their lives through faith, teaching, and love."
    },
    {
      title: "Our Goals",
      img: goalImg,
      text: "Our goal is to expand God’s kingdom by reaching souls, nurturing disciples, and demonstrating Christ’s love to the world."
    },
  ];

  return (
    <section className="bg-white py-12">
      {/* Header */}
      <div className="bg-linear-to-b from-indigo-900 to-[#003479] text-white pt-10 pb-5 text-center shadow-md mb-10">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 mt-10 space-y-10">
        {aboutSections.map((item, index) => (
          <div
            key={index}
            className="bg-[#F8F9FA] rounded-2xl shadow-sm p-6 flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-t-[100px] w-[418px] h-[248px] object-cover mb-4 pt-4"
            />
            <h3 className="font-bold text-4xl mb-2 p-5">{item.title}</h3>
            <p className="text-xl text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
