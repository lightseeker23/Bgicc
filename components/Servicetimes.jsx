import React from "react";
import Door from "/assets/Door.png";
import Cup from "/assets/Cup.png";
import CITH from "/assets/Church In The House.png";
import Woman from "/assets/Woman.png";
import pastor from "/assets/pastor.jpg";

export default function ServiceTimes() {
  const services = [
    {
      title: "Sound from Heaven Service",
      image: Door,
      schedule: [
        "(Every Sunday)",
        "1st Service (7:00am - 9:30am)",
        "2nd Service (9:30am - 12:00noon)",
        "3rd Service (12:00noon - 2:00pm)",
        "Time Zone: GMT+1",
      ],
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Times of Refreshing Communion",
      image: Cup,
      schedule: [
        "(Every Wednesday)",
        "Service Time (6:00pm - 8:00pm)",
        "Time Zone: GMT+1",
      ],
      color: "from-green-500 to-teal-400",
    },
    {
      title: "Women in Worship",
      image: Woman,
      schedule: [
        "(Every Saturday)",
        "Meeting Time (10:00am - 12:00noon)",
        "Time Zone: GMT+1",
      ],
      color: "from-orange-500 to-yellow-400",
    },
    {
      title: "Church in the House",
      image: CITH,
      schedule: [
        "(Every Friday)",
        "Meeting Time (6:00pm - 7:30pm)",
        "Time Zone: GMT+1",
      ],
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
        {/* Pastor Image */}
        <div className="rounded-2xl overflow-hidden shadow-md h-[500px]">
          <img src={pastor} alt="Pastor" className="w-full h-full object-cover" />
        </div>

        {/* Service Cards */}
        <div className="md:col-span-2 grid grid-cols-2 grid-rows-2 gap-6 h-[500px]">
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative rounded-2xl text-white bg-linear-to-r ${service.color} shadow-md overflow-hidden group`}
            >
              {/* Default View */}
              <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden transition-none">
                <img src={service.image} alt={service.title} className="w-20 h-20 mb-1 object-contain" />
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>

              {/* Hover View */}
<div className="hidden group-hover:flex flex-col justify-start h-full p-5 cursor-pointer">
  <div className="flex justify-between items-start">
    <h3 className="text-lg font-semibold text-left">{service.title}</h3>
    <img src={service.image} alt={service.title} className="w-10 h-10 object-contain" />
  </div>

  <div className="bg-white/10 mt-4 rounded-xl p-4 text-sm text-center flex flex-col justify-center h-40">
    {service.schedule.map((line, j) => (
      <p key={j}>{line}</p>
    ))}
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
