import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
import AnimLine from "./AnimLine";
import ScrollToTop from "./ScrollToTop";
export default function Footer() {
  return (
    <div className="">
      <footer>
        <div className="top_footer" id="contact">
          <div className="anim_line dark_bg">
            <AnimLine number={9} />
          </div>
          <div className="container">
            <div className="row max-w-[1170px] mx-auto">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="abt_side">
                  <div className="logo">
                    {" "}
                    <Image
                      width={250}
                      height={50}
                      alt="logo"
                      src="/image/1200X628-SVG.png"
                      className="sm:!mr-60"
                    />
                  </div>
                  <ul>
                    <li>
                      <Link href="mailto:Contact@bitscope.global">
                        Contact@bitscope.global
                      </Link>
                    </li>
                  </ul>
                  <ul className="social_media">
                    <li>
                      <Link
                        href="https://www.facebook.com/BitScopeAI/"
                        target="_blank"
                      >
                        <FaFacebook className="w-full h-full p-2" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/BitscopeAI"
                        target="_blank"
                      >
                        <FaTwitter className="w-full h-full p-2" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://discord.com/invite/ZvRrQ8Y3uM"
                        target="_blank"
                      >
                        <FaDiscord className="w-full h-full p-2" />
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="#">
                        <FaTiktok className="w-full h-full p-2" />
                      </Link>
                    </li> */}
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
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link
                        href="https://docs.bitscope.global/"
                        target="_blank"
                      >
                        Whitepaper
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="links">
                  <h3>Help & Suport</h3>
                  <ul>
                    <li>
                      <Link href="#faq">FAQs</Link>
                    </li>
                    {/* <li>
                      <Link href="#">Support</Link>
                    </li> */}

                    <li>
                      <Link
                        target="_blank"
                        href="https://docs.bitscope.global/~/changes/vlSW3dx6ULALLda4KAU3/development-team-and-partners/legal/terms-of-service-and-risk-waring"
                      >
                        Terms & conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        href="https://docs.bitscope.global/~/changes/vlSW3dx6ULALLda4KAU3/development-team-and-partners/legal/private-policy"
                      >
                        Privacy policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="try_out ">
                  <h3>Let’s Try Out</h3>
                  <ul className="app_btn ">
                    <li>
                      <Link href="/commingsoon">
                        <Image
                          width={140}
                          height={40}
                          src="/image/appstore_blue.png"
                          alt="image"
                          className="w-[90%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/commingsoon">
                        <Image
                          width={140}
                          height={35}
                          src="/image/googleplay_blue.png"
                          alt="image"
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
            <div className="row max-w-[1170px] mx-auto">
              <div className="col-md-6">
                <p>© Copyrights 2023. All rights reserved.</p>
              </div>
              <div className="col-md-6">
                <p className="developer_text">
                  Design & developed by{" "}
                  <Link href="/" target="blank">
                    BitScope Themes
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
      </footer>
    </div>
  );
}
