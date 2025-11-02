import React from "react";
import pastor from "/assets/pastor.jpg"; 

export default function ServiceTimes() {
  const services = [
    //Still trying to find appropriate emojis for each service
    {
      title: "Sound from Heaven Sunday Service",
      icon: "🌈",
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Times of Refreshing Communion",
      icon: "🍷",
      color: "from-green-500 to-teal-400",
    },
    {
      title: "Women in Worship",
      icon: "👩🏽‍🦱",
      color: "from-orange-500 to-yellow-400",
    },
    {
      title: "Church in the House",
      icon: "⛪",
      color: "from-sky-500 to-cyan-400",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-2">Service Times</h2>
      <div className="w-16 h-1 bg-[#f5de12] mx-auto mt-1 rounded-full"></div>
      <p className="text-gray-500 mb-10 mt-4 text-lg">
        We invite you to join us in worship and fellowship during our service times.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Left Pastor Image */}
        <div className="rounded-2xl overflow-hidden shadow-md h-[500px]">
          <img
            src={pastor}
            alt="Service"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Grid (two equal rows, two columns) */}
        <div className="md:col-span-2 grid grid-cols-2 grid-rows-2 gap-6 h-[500px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl flex flex-col items-center justify-center text-white bg-linear-to-r ${service.color} shadow-md`}
            >
              <div className="text-5xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold leading-tight px-4">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}