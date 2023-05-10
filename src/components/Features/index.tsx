import Image from "next/image";
import React from "react";
import TitleDescribeLayout from "../PageComponents/Landing/TitleDescribeLayout";
const Arr = [
  {
    title: "Authentication",
    describe: "Detects BOT-net members in community.",
    src: "/image/authen_icon.svg",
  },
  {
    title: "Handy",
    describe: "Take care of all customers at one screen.",
    src: "/image/Handy_icon.svg",
  },
  {
    title: "Tracking",
    describe: "Important things cannot be missed.",
    src: "/image/Tracking_icon.svg",
  },
  {
    title: "Monitor",
    describe: "See all custommers in one screen ?.",
    src: "/image/monitor_icon.svg",
  },
  {
    title: "Trending Report",
    describe: "Daily's trending topics are mentioned widely.",
    src: "/image/trending_icon.svg",
  },
  {
    title: "Probe",
    describe: "Listen to your brand on the internet.",
    src: "/image/Probe_icon.svg",
  },
  {
    title: "Alert",
    describe: "Community FUD early warning.",
    src: "/image/alert_icon.svg",
  },
  {
    title: "Spying",
    describe: "Competitor strategy analysis.",
    src: "/image/spying_icon.svg",
  },
];
export default function Features() {
  return (
    <section className="row_am features_section">
      <div className="container">
        <TitleDescribeLayout
          aos="fade-up"
          title={
            <>
              What is the <span>problem solved?</span>
            </>
          }
          describe={
            <>
              BitScope is a &quot;social listening&quot; project that integrates
              AI&apos;s excellent language
              <br /> processing capabilities. BitScope is specifically designed
              to cater to the requirements of an unique
              <br />
              blockchain users.
            </>
          }
        />
        <div className="flex flex-wrap items-center justify-center gap-6 bg-white max-w-[1170px] mx-auto rounded-3xl px-1 sm:px-8 py-3 mt-16">
          {Arr.map((item, index) => {
            return (
              <div
                className="w-[155px] md:w-56 max-h-[200px] md:h-56 p-1 md:p-4"
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
                    <h4 className="font-semibold text-base">{item.title}</h4>
                    <p className="">{item.describe}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div id="authentication"></div>
      </div>
    </section>
  );
}
