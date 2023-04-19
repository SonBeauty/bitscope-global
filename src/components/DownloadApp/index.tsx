import Image from "next/image";
import Link from "next/link";
import React from "react";
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
              <div className="col-md-6">
                <div className="free_text">
                  <div className="section_title">
                    <h2>Let’s download free from apple and play store</h2>
                    <p>
                      Instant free download from apple and play store orem Ipsum
                      is simply dummy text of the printing. and typese tting
                      indus orem Ipsum has beenthe standard
                    </p>
                  </div>
                  <ul className="app_btn">
                    <li>
                      <Link href="#">
                        <Image
                          width={121}
                          height={35}
                          alt="store"
                          src="/image/appstore_blue.png"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Image
                          width={121}
                          height={35}
                          alt="store"
                          src="/image/googleplay_blue.png"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="free_img">
                  <Image
                    width={317}
                    height={646}
                    alt="store"
                    src="/image/download-screen01.png"
                  />
                  <Image
                    width={255}
                    height={519}
                    alt="store"
                    src="/image/download-screen02.png"
                    className="mobile_mockup"
                  />
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