import React from "react";
import { Users, User } from "lucide-react"; 

export default function Membership() {
  const classes = [
    {
      title: "BGICC Foundational Class",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      primary: false,
      icon: <Users size={50} />,
    },
    {
      title: "BGICC Maturity Class",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      primary: true,
      icon: <Users size={50} />,
    },
  ];

  return (
    <section className="bg-[#0B0B0B] text-center py-16">
      <h2 className="text-4xl font-bold text-white mb-2">Membership</h2>
      <div className="w-16 h-1 bg-[#f5de12] mx-auto mb-4 rounded-full"></div>
      <p className="text-gray-100 mb-12">
        Join our membership classes and become a bonafide member of BGICC
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6">
        {classes.map((cls, i) => (
          <div
            key={i}
            className={`w-[340px] h-[420px] rounded-xl shadow-lg p-8 flex flex-col items-center justify-between transition-transform duration-300 ${
              cls.primary
                ? "bg-[#003479] text-white"
                : "bg-white text-black"
            }`}
          >
            <div className="bg-gray-100 p-4 rounded-lg text-black mb-4 justify-center">
              {cls.icon}
            </div>
            <h3 className="font-semibold text-xl mb-2">{cls.title}</h3>
            <p className="text-lg text-center text-gray-500 mb-6 px-2">
              {cls.description}
            </p>
            <button
              className={`w-full py-3 rounded-md font-medium transition ${
                cls.primary
                  ? "bg-white text-[#003479] hover:bg-gray-100"
                  : "bg-[#003479] text-white hover:bg-[#002d64]"
              }`}
            >
              Join Class
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
