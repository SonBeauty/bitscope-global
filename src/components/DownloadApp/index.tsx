import Image from "next/image";
import Link from "next/link";
import React from "react";
import Testimonial from "../Testimonial";
export default function DownloadApp() {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      const element = document.getElementsByClassName("free_text");
      const position = element[0].getBoundingClientRect();

      if (position.top < window.innerHeight && position.bottom >= 0) {
        const elm = document.getElementsByClassName(
          "purple_backdrop"
        ) as HTMLCollectionOf<HTMLElement>;
        elm[0].style.opacity = "1";
      } else {
        const elm = document.getElementsByClassName(
          "purple_backdrop"
        ) as HTMLCollectionOf<HTMLElement>;
        elm[0].style.opacity = "0";
      }
    });
  }
  return (
    <>
      <section
        className="row_am free_app_section review_freeapp"
        id="getstarted"
      >
        <div className="container">
          <div
            className="free_app_inner aos-init"
            data-aos="fade-in"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <div className="anim_line dark_bg">
              <span>
                <Image
                  width={1}
                  height={100}
                  alt="anim_line"
                  src="/image/anim_line.png"
                />
              </span>
              <span>
                <Image
                  width={1}
                  height={100}
                  alt="anim_line"
                  src="/image/anim_line.png"
                />
              </span>
              <span>
                <Image
                  width={1}
                  height={100}
                  alt="anim_line"
                  src="/image/anim_line.png"
                />
              </span>
              <span>
                <Image
                  width={1}
                  height={100}
                  alt="anim_line"
                  src="/image/anim_line.png"
                />
              </span>
              <span>
                <Image
                  width={1}
                  height={100}
                  alt="anim_line"
                  src="/image/anim_line.png"
                />
              </span>
              <span>
                <Image
                  width={1}
                  height={100}
                  alt="anim_line"
                  src="/image/anim_line.png"
                />
              </span>
              <span>
                <Image
                  width={1}
                  height={100}
                  alt="anim_line"
                  src="/image/anim_line.png"
                />
              </span>
              <span>
                <Image
                  width={1}
                  height={100}
                  alt="anim_line"
                  src="/image/anim_line.png"
                />
              </span>
              <span>
                <Image
                  width={1}
                  height={100}
                  alt="anim_line"
                  src="/image/anim_line.png"
                />
              </span>
            </div>
            <div className="row">
              <div className="col">
                <div className="free_text">
                  <Testimonial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="purple_backdrop"></div>
    </>
  );
}