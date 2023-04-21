import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export default function BeautifullInterface() {
  const screen_slider = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <section className="row_am interface_section">
      <div className="container-fluid">
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <h2>
            Beautifull <span>interface</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typese tting{" "}
            <br /> indus orem Ipsum has beenthe standard dummy.
          </p>
        </div>
        <div className="screen_slider">
          <OwlCarousel
            id="screen_slider"
            {...screen_slider}
            className="owl-carousel owl-theme owl-loaded owl-drag"
          >
            <div className="item">
              <div className="screen_frame_img">
                <Image
                  width={202}
                  height={418}
                  alt="interface"
                  src="/image/screen-1.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="screen_frame_img">
                <Image
                  width={202}
                  height={418}
                  alt="interface"
                  src="/image/screen-2.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="screen_frame_img">
                <Image
                  width={202}
                  height={418}
                  alt="interface"
                  src="/image/screen-3.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="screen_frame_img">
                <Image
                  width={202}
                  height={418}
                  alt="interface"
                  src="/image/screen-4.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="screen_frame_img">
                <Image
                  width={202}
                  height={418}
                  alt="interface"
                  src="/image/screen-5.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="screen_frame_img">
                <Image
                  width={225}
                  height={460}
                  alt="interface"
                  src="/image/screen-3.png"
                />
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}