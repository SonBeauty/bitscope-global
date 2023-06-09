import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsApple } from "react-icons/bs";
import { ImAndroid } from "react-icons/im";
import { AiFillWindows } from "react-icons/ai";
import AnimLine from "./AnimLine";
export default function Work() {
  const [ytShow, setytShow] = useState(false);
  return (
    <>
      <section className="row_am how_it_works" id="how_it_work">
        <div className="container">
          <div className="how_it_inner">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <h2>
                <span>How it works</span> - 3 easy steps
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typese
                tting <br /> indus orem Ipsum has beenthe standard dummy.
              </p>
            </div>
            <div className="step_block">
              <ul>
                <li>
                  <div
                    className="step_text"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <h4 className="mb-2">Download app</h4>
                    <div className="app_icon">
                      <Link href="#">
                        <ImAndroid className="w-full h-full p-2" />
                      </Link>
                      <Link href="#">
                        <BsApple className="w-full h-full p-2" />
                      </Link>
                      <Link href="#">
                        <AiFillWindows className="w-full h-full p-2" />
                      </Link>
                    </div>
                    <p>Download App either for Windows, Mac or Android</p>
                  </div>
                  <div className="step_number">
                    <h3>01</h3>
                  </div>
                  <div
                    className="step_img"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <Image
                      width={360}
                      height={240}
                      alt="app"
                      src="/image/enjoy_app.png"
                    />
                  </div>
                </li>
                <li>
                  <div
                    className="step_text"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <h4>Create account</h4>
                    <span>14 days free trial</span>
                    <p>
                      Sign up free for App account. One account for all devices.
                    </p>
                  </div>
                  <div className="step_number">
                    <h3>02</h3>
                  </div>
                  <div
                    className="step_img"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <Image
                      width={360}
                      height={240}
                      alt="app"
                      src="/image/enjoy_app.png"
                    />
                  </div>
                </li>
                <li>
                  <div
                    className="step_text"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <h4>It’s done, enjoy the app</h4>
                    <span>
                      Have any questions check our <Link href="#">FAQs</Link>
                    </span>
                    <p>
                      Get most amazing app experience,Explore and share the app
                    </p>
                  </div>
                  <div className="step_number">
                    <h3>03</h3>
                  </div>
                  <div
                    className="step_img"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <Image
                      width={360}
                      height={240}
                      alt="app"
                      src="/image/enjoy_app.png"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="yt_video" data-aos="fade-in" data-aos-duration="1500">
            <div className="anim_line dark_bg">
              <AnimLine number={8} />
            </div>
            <div className="thumbnil">
              <span className="banner_shape1">
                <Image
                  width={25}
                  height={27}
                  alt="app"
                  src="/image/banner-shape1.png"
                />
              </span>
              <span className="banner_shape2">
                <Image
                  width={25}
                  height={27}
                  alt="app"
                  src="/image/banner-shape2.png"
                />
              </span>
              <span className="banner_shape3">
                <Image
                  width={25}
                  height={27}
                  alt="app"
                  src="/image/banner-shape3.png"
                />
              </span>
              <Image
                width={1024}
                height={350}
                className="w-full"
                alt="app"
                src="/image/yt_thumb.png"
              />
              <Link
                href="#"
                className="popup-youtube play-button"
                data-url="#"
                onClick={() => setytShow(true)}
                data-toggle="modal"
                data-target="#myModal"
                title="XJj2PbenIsU"
              >
                <div className="play_btn">
                  <Image
                    width={100}
                    height={100}
                    alt="app"
                    className="pt-4 ml-4"
                    src="/image/play_icon.png"
                  />
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
                Let’s see virtually how it works
                <span>Watch video</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {ytShow && (
        <>
          <div
            className="modal fade youtube-video show"
            id="myModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-modal="true"
            style={{ paddingRight: "17px", display: "block" }}
            onClick={() => setytShow(!ytShow)}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <button
                  id="close-video"
                  type="button"
                  className="button btn btn-default text-right"
                  data-dismiss="modal"
                >
                  <i
                    className="icofont-close-line-circled"
                    onClick={() => setytShow(!ytShow)}
                  ></i>
                </button>
                <div className="modal-body">
                  <div id="video-container" className="video-container">
                    <iframe
                      id="youtubevideo"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&amp;mute=1"
                      width="640"
                      height="360"
                    ></iframe>
                  </div>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
          <div className="purple_backdrop"></div>
        </>
      )}
    </>
  );
}
