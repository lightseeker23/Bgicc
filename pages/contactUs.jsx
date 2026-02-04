import React from "react";
import slide3 from "/assets/slide 3.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="bg-white">
      {/* HERO */}
      <div className="relative h-[150px]">
        <img
          src={slide3}
          alt="Contact BGICC"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#003479]/70 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold pt-20">Contact Us</h1>
        </div>
      </div>

      {/* BLUE LINE */}
      <div className="h-[3px] bg-[#003479]" />

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto text-center px-4 pt-10 pb-6">
        <h2 className="text-2xl font-bold mb-2">
          We’d Love to Hear from You!
        </h2>

        <p className="text-gray-600  mb-10 text-xl">
          Whether you have a question, need prayer, or want to learn more about
          our church, we’re here for you. Reach out to us through any of the
          following ways:
        </p>

        <h3 className="font-semibold mb-6 text-3xl">Reach out to Us</h3>

        {/* CONTACT CARD */}
        <div className="bg-[#F8F9FA] rounded-2xl shadow-sm max-w-md mx-auto px-20 py-7">
          <h4 className="font-semibold mb-6">
            General Enquiries, Testimonies / Giving Lines
          </h4>

          <div className="space-y-4  text-gray-700">
            <div>
              <p className="font-medium">Email:</p>
              <p>bgicc.kuje@gmail.com</p>
            </div>

            <div>
              <p className="font-medium">Whatsapp Number:</p>
              <p>0706 627 7433</p>
            </div>

            <div>
              <p className="font-medium">Mobile Number:</p>
              <p>0706 627 7433</p>
            </div>
          </div>
        </div>
      </div>

          {/* ADDRESS + MAP */}
    <div className="max-w-5xl mx-auto px-4 mt-14 mb-10">
      <div className="text-center mb-6">
        <p className="font-semibold flex items-center justify-center gap-2 text-2xl">
          📍 Address
        </p>
        <p className="text-2xl text-gray-600 mt-1">
          Plot 410, General Hospital Road, Kuje, Abuja, Nigeria.
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-sm">
        <iframe
          title="BGICC Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.950035598795!2d7.2321699743771095!3d8.884237691239482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e65fbbe0f800b%3A0xf88ff37180f4618e!2sBeautiful%20Gate%20International%20Christian%20Centre%20(BGICC)!5e0!3m2!1sen!2sng!4v1769474021795!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[280px]"
        />
      </div>
    </div>

    {/* SOCIAL MEDIA */}
<div className="max-w-6xl mx-auto px-4 py-14">
  <div className="text-center mb-10">
    <h3 className="text-2xl font-semibold mb-2">
      Reach out to Us via Social Media
    </h3>
    <p className="text-medium text-gray-600">
      Kindly follow us on social media for more information
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
    {[
      { icon: <FaFacebookF />, name: "BGICC", link: "https://www.facebook.com/beautifulgateicc/" },
      { icon: <FaInstagram />, name: "BGICC", link: "https://www.instagram.com/beautifulgateicc/" },
      { icon: <FaYoutube />, name: "BGICC", link: "https://www.youtube.com/@beautifulgateicc" },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-[#F8F9FA] w-full max-w-xs rounded-2xl p-8 flex flex-col items-center shadow-sm hover:-translate-y-1 hover:shadow-md transition"
      >
        <div className="text-4xl mb-4 text-black">
          {item.icon}
        </div>

        <p className="text-sm mb-4 font-semibold">{item.name}</p>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#003479] text-white text-sm px-8 py-2 rounded-lg hover:opacity-90 transition"
        >
          Follow Us
        </a>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
