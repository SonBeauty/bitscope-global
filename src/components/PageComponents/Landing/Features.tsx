import Image from "next/image";
import React from "react";
import TitleDescribeLayout from "./TitleDescribeLayout";
import { Arr } from "@/constant/landing";

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
                    <h4 className="font-semibold text-base text-black-500">
                      {item.title}
                    </h4>
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
