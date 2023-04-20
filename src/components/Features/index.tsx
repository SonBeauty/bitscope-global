import Image from "next/image";
import React from "react";
const Arr = [
  {
    title: "Authentication",
    describe: "Detects BOT-net members in the selected community.",
    src: "/image/Artboard_2_2.png",
  },
  {
    title: "Handy",
    describe: "Take care of all customers at one screen",
    src: "/image/Artboard_2_6.png",
  },
  {
    title: "Tracking",
    describe: "Discussion trends among dozens of investment community groups.",
    src: "/image/Artboard_2_1.png",
  },
  {
    title: "Monitor",
    describe: "Know what your community is saying?",
    src: "/image/Artboard_2_4.png",
  },
  {
    title: "Trend Report",
    describe: "New Analytical Tool besides Onchain Data and Indicators",
    src: "/image/Artboard_2_7.png",
  },
  {
    title: "Probe",
    describe: "Find mentions of your brand across social platforms.",
    src: "/image/Artboard_2_5.png",
  },
  {
    title: "Alert",
    describe: "Community FUD early warning.",
    src: "/image/Artboard_2_2.png",
  },
  {
    title: "Spying",
    describe: "Competitor strategy analysis",
    src: "/image/Artboard_2.png",
  },
];
export default function Features() {
  return (
    <section className="row_am features_section" id="features">
      <div className="container">
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <h2>
            What is the <span>problem solved?</span>
          </h2>
          <p className="py-3">
            BitScope is a &quot;social listening&quot; project that integrates
            AI&apos;s excellent language <br /> processing capabilities. This
            brings a breath of fresh air to seemingly old <br /> problems.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 bg-white max-w-5xl mx-auto rounded-3xl px-8">
          {Arr.map((item, index) => {
            return (
              <div className="max-w-[208px] md:w-52 max-h-[240px] md:h-60 p-1 md:p-4" key={index}>
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