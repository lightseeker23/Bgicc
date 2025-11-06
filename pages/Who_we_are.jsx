import React from "react";
import pastor3 from "/assets/pastor3.jpg";
import pastor4 from "/assets/pastor4.jpg";

export default function Who_we_are() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-linear-to-b from-indigo-900 to-[#003479] text-white pt-23 pb-5 text-center shadow-md mb-10">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Who we are</h2>

        {/* Welcome Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20 bg-white p-8 rounded-t shadow-sm">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Welcome to Beautiful Gate International Christian Centre
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Beautiful Gate International Christian Centre, we are a family
              of believers who come together to worship God, grow in faith, and
              serve our community. Our mission is to glorify Jesus Christ by
              making disciples, spreading His love, and equipping people to live
              out their God-given purpose.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={pastor3}
              alt="Pastor speaking"
              className="rounded-t-[120px] shadow-md w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 pb-8 rounded-2xl shadow-sm">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src={pastor4}
              alt="Pastor speaking"
              className="rounded-t-[100px] rounded-b-[100px] shadow-md w-full max-w-md object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Story
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Beautiful Gate International Christian Centre, we are a family
              of believers who come together to worship God, grow in faith, and
              serve our community. Our mission is to glorify Jesus Christ by
              making disciples, spreading His love, and equipping people to live
              out their God-given purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
