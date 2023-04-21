import Image from "next/image";
import React from "react";
const Arr = [
  {
    title: "Authentication",
    describe: "Detects BOT-net members in the selected community.",
    src: "/image/secure_data.png",
  },
  {
    title: "Handy",
    describe: "Take care of all customers at one screen",
    src: "/image/secure_data.png",
  },
  {
    title: "Tracking",
    describe: "Discussion trends among dozens of investment community groups.",
    src: "/image/secure_data.png",
  },
  {
    title: "Monitor",
    describe: "Know what your community is saying?",
    src: "/image/secure_data.png",
  },
  {
    title: "Trend",
    describe: "New Analytical Tool besides Onchain Data and Indicators",
    src: "/image/secure_data.png",
  },
  {
    title: "Probe",
    describe: "Find mentions of your brand across social platforms.",
    src: "/image/secure_data.png",
  },
  {
    title: "Alert",
    describe: "Community FUD early warning.",
    src: "/image/secure_data.png",
  },
  {
    title: "Spying",
    describe: "Competitor strategy analysis",
    src: "/image/secure_data.png",
  },
];
export default function Features() {
  return (
    <section className="row_am features_section" id="features">
      <div className="container">
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <h2>
            What is the <span>problem solved?</span>
          </h2>
          <p>
            BitScope is a &quot;social listening&quot; project that integrates
            AI&apos;s excellent language <br /> processing capabilities. This
            brings a breath of fresh air to seemingly old <br /> problems.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {Arr.map((item, index) => {
            return (
              <div
                className="w-64 h-72 border-2 p-4 border-purple-300"
                key={index}
              >
                <div
                  className="data_block"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="icon flex justify-center">
                    <Image
                      width={120}
                      height={120}
                      alt="icon8"
                      src={item.src}
                      className="icon"
                    />
                  </div>
                  <div className="text text-center">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p>{item.describe}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}