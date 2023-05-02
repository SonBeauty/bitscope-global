import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function AboutApp() {
  return (
    <section className="row_am about_app_section">
      <div className="container">
        <div className="row items-center justify-center">
          <div className="col-lg-5 relative">
            <div className="" data-aos="fade-in" data-aos-duration="1500">
              <div className="frame_img">
                <Image
                  width={900}
                  height={816}
                  alt="app"
                  src="/image/bitau.png"
                  className="moving_position_animatin w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_text !text-start">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <h2 className="">
                  <span>BIT AUTHENTICATION</span>
                </h2>
                <p className="font-bold text-xl pb-2">
                  Authenticate the percentage of real users.
                </p>
                <p className="sm:pb-0 pb-1">
                  Analyze user conversations and behavior to categorize them
                  accurately. BitScope provides an authentic view of
                  communication channels by filtering out bot accounts.
                </p>
              </div>

              <ul
                className="app_statstic"
                id="counter"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <li>
                  <div className="icon">
                    <Image
                      width={52}
                      height={52}
                      alt="app"
                      src="/image/Artboard_13.png"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="text">
                    <p></p>
                    <p className="text-lg">Project evaluation</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Image
                      width={52}
                      height={52}
                      alt="app"
                      src="/image/Artboard_13_1.png"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="text">
                    <p></p>
                    <p className="text-lg">Quality community</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Image
                      width={52}
                      height={52}
                      alt="app"
                      src="/image/Artboard_13_2.png"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="text">
                    <p></p>
                    <p className="text-lg">Effective advertising</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Image
                      width={52}
                      height={52}
                      alt="app"
                      src="/image/Artboard_13__3.png"
                      className="h-[90%] w-[90%]"
                    />
                  </div>
                  <div className="text">
                    <p></p>
                    <p className="text-lg">And More</p>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="btn puprple_btn rounded-3xl"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                START FREE TRIAL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}