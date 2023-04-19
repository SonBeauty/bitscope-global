import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutApp() {
  return (
    <section className="row_am about_app_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="about_img"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div className="frame_img">
                <Image
                  width={302}
                  height={616}
                  alt="app"
                  src="/image/about-frame.png"
                  className="moving_position_animatin"
                />
              </div>
              <div className="screen_img">
                <Image
                  width={266}
                  height={361}
                  alt="app"
                  src="/image/about-screen.png"
                  className="moving_animation"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_text">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <h2>
                  Some awesome words <span>about app.</span>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and. Lorem ipsum dolor sit amet.
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
                      width={60}
                      height={60}
                      alt="app"
                      src="/image/download.png"
                    />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="17">
                        0
                      </span>
                      <span>M+</span>
                    </p>
                    <p>Download</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Image
                      width={60}
                      height={60}
                      alt="app"
                      src="/image/followers.png"
                    />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="08">
                        0{" "}
                      </span>
                      <span>M+</span>
                    </p>
                    <p>Followers</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Image
                      width={60}
                      height={60}
                      alt="app"
                      src="/image/reviews.png"
                    />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="2300">
                        1500
                      </span>
                      <span>+</span>
                    </p>
                    <p>Reviews</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Image
                      width={60}
                      height={60}
                      alt="app"
                      src="/image/countries.png"
                    />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="150">
                        0
                      </span>
                      <span>+</span>
                    </p>
                    <p>Countries</p>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="btn puprple_btn"
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