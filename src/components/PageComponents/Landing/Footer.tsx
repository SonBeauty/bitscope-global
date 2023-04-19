import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <section className="newsletter_section">
        <div className="container">
          <div className="newsletter_box">
            <div
              className="section_title"
              data-aos="fade-in"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <h2>Subscribe newsletter</h2>
              <p>Be the first to recieve all latest post in your inbox</p>
            </div>
            <form
              action=""
              data-aos="fade-in"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <button className="btn">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div className="top_footer" id="contact">
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
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="abt_side">
                  <div className="logo">
                    {" "}
                    <Image
                      width={150}
                      height={30}
                      alt="logo"
                      src="/image/1200X628-SVG-NONBACKGROUND.png"
                    />
                  </div>
                  <ul>
                    <li>
                      <Link href="#">support@example.com</Link>
                    </li>
                    <li>
                      <Link href="#">+1-900-123 4567</Link>
                    </li>
                  </ul>
                  <ul className="social_media">
                    <li>
                      <Link href="#">
                        <FaFacebook className="w-full h-full p-2" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter className="w-full h-full p-2" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram className="w-full h-full p-2" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaPinterest className="w-full h-full p-2" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="links">
                  <h3>Useful Links</h3>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="#">Services</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="links">
                  <h3>Help & Suport</h3>
                  <ul>
                    <li>
                      <Link href="/faq">FAQs</Link>
                    </li>
                    <li>
                      <Link href="#">Support</Link>
                    </li>
                    <li>
                      <Link href="/work">How it works</Link>
                    </li>
                    <li>
                      <Link href="#">Terms & conditions</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="try_out">
                  <h3>Let’s Try Out</h3>
                  <ul className="app_btn">
                    <li>
                      <Link href="#">
                        <Image
                          width={140}
                          height={40}
                          alt="app"
                          src="/image/appstore_blue.png"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Image
                          width={140}
                          height={45}
                          alt="ggg"
                          src="/image/googleplay_blue.png"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>© Copyrights 2023. All rights reserved.</p>
              </div>
              <div className="col-md-6">
                <p className="developer_text">
                  Design & developed by{" "}
                  <Link href="" target="blank">
                    BitScope
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="go_top">
          <span>
            <Image width={40} height={40} alt="app" src="/image/go_top.png" />
          </span>
        </div>
      </footer>
    </>
  );
}