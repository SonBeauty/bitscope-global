import Image from "next/image";
import React from "react";
import TitleSubLayout from "../PageComponents/Landing/TitleSubLayout";
export default function Design() {
  return (
    <section className="modern_ui_section mt-6">
      <div className="container">
        <div className="row items-center justify-center">
          <div className="col-lg-5 mt-12">
            <div className="ui_text">
              <TitleSubLayout
                title="BIT TRACKING"
                des="A comprehensive social media listening program."
                sub="Listening is the best way to understand anyone's
                feelings. The cutting edge of Artificial Intelligence now enables
                the listening to millions of lines of messages, providing
                insight into customers or the flow of trends."
              />

              <ul className="design_block">
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Watchlist</h4>
                  <p className="text-">
                    A list of high-quality signal groups is available, but it is
                    not comprehensive enough to track all content.
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Catch the trend</h4>
                  <p className="text-">
                    Large language model analysis allows identifying important
                    &quot;keywords&quot; that could be &quot;Trend&quot;.
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1500">
                  <h4>Customer insights</h4>
                  <p className="text-">
                    The limitless potential of artificial intelligence (AI)
                    makes every customer conversation heard.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="" data-aos="fade-in" data-aos-duration="1500">
              <div className="left_img">
                <Image
                  width={650}
                  height={775}
                  alt="app"
                  src="/image/Bit_Tracking.svg"
                  className="moving_position_animatin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
