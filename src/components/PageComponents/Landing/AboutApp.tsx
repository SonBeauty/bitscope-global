import Image from "next/image";
import Link from "next/link";
import React from "react";
import TitleSubLayout from "./TitleSubLayout";
import { arrAuthen } from "@/constant/landing";

export default function AboutApp() {
  return (
    <section className="row_am about_app_section mt-12">
      <div className="container">
        <div className="row items-center justify-center">
          <div className="col-lg-6 relative">
            <div className="" data-aos="fade-in" data-aos-duration="1500">
              <div className="frame_img mt-4 sm:mt-0">
                <Image
                  width={1000}
                  height={916}
                  alt="app"
                  src="/image/Bit_AU.svg"
                  className="moving_position_animatin w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_text">
              <TitleSubLayout
                title="Bit Authentication"
                des="Authenticate the percentage of real users."
                sub="Analyze user conversations and behavior to categorize them
              accurately. BitScope provides an authentic view of
              communication channels by filtering out bot accounts."
              />
              <ul
                className="app_statstic"
                id="counter"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                {arrAuthen.map((item, index) => {
                  return (
                    <li key={index} className="flex gap-2 w-full items-center">
                      <Image
                        width={40}
                        height={40}
                        alt="app"
                        src={item.src}
                        className=" !w-[40px] !h-[40px]"
                      />
                      <span className="text-lg font-normal leading-5 text-start ">
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/register"
                className="btn puprple_btn mt-3 rounded-3xl"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                START FREE TRIAL
              </Link>
            </div>
          </div>
        </div>
        <div id="BITbase"></div>
      </div>
    </section>
  );
}
