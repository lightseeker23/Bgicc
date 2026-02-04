import React from "react";
import img1 from "/assets/img1.jpg";
import img2 from "/assets/img2.jpg";
import img3 from "/assets/img3.jpg";
import img4 from "/assets/img4.jpg";

export default function OurMandate() {
  const images = [img1, img2, img3, img4];

  return (
    <div>
      {/* White Card */}
      <div>

        {/* Title */}
        <div className="bg-linear-to-b from-indigo-900 to-[#003479] text-white pt-5 pb-5 text-center shadow-md mb-10">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>

         <h2 className="text-3xl font-semibold text-center mb-12">Our Mandate</h2>
        {/* Diagonal Image Strip */}
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
      
        {/* Content */}
        <div className="px-10 py-12">
          <h3 className="font-bold text-lg mb-4">
            Fulfilling God’s Purpose, Advancing His Kingdom
          </h3>

          <p className="text-gray-600 mb-8">
            At BGICC, we are called to be a light in the world, sharing the love of Christ,
            making disciples, and impacting lives for His glory. Our mandate is rooted in
            Scripture and driven by a passion to see people encounter God, grow in faith,
            and fulfill their divine purpose.
          </p>

          <h4 className="font-bold mb-4">
            Our God-Given Mandate
          </h4>

          <ol className="space-y-6 text-gray-700">
            <li>
              <span className="font-semibold">
                1. Preach the Gospel to All Nations
              </span>
              <p className="mt-1 text-sm">
                Matthew 28:19 — Sharing the message of Christ and leading people into a
                life-changing relationship with Him.
              </p>
            </li>

            <li>
              <span className="font-semibold">
                2. Raise Disciples and Equip Believers
              </span>
              <p className="mt-1 text-sm">
                Ephesians 4:12 — Building strong believers through biblical truth,
                empowerment, and spiritual growth.
              </p>
            </li>

            <li>
              <span className="font-semibold">
                3. Build a House of Prayer and Worship
              </span>
              <p className="mt-1 text-sm">
                Mark 11:17 — Creating an atmosphere where God’s presence transforms lives.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
