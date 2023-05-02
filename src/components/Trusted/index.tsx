import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export default function Trusted() {
  const company_slider = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
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
    <>
      <section className="row_am trusted_section">
        <div className="container">
          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <h2>
              Trusted by <span>6000+</span> companies
            </h2>
            <p>
              Customer insight listening and analysis is considered <br />
              business-critical and is used by industry leaders.
            </p>
          </div>
          <div className="company_logos">
            <OwlCarousel
              id="company_slider"
              {...company_slider}
              className="owl-carousel owl-theme owl-loaded owl-drag"
            >
              <div className="item">
                <div className="logo">
                  <Image
                    width={160}
                    height={80}
                    alt="trust"
                    src="/image/envato.png"
                  />
                </div>
              </div>
              <div className="item">
                <div className="logo">
                  <Image
                    width={160}
                    height={80}
                    alt="trust"
                    src="/image/slack.png"
                  />
                </div>
              </div>
              <div className="item">
                <div className="logo">
                  <Image
                    width={160}
                    height={80}
                    alt="trust"
                    src="/image/paypal.png"
                  />
                </div>
              </div>
              <div className="item">
                <div className="logo">
                  <Image
                    width={160}
                    height={80}
                    alt="trust"
                    src="/image/spoty.png"
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}
